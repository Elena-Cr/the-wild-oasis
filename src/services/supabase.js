import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://spuszaawlnspdzwhbndz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwdXN6YWF3bG5zcGR6d2hibmR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NzQ3NzgsImV4cCI6MjAzMjA1MDc3OH0.P9Z_OJoG2Ic3b-wr2am47UIB6yypqN-0JbURh5ngfM4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
