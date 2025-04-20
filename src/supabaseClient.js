import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://brlvjrltbfbarxrhnnhc.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseKey) {
  console.error('Chave do Supabase não encontrada nas variáveis de ambiente');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
