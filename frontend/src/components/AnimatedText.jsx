import React, { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasAnimatedInitially, setHasAnimatedInitially] = useState(() => {
    return localStorage.getItem("hasAnimatedInitially") === "true";
  });

  useEffect(() => {
    if (!text) {
      setDisplayedText("");
      setIsTypingComplete(true);
      return;
    }

    if (hasAnimatedInitially) {
      setDisplayedText(text);
      setIsTypingComplete(true);
      return;
    }

    setDisplayedText("");
    setIsTypingComplete(false);
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
        setIsTypingComplete(true);
        setHasAnimatedInitially(true);
        localStorage.setItem("hasAnimatedInitially", "true");
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, hasAnimatedInitially]);

  return (
    <div className="animated-text-container">
      <p className={isTypingComplete ? 'cursor-blink' : ''}>
        {displayedText}
      </p>
    </div>
  );
};

export default AnimatedText;
