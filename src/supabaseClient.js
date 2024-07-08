import { createClient } from '@supabase/supabase-js';

const supabaseUrl = window._env_.SUPABASE_URL;
const supabaseKey = window._env_.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
