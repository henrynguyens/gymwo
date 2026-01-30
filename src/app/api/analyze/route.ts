import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not defined' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { age, gender, height, currentWeight, targetWeight, preferences, focusArea } = body;

    console.log('Requesting OpenRouter with key present:', !!apiKey);

    // 1. Construct the prompt
    const prompt = `
System Role: Certified Personal Trainer & Clinical Sports Nutritionist (Postpartum).

Task:
Generate a 6-week postpartum weight loss and core tightening plan for a WebApp.

User Profile:
- Age: ${age}
- Gender: Female (Postpartum)
- Height: ${height} cm
- Current Weight: ${currentWeight} kg
- Target Weight: ${targetWeight} kg
- Preferences: ${preferences ? preferences.join(', ') : 'None'}
- Focus Areas: ${focusArea || 'General'}

Rules (STRICT):
1. Output ONLY one valid JSON object. No text outside JSON.
2. Nutrition:
   - Calculate TDEE for given age & activity level
   - Set daily_calorie_target
   - 5 meals/day (3 main + 2 snacks)
   - 3 localized food options per meal
   - Each food option MUST include:
     dish_name, portion, protein_content, kcal
   - For each meal, calculate meal_kcal (based on selected option logic)
   - Calculate total_daily_kcal_consumed as the SUM of all meal_kcal
   - total_daily_kcal_consumed MUST NOT exceed daily_calorie_target
3. Workout:
   - Include: Zumba, Yoga, Strength/Core
   - Core exercises must be postpartum-safe (avoid Diastasis Recti strain)
4. Language:
   - JSON keys in English
   - JSON values in Vietnamese

JSON Schema (DO NOT CHANGE):
{
  "user_analysis": {
    "bmi": 0,
    "tdee": 0,
    "daily_calorie_target": 0,
    "total_daily_kcal_consumed": 0,
    "macros": { "p": 0, "c": 0, "f": 0 }
  },
  "nutrition_plan": {
    "meal_schedule": {
      "breakfast": {
        "meal_kcal": 0,
        "options": [
          {
            "dish_name": "",
            "portion": "",
            "protein_content": "",
            "kcal": 0
          }
        ]
      },
      "snack_1": { "meal_kcal": 0, "options": [] },
      "lunch": { "meal_kcal": 0, "options": [] },
      "snack_2": { "meal_kcal": 0, "options": [] },
      "dinner": { "meal_kcal": 0, "options": [] }
    }
  },
  "workout_plan": [
    {
      "day_name": "",
      "focus": "",
      "activity_type": "",
      "duration": "",
      "exercises": [
        { "name": "", "reps_sets": "", "technical_guide": "" }
      ]
    }
  ],
  "lifestyle_recommendations": []
}
`;

    // 2. Call OpenRouter API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "FItme",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-2.0-flash-001",
        "messages": [
          {
            "role": "user",
            "content": prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('OpenRouter API Error:', response.status, errorBody);
      throw new Error(`OpenRouter API Error: ${response.status} - ${errorBody}`);
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected OpenRouter response format:', data);
      throw new Error('Invalid response format from OpenRouter');
    }

    const content = data.choices[0].message.content;

    // 3. Parse JSON
    // Clean up markdown code blocks if present
    const jsonString = content.replace(/^```json\n|\n```$/g, '').replace(/```/g, '').trim();

    // Find the First '{' and Last '}' to extract valid JSON
    const firstOpen = jsonString.indexOf('{');
    const lastClose = jsonString.lastIndexOf('}');

    let finalJsonString = jsonString;
    if (firstOpen !== -1 && lastClose !== -1) {
      finalJsonString = jsonString.substring(firstOpen, lastClose + 1);
    }

    let parsedData;
    try {
      parsedData = JSON.parse(finalJsonString);
    } catch (e) {
      console.error('Failed to parse JSON:', finalJsonString);
      throw new Error('Invalid JSON received from AI Provider');
    }

    return NextResponse.json(parsedData);

  } catch (error: any) {
    console.error('SERVER ERROR generating plan:', error);
    return NextResponse.json(
      { error: 'Failed to generate plan: ' + error.message, details: JSON.stringify(error) },
      { status: 500 }
    );
  }
}
