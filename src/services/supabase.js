import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tadcptdifodrjfozxcfq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZGNwdGRpZm9kcmpmb3p4Y2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMjY2MzksImV4cCI6MjAwODkwMjYzOX0.stY9fHxxcdv0V2DIMWXJtv06GEdTi7G4zxw6JpIERdw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
