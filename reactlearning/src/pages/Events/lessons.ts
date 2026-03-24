export const eventLessons = [
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
];
