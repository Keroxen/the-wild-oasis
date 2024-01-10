import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xzcidulaqisinqaeifoa.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6Y2lkdWxhcWlzaW5xYWVpZm9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NjEzNDYsImV4cCI6MjAyMDIzNzM0Nn0.Aj7ZtJGEpxAqy9-pNkG_QoskrARYowzTWP-69t6NlG0";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
