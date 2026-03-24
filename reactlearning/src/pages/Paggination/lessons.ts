export const pagginationLessons = [
  {
    title: "What is Paggination?",
    subtitle: "",
    to: "/react-query/intro",
    desc: [
      {
        type: "text",
        content:
          "React Query is a library for fetching, caching, and updating data in React. It provides a simple and efficient way to manage data fetching in your React applications.",
      },
      {
        type: "text",
        content:
          "React Query is built on top of React's built-in hooks, making it easy to integrate with your existing React codebase.",
      },
    ],
  },
  {
    title: "Setting Up React Query",
    subtitle: "Step 1: Install and wrap with QueryClientProvider",
    to: "/react-query/setup",
    desc: [
      {
        type: "text",
        content:
          "First, install React Query: npm install react-query\n```\nWrap your app in `<QueryClientProvider>` to enable data fetching.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
        `,
      },
    ],
  },
  {
    title: "Fetching with useQuery",
    subtitle: "Step 2: Basic data fetching",
    to: "/react-query/usequery",
    desc: [
      {
        type: "text",
        content:
          "You can use the `useQuery` hook to fetch data from an API. Store the data in state using `useState`.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { useQuery } from 'react-query';

function App() {
  const { data, isLoading, isError } = useQuery('todos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
  });

  return (
    <div>
      {isLoading ? 'Loading...' : ''}
      {isError ? 'Error' : ''}
      {data ? data.map(todo => <div key={todo.id}>{todo.title}</div>) : ''}
    </div>
  );
}
        `,
      },
    ],
  },
  {
    title: "Mutations with useMutation",
    subtitle: "Step 3: Basic mutation",
    to: "/react-query/usemutation",
    desc: [
      {
        type: "text",
        content:
          "You can use the `useMutation` hook to make mutations to an API. Store the data in state using `useState`.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { useMutation } from 'react-query';

function App() {
  const { mutate, isLoading, isError } = useMutation(async (data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  });

  return (
    <div>
      {isLoading ? 'Loading...' : ''}
      {isError ? 'Error' : ''}
      <button onClick={() => mutate({ title: 'foo', body: 'bar', userId: 1 })}>Create Post</button>
    </div>
  );
}
        `,
      },
    ],
  },
  {
    title: "Infinite Scroll with useInfiniteQuery",
    subtitle: "Step 4: Infinite scroll",
    to: "/react-query/useinfinitequery",
    desc: [
      {
        type: "text",
        content:
          "You can use the `useInfiniteQuery` hook to fetch data from an API. Store the data in state using `useState`.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { useInfiniteQuery } from 'react-query';

function App() {
  const { data, isLoading, isError, fetchNextPage } = useInfiniteQuery('todos', async ({ pageParam = 1 }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  });

  return (
    <div>
      {isLoading ? 'Loading...' : ''}
      {isError ? 'Error' : ''}
      {data ? data.pages.map(page => page.map(todo => <div key={todo.id}>{todo.title}</div>)) : ''}
      <button onClick={() => fetchNextPage()}>Load More</button>
    </div>
  );
}
        `,
      },
    ],
  },
  {
    title: "Query Caching with useQuery",
    subtitle: "Step 5: Query caching",
    to: "/react-query/usequery",
    desc: [
      {
        type: "text",
        content:
          "You can use the `useQuery` hook to fetch data from an API. Store the data in state using `useState`.",
      },
      {
        type: "code",
        language: "jsx",
        content: `
import { useQuery } from 'react-query';

function App() {
  const { data, isLoading, isError } = useQuery('todos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
  });

  return (
    <div>
      {isLoading ? 'Loading...' : ''}
      {isError ? 'Error' : ''}
      {data ? data.map(todo => <div key={todo.id}>{todo.title}</div>) : ''}
    </div>
  );
}
        `,
      },
    ],
  },
  {
    title: "Best Practices",
    subtitle: "How to manage data fetching at scale",
    to: "/react-query/best-practices",
    desc: [
      {
        type: "text",
        content:
          "You can use the `useQuery` hook to fetch data from an API. Store the data in state using `useState`.",
      },
    ],
  },
];
