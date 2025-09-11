export const routerLessons = [
  {
    title: "What is React Router?",
    subtitle: "Client-side routing for React apps",
    to: "/router/intro",
    desc: [
      {
        type: "text",
        content:
          "React Router is a library for handling navigation in React applications. It lets you create single-page apps (SPA) with multiple views without reloading the page.",
      },
      {
        type: "text",
        content:
          "It works by rendering different components based on the current URL, making navigation feel instant and smooth.",
      },
    ],
  },
  {
    title: "Setting Up React Router",
    subtitle: "Step 1: Install and wrap with BrowserRouter",
    to: "/router/setup",
    desc: [
      {
        type: "text",
        content:
          "First, install React Router:\n```bash\nnpm install react-router-dom\n```\nWrap your app in `<BrowserRouter>` to enable routing.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
        `,
      },
    ],
  },
  {
    title: "Defining Routes",
    subtitle: "Step 2: Use Routes and Route",
    to: "/router/routes",
    desc: [
      {
        type: "text",
        content:
          "Inside your app, define your pages using `<Routes>` and `<Route>`. Each `path` matches a URL, and `element` is the component that gets rendered.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
        `,
      },
    ],
  },
  {
    title: "Navigation with Link",
    subtitle: "Step 3: Navigate without page reloads",
    to: "/router/link",
    desc: [
      {
        type: "text",
        content:
          "`<Link>` lets you move between routes without refreshing the page. It's like an `<a>` tag but optimized for SPA navigation.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}
        `,
      },
    ],
  },
  {
    title: "Dynamic Routes with useParams",
    subtitle: "Step 4: Access URL parameters",
    to: "/router/params",
    desc: [
      {
        type: "text",
        content:
          "Dynamic routes let you capture parts of the URL (like an ID). You can access them using the `useParams` hook.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

// Route
<Route path="/user/:id" element={<UserProfile />} />
        `,
      },
    ],
  },
  {
    title: "Programmatic Navigation with useNavigate",
    subtitle: "Step 5: Navigate in code",
    to: "/router/navigate",
    desc: [
      {
        type: "text",
        content:
          "Sometimes you want to navigate after an action (like a button click or form submission). The `useNavigate` hook lets you do that.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // do auth logic
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
        `,
      },
    ],
  },
  {
    title: "Best Practices",
    subtitle: "Organizing routes effectively",
    to: "/router/best-practices",
    desc: [
      {
        type: "text",
        content:
          "✅ Keep routes centralized (in `App` or `routes.js`) for easier maintenance.\n" +
          "✅ Use layout routes for shared UI like navbars and footers.\n" +
          "❌ Avoid deeply nested routes unless necessary.\n" +
          "💡 Combine React Router with lazy loading (`React.lazy` + `Suspense`) for performance.",
      },
    ],
  },
];
