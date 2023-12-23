import supabase from "./supabase";

// getting settings

export async function getSettings() {
  let { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    console.error(error);
    throw new Error("there is problem in fetching settings details");
  }

  return data;
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .select();
  if (error) {
    throw new Error("Could not update setting");
  }

  return data;
}
