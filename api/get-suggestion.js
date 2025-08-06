// This is a Vercel Serverless Function.
// It will handle our secure API call to Google Gemini.

export default async function handler(request, response) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { userText } = request.body;

  // Your secret API key is accessed here from Vercel's environment variables
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
  
  const prompt = `You are "MindCare," a compassionate and supportive AI wellness agent. Your goal is to provide a thoughtful and detailed suggestion, around 4-5 sentences long, based on how the user is feeling. Be encouraging and offer a practical, actionable tip. Do not give medical advice.\n\nUser's feeling: "${userText}"\n\nYour supportive suggestion:`;
  
  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  try {
    const fetchResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!fetchResponse.ok) {
      const errorData = await fetchResponse.json();
      throw new Error(errorData?.error?.message || 'An unknown API error occurred.');
    }

    const data = await fetchResponse.json();
    const suggestion = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!suggestion) throw new Error("Received an unexpected or empty response from Gemini.");

    // Send the successful suggestion back to the frontend
    response.status(200).json({ suggestion: suggestion });

  } catch (error) {
    // Send any errors back to the frontend
    response.status(500).json({ error: error.message });
  }
}
