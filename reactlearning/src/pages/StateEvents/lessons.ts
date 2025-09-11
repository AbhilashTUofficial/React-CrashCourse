export const stateLessons = [
  {
    to: "use-state-intro",
    title: "Introduction to useState",
    subtitle: "Managing state in functional components",
    desc: [
      {
        type: "text",
        content: "useState allows functional components to hold state."
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
        `
      },
      {
        type: "text",
        content: "Clicking the button updates the state and re-renders the component."
      }
    ]
  },
  {
    to: "controlled-inputs",
    title: "Controlled Inputs",
    subtitle: "Manage form inputs with state",
    desc: [
      {
        type: "text",
        content: "Controlled inputs use React state to store the input value."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Your name is: {name}</p>
    </div>
  );
}
        `
      },
      {
        type: "text",
        content: "The input value is fully controlled by React state."
      }
    ]
  },
  {
    to: "event-handling",
    title: "Event Handling",
    subtitle: "React events and handlers",
    desc: [
      {
        type: "text",
        content: "You can attach event handlers to elements in JSX."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function ClickLogger() {
  const handleClick = () => alert('Button clicked!');

  return <button onClick={handleClick}>Click Me</button>;
}
        `
      },
      {
        type: "text",
        content: "React normalizes events and uses synthetic events for cross-browser compatibility."
      }
    ]
  },
  {
    to: "multiple-states",
    title: "Multiple useState Hooks",
    subtitle: "Managing multiple pieces of state",
    desc: [
      {
        type: "text",
        content: "You can call useState multiple times for different state variables."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function MultiState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Text: {text}</p>
    </div>
  );
}
        `
      },
      {
        type: "text",
        content: "Each state variable is independent and updates trigger re-rendering."
      }
    ]
  }
];
