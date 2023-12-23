import supabase, { supabaseUrl } from "./supabase";

// getting cabins

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("there is problem in fetching cabins details");
  }

  return data;
}

// creating and editing cabins

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  // create / edit
  let query = supabase.from("cabins");
  // create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("there is problem in creating cabin");
  }

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  // delete cabin if problem in uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Image could not be uploaded and cabin was not created");
  }

  return data;
}

// Deleting Here

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("there is problem in deleting cabin");
  }

  return data;
}
