import { getChatResponse } from '../data/mockData';

// Reads Vite environment variables
const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
const AI_KEY = import.meta.env.VITE_AI_API_KEY || '';

const SYSTEM_PROMPT = `
You are the ABTalks AI Rebel Mentor, a high-agency, supportive coding companion for ambitious Indian college students participating in the 30-day coding challenge.
Your tone is punchy, empathetic, and encouraging. You challenge outdated college rote learning and celebrate real daily proof of work (GitHub commits & LinkedIn posts).
When answering questions about the daily challenges (e.g. Day 13: JWT Authentication with Express and bcrypt, React hooks, DSA graphs, Spark data pipelines), provide clear, concise code snippets and architectural intuition.
Keep your answers direct, actionable, and formatted with clean markdown.
`;

/**
 * Sends a message to the active AI provider (Groq, Gemini, OpenAI, OpenRouter)
 * If no key is set or call fails, falls back gracefully to the intelligent local engine.
 */
export async function sendAIMessage(userMessage, conversationHistory = []) {
  // 1. Groq Cloud API (keys starting with gsk_)
  if (AI_KEY && AI_KEY.startsWith('gsk_')) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AI_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory.slice(-4).map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data?.choices?.[0]?.message?.content;
        if (text) return { text, provider: 'Groq Llama 3.3 70B ⚡' };
      } else {
        const errText = await response.text();
        console.warn('Groq API returned error:', errText);
      }
    } catch (err) {
      console.warn('Groq API call failed, falling back to local engine:', err);
    }
  }

  // 2. Google Gemini API
  if (GEMINI_KEY && !GEMINI_KEY.includes('your_')) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${SYSTEM_PROMPT}\n\nStudent asked: ${userMessage}` }],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return { text, provider: 'Google Gemini 1.5' };
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local engine:', err);
    }
  }

  // 3. OpenAI API
  if (OPENAI_KEY && !OPENAI_KEY.includes('your_')) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory.slice(-4).map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage },
          ],
          max_tokens: 500,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data?.choices?.[0]?.message?.content;
        if (text) return { text, provider: 'OpenAI GPT-4o-mini' };
      }
    } catch (err) {
      console.warn('OpenAI call failed, falling back to local engine:', err);
    }
  }

  // 4. OpenRouter API
  if (AI_KEY && !AI_KEY.startsWith('gsk_') && !AI_KEY.includes('your_')) {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AI_KEY}`,
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.3-70b-instruct:free',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userMessage },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data?.choices?.[0]?.message?.content;
        if (text) return { text, provider: 'OpenRouter Llama 3' };
      }
    } catch (err) {
      console.warn('OpenRouter call failed, falling back to local engine:', err);
    }
  }

  // 5. Local mock engine fallback
  await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400));
  return {
    text: getChatResponse(userMessage),
    provider: 'ABTalks Local AI',
  };
}

export function getActiveAIProvider() {
  if (AI_KEY && AI_KEY.startsWith('gsk_')) return 'Groq Llama 3.3 ⚡';
  if (GEMINI_KEY && !GEMINI_KEY.includes('your_')) return 'Gemini 1.5 Flash';
  if (OPENAI_KEY && !OPENAI_KEY.includes('your_')) return 'OpenAI GPT-4o';
  if (AI_KEY && !AI_KEY.includes('your_')) return 'OpenRouter AI';
  return 'Local AI Engine';
}
