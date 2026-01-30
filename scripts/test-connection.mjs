
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyDAg-HcOx7X4HFSKDlJCuYTliNMYjLQl6s';
const genAI = new GoogleGenerativeAI(apiKey);

async function testConnection() {
    try {
        console.log('Testing Gemini API Connection...');
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        console.log('Sending request to gemini-2.0-flash...');
        const result = await model.generateContent('Say "API Connection Successful" if you can read this.');
        const response = await result.response;
        const text = response.text();

        console.log('Response received:');
        console.log(text);
        console.log('-----------------------------------');
        console.log('✅ API Connection Verified!');

    } catch (error) {
        console.error('❌ API Connection Failed:', error.message);
        if (error.message.includes('429')) {
            console.log('Reason: Rate Limit Exceeded (Quota). Please wait a moment.');
        }
    }
}

testConnection();
