import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://brlvjrltbfbarxrhnnhc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJybHZqcmx0YmZiYXJ4cmhubmhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MDQ0MTIsImV4cCI6MjA2MDA4MDQxMn0.lT_cNSCg_5QPFPUukHyddwyW5qeYnBZnUzVffbys6Ak';

export const supabase = createClient(supabaseUrl, supabaseKey); 