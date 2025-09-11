export const hooksLessons = [
  {
    to: "use-effect",
    title: "useEffect",
    subtitle: "Side effects in functional components",
    desc: [
      {
        type: "text",
        content: "useEffect allows you to perform side effects in functional components, such as fetching data or updating the DOM."
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return <p>Seconds: {seconds}</p>;
}
        `
      },
      {
        type: "text",
        content: "The effect runs once after the component mounts and the interval updates state every second."
      }
    ]
  },
  {
    to: "use-ref",
    title: "useRef",
    subtitle: "Access DOM elements and persist values",
    desc: [
      {
        type: "text",
        content: "useRef allows you to access DOM elements directly or persist values without re-rendering."
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
        `
      },
      {
        type: "text",
        content: "Clicking the button focuses the input using the ref without triggering a re-render."
      }
    ]
  },
  {
    to: "custom-hooks",
    title: "Custom Hooks",
    subtitle: "Reuse logic across components",
    desc: [
      {
        type: "text",
        content: "Custom hooks allow you to extract reusable logic from components."
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useState, useEffect } from 'react';

// Custom hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();
  return <p>Window width: {width}</p>;
}
        `
      },
      {
        type: "text",
        content: "The custom hook encapsulates the resize logic and can be reused in multiple components."
      }
    ]
  }
];
