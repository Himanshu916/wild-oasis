import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zwvvfeqbcqqbspxawwsq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dnZmZXFiY3FxYnNweGF3d3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwNzM4ODAsImV4cCI6MjAxNjY0OTg4MH0.pWlRHNcrXpoAtSG4i2UJud6VrUpiKkxBhEYvO2Z5MgM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
