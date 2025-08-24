require('dotenv').config({ path: '.env.local' });

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
if (process.env.DATABASE_URL) {
    console.log('URL starts with:', process.env.DATABASE_URL.substring(0, 20) + '...');
}
