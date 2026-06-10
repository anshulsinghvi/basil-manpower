import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://etrlotpdgqoqlsxzgosk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0cmxvdHBkZ3FvcWxzeHpnb3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4ODg2NzAsImV4cCI6MjA5NjQ2NDY3MH0.X_ASZBmCS31xhv18MzPHQt9B8-5MjkDsvfxJpPy92nQ';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);