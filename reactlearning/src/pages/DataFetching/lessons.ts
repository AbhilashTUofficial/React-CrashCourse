// dataFetchingLessons.ts
export const dataFetchingLessons = [
  {
    title: "What is Data Fetching?",
    subtitle: "Loading data from APIs in React",
    to: "/data-fetching/intro",
    desc: [
      {
        type: "text",
        content:
          "Most React apps need to fetch data from an external source (like REST APIs or GraphQL). Data fetching is usually async, so we need to handle loading and error states too.",
      },
      {
        type: "text",
        content:
          "React doesn’t come with built-in data fetching — we typically use `fetch`, `axios`, or libraries like React Query for more advanced scenarios.",
      },
    ],
  },
  {
    title: "Fetching with useEffect",
    subtitle: "Step 1: Basic fetch request",
    to: "/data-fetching/useeffect",
    desc: [
      {
        type: "text",
        content:
          "You can use the `useEffect` hook to fetch data when a component mounts. Store the data in state using `useState`.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UsersList;
        `,
      },
    ],
  },
  {
    title: "Handling Loading and Error",
    subtitle: "Step 2: Add UX states",
    to: "/data-fetching/states",
    desc: [
      {
        type: "text",
        content:
          "Since fetching is async, you should show a loading state while waiting and handle errors if the request fails.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

export default Posts;
        `,
      },
    ],
  },
  {
    title: "Fetching on User Action",
    subtitle: "Step 3: Trigger fetch with a button",
    to: "/data-fetching/button",
    desc: [
      {
        type: "text",
        content:
          "Sometimes you don’t want to fetch immediately — instead, you fetch when a user clicks a button or performs an action.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import React, { useState } from "react";

function JokeFetcher() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(\`\${data.setup} - \${data.punchline}\`);
  };

  return (
    <div>
      <button onClick={fetchJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default JokeFetcher;
        `,
      },
    ],
  },
  {
    title: "Best Practices",
    subtitle: "How to manage data fetching at scale",
    to: "/data-fetching/best-practices",
    desc: [
      {
        type: "text",
        content:
          "✅ Always handle loading and error states.\n" +
          "✅ Cancel fetches or clean up when components unmount.\n" +
          "✅ Consider libraries like React Query, SWR, or Apollo for caching and retries.\n" +
          "💡 Keep data-fetching logic separate from UI when possible.",
      },
    ],
  },
];
