import { useState, useRef, useEffect } from 'react';
import { chatbotResponses } from '../data/mockData';
import { useNightOwl } from '../hooks/useNightOwl';
import { sendAIMessage, getActiveAIProvider } from '../services/aiService';
import './AIChatbot.css';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { isNightOwl } = useNightOwl();
  const activeProvider = getActiveAIProvider();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Show greeting on first open
      const greeting = isNightOwl
        ? chatbotResponses.nightOwlGreeting
        : chatbotResponses.greeting;
      setMessages([{ role: 'assistant', content: greeting }]);
    }
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    const userMsg = { role: 'user', content: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await sendAIMessage(userText, messages);
      setMessages((prev) => [...prev, { role: 'assistant', content: response.text }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Something went wrong connecting to the AI. Let's try again!" },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className={`chatbot-fab ${isOpen ? 'chatbot-fab--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        id="chatbot-fab"
        aria-label="Open AI Chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {!isOpen && <span className="chatbot-fab__badge">AI</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot" id="chatbot-window">
          <div className="chatbot__header">
            <div className="chatbot__header-info">
              <span className="chatbot__header-icon">🤖</span>
              <div>
                <span className="chatbot__header-title">ABTalks AI Buddy</span>
                <span className="chatbot__header-status">
                  <span className="chatbot__status-dot" /> {activeProvider}
                </span>
              </div>
            </div>
            <button
              className="chatbot__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              id="chatbot-close"
            >
              ×
            </button>
          </div>

          <div className="chatbot__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot__msg chatbot__msg--${msg.role}`}>
                {msg.role === 'assistant' && <span className="chatbot__msg-avatar">🤖</span>}
                <div className="chatbot__msg-bubble">
                  <p dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot__msg chatbot__msg--assistant">
                <span className="chatbot__msg-avatar">🤖</span>
                <div className="chatbot__msg-bubble chatbot__typing">
                  <span className="chatbot__typing-dot" />
                  <span className="chatbot__typing-dot" />
                  <span className="chatbot__typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot__input-area" onSubmit={handleSend}>
            <input
              ref={inputRef}
              type="text"
              className="chatbot__input"
              placeholder="Ask about today's challenge or code..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="chatbot-input"
            />
            <button type="submit" className="chatbot__send" disabled={!input.trim() || isTyping} id="chatbot-send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>

          <div className="chatbot__footer">
            <span>Powered by {activeProvider} • Set in .env</span>
          </div>
        </div>
      )}
    </>
  );
}
