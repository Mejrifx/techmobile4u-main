import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 0.05, delay = 0.5 }: UseTypewriterProps) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Clear the element
    element.innerHTML = "";
    
    // Create a timeline
    const tl = gsap.timeline({ delay });

    // Split by newlines to handle line breaks
    const lines = text.split("\n");
    let charIndex = 0;

    lines.forEach((line, lineIndex) => {
      if (lineIndex > 0) {
        // Add line break
        const br = document.createElement("br");
        element.appendChild(br);
      }

      const chars = line.split("");
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // Non-breaking space
        span.style.opacity = "0";
        element.appendChild(span);

        tl.to(span, {
          opacity: 1,
          duration: speed,
          ease: "none",
        }, charIndex * speed);

        charIndex++;
      });
    });

    return () => {
      tl.kill();
    };
  }, [text, speed, delay]);

  return textRef;
};
