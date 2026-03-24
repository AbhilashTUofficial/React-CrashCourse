export const stateLessons = [
  {
    to: "use-state-intro",
    title: "Introduction to useState",
    subtitle: "Managing state in functional components",
    desc: [
      {
        type: "text",
        content: "useState allows functional components to hold state.",
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
        `,
      },
      {
        type: "text",
        content:
          "Clicking the button updates the state and re-renders the component.",
      },
    ],
  },
  {
    to: "controlled-inputs",
    title: "Controlled Inputs",
    subtitle: "Manage form inputs with state",
    desc: [
      {
        type: "text",
        content: "Controlled inputs use React state to store the input value.",
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
        `,
      },
      {
        type: "text",
        content: "The input value is fully controlled by React state.",
      },
    ],
  },
  {
    to: "event-handling",
    title: "Event Handling",
    subtitle: "React events and handlers",
    desc: [
      {
        type: "text",
        content: "You can attach event handlers to elements in JSX.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
function ClickLogger() {
  const handleClick = () => alert('Button clicked!');

  return <button onClick={handleClick}>Click Me</button>;
}
        `,
      },
      {
        type: "text",
        content:
          "React normalizes events and uses synthetic events for cross-browser compatibility.",
      },
    ],
  },
  {
    to: "multiple-states",
    title: "Multiple useState Hooks",
    subtitle: "Managing multiple pieces of state",
    desc: [
      {
        type: "text",
        content:
          "You can call useState multiple times for different state variables.",
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
        `,
      },
      {
        type: "text",
        content:
          "Each state variable is independent and updates trigger re-rendering.",
      },
    ],
  },
  {
    to: "state-as-object",
    title: "State as Objects",
    subtitle: "Updating state with objects",
    desc: [
      {
        type: "text",
        content:
          "You can call useState multiple times for different state variables, but you can also pass an object as the initial state.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
        function Form() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <p>{JSON.stringify(form)}</p>
    </div>
  );
}

        `,
      },
      {
        type: "text",
        content:
          "Each state variable is independent and updates trigger re-rendering.",
      },
    ],
  },
  {
    to: "array-in-states",
    title: "Arrays in States",
    subtitle: "Updating state with objects",
    desc: [
      {
        type: "text",
        content:
          "You can call useState multiple times for different state variables, but you can also pass an object as the initial state.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
        function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, 'Task $/{todos.length + 1}']);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

        `,
      },
      {
        type: "text",
        content:
          "Each state variable is independent and updates trigger re-rendering.",
      },
    ],
  },
  {
    to: "derived-state",
    title: "Derived State (Avoid Over-Storing)",
    subtitle: "Don’t store what you can compute, compute what you store",
    desc: [
      {
        type: "text",
        content:
          "You can call useState multiple times for different state variables, but you can also pass an object as the initial state.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
        function ShoppingCart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return <h2>Total: $/{total}</h2>;
}
        `,
      },
      {
        type: "text",
        content:
          "Each state variable is independent and updates trigger re-rendering.",
      },
    ],
  },
  {
    to: "lift-state",
    title: "Lifting State Up",
    subtitle: "When two components need the same state, lift it to a parent.",
    desc: [
      {
        type: "text",
        content:
          "When two components need the same state, lift it to a parent, this is called 'lifting state', its also helps to avoid prop drilling",
      },
      {
        type: "code",
        language: "jsx",
        content: `

        function Input({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <Input value={text} onChange={setText} />
      <p>You typed: {text}</p>
    </div>
  );
}

        `,
      },
      {
        type: "text",
        content:
          "Each state variable is independent and updates trigger re-rendering.",
      },
    ],
  },
  {
    to: "usereducer",
    title: "useReducer for Complex State",
    subtitle: "When state is complex, useReducer gives structure.",
    desc: [
      {
        type: "text",
        content:
          "When state is complex, useReducer gives structure, this will help in handling complex state, where same state is used for multiple operations.",
      },
      {
        type: "code",
        language: "jsx",
        content: `

       import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
        `,
      },
      {
        type: "text",
        content:
          "Each state variable is independent and updates trigger re-rendering.",
      },
    ],
  },
];
