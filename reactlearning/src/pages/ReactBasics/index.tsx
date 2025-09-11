import React, { useState } from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";

interface SubConcept {
    title: string;
    content: string | string[];
}

export default function ReactBasics() {
    const subConcepts: SubConcept[] = [
        { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
        { title: "Component-based architecture", content: "React apps are built using components which are reusable and composable." },
        { title: "Virtual DOM and diffing", content: "React uses a virtual DOM to efficiently update only parts of the UI that changed." },
        { title: "JSX", content: "JSX is a syntax extension that allows writing HTML-like code in JavaScript." },
        { title: "Expressions in {}", content: "You can use {} in JSX to embed JavaScript expressions." },
        { title: "Attributes (className, htmlFor)", content: "Use className instead of class, htmlFor instead of for in JSX." },
        { title: "Fragments (<> </>)", content: "Fragments allow grouping elements without adding extra nodes to the DOM." },
        { title: "Components", content: "Components can be function or class-based. Function components are preferred." },
        { title: "Function components", content: "A function that returns JSX. Example: function MyComponent() { return <div>Hello</div>; }" },
        { title: "Props (data passing)", content: "Props are inputs to components. They are read-only and allow data to flow top-down." },
        { title: "Children prop", content: "Special prop to pass nested JSX content to components." },
        { title: "Rendering", content: "Rendering means displaying the component’s UI in the DOM." },
        { title: "Conditional rendering (&&, ternary)", content: ["Use && to render something conditionally.", "Use ternary operator condition ? <A /> : <B /> for conditional JSX."] },
        { title: "Lists & keys (map)", content: "Render lists using array.map() and assign unique keys to each element for performance." },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container">

            <PageHeader title="React Basics" subtitle="Click a topic to expand and see details." />

            <div>
                {subConcepts.map((item, index) => (
                    <div key={index} style={{ marginBottom: "1rem" }}>
                        <button
                            onClick={() => toggle(index)}
                            style={{
                                width: "100%",
                                padding: "0.8rem 1rem",
                                textAlign: "left",
                                fontWeight: 500,
                                borderRadius: "6px",
                                border: "1px solid #e2e8f0",
                                background: "#f8fafc",
                                cursor: "pointer",
                                outline: "none",
                            }}
                        >
                            {item.title}
                        </button>

                        {openIndex === index && (
                            <div style={{ padding: "0.8rem 1rem", borderLeft: "3px solid #0f172a", background: "#f1f5f9" }}>
                                {Array.isArray(item.content) ? (
                                    <ul style={{ paddingLeft: "1.25rem" }}>
                                        {item.content.map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p style={{ margin: 0 }}>{item.content}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
