import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mdrvdactoucxhhaxjijl.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
console.log(supabaseKey, supabaseUrl)

export const supabase = createClient(supabaseUrl, supabaseKey);
