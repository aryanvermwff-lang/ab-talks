import { useState } from 'react';
import './FAQAccordion.css';

export default function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="faq" id="faq-section">
      {items.map((item) => (
        <div
          key={item.id}
          className={`faq__item ${openId === item.id ? 'faq__item--open' : ''}`}
          id={`faq-item-${item.id}`}
        >
          <button
            className="faq__trigger"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
            id={`faq-trigger-${item.id}`}
          >
            <span className="faq__number" style={{ color: 'var(--landing-accent-blue)' }}>
              {String(item.id).padStart(2, '0')}
            </span>
            <span className="faq__question">{item.question}</span>
            <span className="faq__icon">{openId === item.id ? '−' : '+'}</span>
          </button>

          {openId === item.id && (
            <div className="faq__answer" id={`faq-answer-${item.id}`}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
