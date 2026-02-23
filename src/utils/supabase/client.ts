import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    // We don't throw here to avoid crashing the build, but we log a clear error
    // During runtime, this will result in a descriptive error rather than an invalid fetch to a placeholder
    console.error('CRITICAL: Supabase environment variables are missing! Requests will fail.');
}

export const supabase = createClient(
    supabaseUrl || 'https://missing-url.supabase.co',
    supabaseKey || 'missing-key'
);
