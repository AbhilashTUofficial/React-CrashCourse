export const contextLessons = [
  {
    title: "What is Context API?",
    subtitle: "Avoid prop drilling and share state globally",
    to: "/context/intro",
    desc: [
      {
        type: "text",
        content:
          "The Context API in React provides a way to pass data through the component tree without having to manually pass props down at every level (also called 'prop drilling').",
      },
      {
        type: "text",
        content:
          "It’s useful for things like authentication, theming, language settings, or any state you want accessible across multiple components.",
      },
    ],
  },
  {
    title: "Creating a Context",
    subtitle: "Step 1: Use React.createContext()",
    to: "/context/create",
    desc: [
      {
        type: "text",
        content:
          "To create a context, call `React.createContext()` and export it. This gives you two things: `Provider` and `Consumer`.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React from "react";

export const ThemeContext = React.createContext("light"); 
// "light" is the default value
        `,
      },
    ],
  },
  {
    title: "Providing Context",
    subtitle: "Step 2: Wrap components with Provider",
    to: "/context/provider",
    desc: [
      {
        type: "text",
        content:
          "The `Provider` component allows child components to access the context value. It wraps your component tree (or part of it).",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import App from "./App";

export default function Root() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <App />
    </ThemeContext.Provider>
  );
}
        `,
      },
    ],
  },
  {
    title: "Consuming Context",
    subtitle: "Step 3: Use useContext() Hook",
    to: "/context/consume",
    desc: [
      {
        type: "text",
        content:
          "In any child component, you can use the `useContext` hook to directly access the context value without drilling props.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button 
      style={{
        background: theme === "light" ? "#f9fafb" : "#1e293b",
        color: theme === "light" ? "#000" : "#fff"
      }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Current Theme: {theme}
    </button>
  );
}

export default ThemedButton;
        `,
      },
    ],
  },
  {
    title: "When to use Context?",
    subtitle: "Best practices",
    to: "/context/when",
    desc: [
      {
        type: "text",
        content:
          "✅ Use Context for global state like user authentication, theme, or localization.\n" +
          "❌ Avoid using it for every small piece of state, as it can cause unnecessary re-renders.\n" +
          "💡 For large-scale apps, consider combining Context with state management libraries like Redux, Zustand, or Jotai.",
      },
    ],
  },
];
