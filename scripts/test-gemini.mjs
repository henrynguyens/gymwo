
const apiKey = 'AIzaSyDAg-HcOx7X4HFSKDlJCuYTliNMYjLQl6s';

async function listModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.models) {
            console.log('Available Models:');
            data.models.forEach(m => console.log(`- ${m.name}`));
        } else {
            console.log('No models found or error:', data);
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}

listModels();
