"use client"
import React, { useState, useEffect, useRef } from "react"
import { Howl } from "howler"
import "./TextGlitcher.css" // Import the CSS for animations

const TextGlitcher = ({ text }) => {
  const textRef = useRef(null)
  const [glitchText, setGlitchText] = useState(text)
  const [hovering, setHovering] = useState(false)

  // Initialize the Howl sound
  const sound = useRef(
    new Howl({
      src: ["/audio/UI_menu_text_rollover.mp3"], // Replace with the path to your sound file
      volume: 0.3, // Adjust the volume as needed
    })
  )

  useEffect(() => {
    let interval;
    if (hovering) {
      const shuffleCounts = Array.from({ length: text.length }, (_, i) => (i + 1) * 5); // Increase shuffle counts from left to right
      let revealProgress = 0;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const originalText = text;

      const shuffleText = () => {
        if (revealProgress < originalText.length) {
          const randomChars = originalText
            .split('')
            .map((char, index) => {
              if (index < revealProgress) return char;
              return shuffleCounts[index]-- > 0 ? (char === ' ' ? ' ' : characters.charAt(Math.floor(Math.random() * characters.length))) : char;
            })
            .join('');
          setGlitchText(randomChars);

          if (shuffleCounts[revealProgress] <= 0) {
            revealProgress++;
          }
        } else if (revealProgress === originalText.length) {
          setTimeout(() => {
            setGlitchText(originalText);
            setTimeout(() => {
              // Add a slower animation to the last letter
              if (textRef.current) textRef.current.classList.add('last-letter');
            }, 200); // Adjust this delay as needed for the slower animation
          }, 200); // Adjust this delay as needed
          revealProgress++;
        } else {
          clearInterval(interval);
        }
      };

      interval = setInterval(shuffleText, 60); // Adjust interval duration for slower revealing
    } else {
      setGlitchText(text);
      if (textRef.current) {
        textRef.current.classList.remove('last-letter');
      }
    }

    return () => clearInterval(interval);
  }, [hovering, text]);

  const scrambleText = (inputText) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return inputText.split('').map(char => {
      if (char === ' ') return ' ';
      return characters.charAt(Math.floor(Math.random() * characters.length));
    }).join('');
  };


  const handleMouseEnter = () => {
    setHovering(true)
    sound.current.play()
  }

  return (
    <div className="inline-block">
      <div className="item-content">
        <span className="background-item"></span>
        <div
          ref={textRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setHovering(false)}
          className="glitch-text"
        >
          {glitchText}
        </div>
      </div>
    </div>
  )
}

export default TextGlitcher
