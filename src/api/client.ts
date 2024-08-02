import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uqerabvotcjlcnvrxwbi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZXJhYnZvdGNqbGNudnJ4d2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NzAzNDQsImV4cCI6MjAzNzU0NjM0NH0.lqsN6ugjpyrL5qPmDZyBcUkScCuY3qobcZjJJ79AGrI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
