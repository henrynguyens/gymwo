
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
// import 'dotenv/config';

// Load env explicitly if needed, but normally dotenv/config handles it if .env exists
// For this script we assume GEMINI_API_KEY is in process.env

const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDAg-HcOx7X4HFSKDlJCuYTliNMYjLQl6s'; // Fallback to the one seen in other file if env missing
const genAI = new GoogleGenerativeAI(apiKey);

const schema = {
    description: "User fitness plan analysis",
    type: SchemaType.OBJECT,
    properties: {
        user_analysis: {
            type: SchemaType.OBJECT,
            properties: {
                bmi: { type: SchemaType.NUMBER },
                tdee: { type: SchemaType.NUMBER },
                daily_calorie_target: { type: SchemaType.NUMBER },
                macros: {
                    type: SchemaType.OBJECT,
                    properties: {
                        p: { type: SchemaType.NUMBER },
                        c: { type: SchemaType.NUMBER },
                        f: { type: SchemaType.NUMBER },
                    },
                    required: ["p", "c", "f"]
                }
            },
            required: ["bmi", "daily_calorie_target", "macros"]
        },
        lifestyle_recommendations: {
            type: SchemaType.ARRAY,
            items: { type: SchemaType.STRING }
        }
    },
    required: ["user_analysis", "lifestyle_recommendations"]
};

async function testStructuredOutput() {
    try {
        console.log('Testing Gemini Structured Output (JSON Schema)...');
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: schema,
            },
        });

        const prompt = "Generate a fitness plan for a 30 year old female, 160cm, 60kg, focusing on weight loss.";

        console.log('Sending request...');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log('Raw Response:');
        console.log(text);

        // Validate parsing
        const json = JSON.parse(text);
        console.log('✅ Successfully parsed JSON!');
        console.log('BMI:', json.user_analysis.bmi);
        console.log('First Tip:', json.lifestyle_recommendations[0]);

    } catch (error) {
        console.error('Test Failed:', error.message);
    }
}

testStructuredOutput();
