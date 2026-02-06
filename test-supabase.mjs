import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing Supabase Connection...');
console.log('URL:', supabaseUrl);
// console.log('Key:', supabaseKey); // Don't log key

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Missing Env Vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    try {
        // Try a simple unsupported query to check connection, or just get session
        const { data, error } = await supabase.from('non_existent_table').select('*').limit(1);

        // We actually expect a 404 or 400 for non-existent table, but if we get "Failed to fetch" it's network.
        // Better: try to sign in with a fake user to test auth endpoint (which the user is using)

        const { error: authError } = await supabase.auth.signInWithPassword({
            email: 'test@example.com',
            password: 'testpassword'
        });

        if (authError) {
            console.log('Auth response:', authError.message);
            if (authError.message.includes('fetch')) {
                console.error('FAIL: Network/Fetch error detected');
            } else {
                console.log('SUCCESS: Connected to Auth (got expected invalid login error)');
            }
        } else {
            console.log('SUCCESS: Connected to Auth');
        }

    } catch (err) {
        console.error('CRASH:', err);
    }
}

testConnection();
