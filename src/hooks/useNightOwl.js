import { useState, useEffect } from 'react';

/**
 * Night Owl Mode Hook
 * Auto-activates between 10 PM and 5 AM IST
 * Provides time-aware greetings and UI class toggling
 */
export function useNightOwl() {
  const [isNightOwl, setIsNightOwl] = useState(false);

  useEffect(() => {
    function checkTime() {
      // Get current IST time (UTC+5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 5.5 * 3600000);
      const hour = ist.getHours();

      // Night Owl: 10 PM (22) to 5 AM (5)
      const isNight = hour >= 22 || hour < 5;
      setIsNightOwl(isNight);

      if (isNight) {
        document.documentElement.classList.add('night-owl');
      } else {
        document.documentElement.classList.remove('night-owl');
      }
    }

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute

    return () => {
      clearInterval(interval);
      document.documentElement.classList.remove('night-owl');
    };
  }, []);

  const greeting = isNightOwl
    ? "You're putting in the work while others sleep. That's the difference."
    : 'Keep going, Aryan! 🔥';

  const quote = isNightOwl
    ? "Late nights build early careers. You've got this."
    : 'The code you write today is the portfolio that hires you tomorrow.';

  return { isNightOwl, greeting, quote };
}
