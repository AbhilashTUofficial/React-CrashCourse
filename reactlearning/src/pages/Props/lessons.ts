export const propsLessons = [
  {
    to: "/props-intro",
    title: "What are Props in React?",
    subtitle: "Understanding the basics of props",
    desc: [
      {
        type: "text",
        content:
          "Props (short for properties) are the primary way to pass data from a parent component to a child component in React. They make components dynamic and reusable."
      },
      {
        type: "text",
        content: "Key Points:\n- Props are read-only.\n- Can be any data type: string, number, object, array, function.\n- Enable reusable components."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </>
  );
}
        `
      },
      {
        type: "text",
        content: "Output:\nHello, Alice!\nHello, Bob!"
      }
    ]
  },
  {
    to: "/basic-example",
    title: "Basic Example",
    subtitle: "Passing simple props",
    desc: [
      {
        type: "text",
        content: "Here we pass a simple prop from parent to child."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
        `
      },
      {
        type: "text",
        content: "Explanation: The parent component App sends 'name' as a prop to Greeting, which renders it."
      }
    ]
  },
  {
    to: "/destructuring-props",
    title: "Destructuring Props",
    subtitle: "Cleaner syntax for props",
    desc: [
      {
        type: "text",
        content:
          "Instead of using props.name repeatedly, you can destructure the props directly in the function parameters."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
        `
      },
      {
        type: "text",
        content: "Destructuring makes your code cleaner and easier to read."
      }
    ]
  },
  {
    to: "/props-data-types",
    title: "Props with Different Data Types",
    subtitle: "Strings, numbers, arrays, objects, booleans, and functions",
    desc: [
      {
        type: "text",
        content: "Props can hold more than strings: numbers, arrays, objects, booleans, and functions."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function Profile({ name, age, hobbies, isAdmin }) {
  return (
    <div>
      <h2>{name} ({age} years old)</h2>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>{isAdmin ? "Admin" : "User"}</p>
    </div>
  );
}

function App() {
  return (
    <Profile
      name="Alice"
      age={25}
      hobbies={['Reading', 'Coding', 'Gaming']}
      isAdmin={true}
    />
  );
}
        `
      },
      {
        type: "text",
        content: "You can also pass functions as props to make children interactive."
      }
    ]
  },
  {
    to: "/functions-as-props",
    title: "Passing Functions as Props",
    subtitle: "Child components triggering parent functions",
    desc: [
      {
        type: "text",
        content: "Functions defined in the parent can be passed to children as props."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const sayHello = () => alert("Hello from App!");
  
  return <Button onClick={sayHello} label="Click Me!" />;
}
        `
      },
      {
        type: "text",
        content: "Clicking the button calls the parent's function, demonstrating child-to-parent communication."
      }
    ]
  },
  {
    to: "/default-props",
    title: "Default Props",
    subtitle: "Set default values for missing props",
    desc: [
      {
        type: "text",
        content: "You can provide default values to props in case the parent doesn't pass them."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting />; // Renders "Hello, Guest!"
}
        `
      },
      {
        type: "text",
        content: "Default props ensure components always have valid data."
      }
    ]
  },
  {
    to: "/prop-types",
    title: "Prop Types",
    subtitle: "Enforce prop types for safety",
    desc: [
      {
        type: "text",
        content: "PropTypes help validate the type of props passed to components."
      },
      {
        type: "code",
        language: "jsx",
        content: `
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return <h1>{name} is {age} years old.</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
        `
      },
      {
        type: "text",
        content: "Using PropTypes prevents passing wrong data types and catches errors during development."
      }
    ]
  },
  {
    to: "/nested-props",
    title: "Nested Components and Passing Props Deeply",
    subtitle: "Props can be passed through multiple layers",
    desc: [
      {
        type: "text",
        content: "Props can flow through multiple component layers to reach deeply nested components."
      },
      {
        type: "code",
        language: "jsx",
        content: `
function Child({ message }) {
  return <p>Child says: {message}</p>;
}

function Parent({ message }) {
  return <Child message={message} />;
}

function App() {
  return <Parent message="Hello from App!" />;
}
        `
      },
      {
        type: "text",
        content: "This allows data to reach deeply nested components without using global state."
      }
    ]
  },
];
