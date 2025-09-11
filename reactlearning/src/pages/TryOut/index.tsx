import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import commonStyles from "../commonStyles.module.css";
import styles from "./styles.module.css";

export default function TryOut({ lessons }) {
    const { lessonId } = useParams<{ lessonId: string }>();


    const lesson = lessons.find(l => l.to.slice(1) === lessonId);

    if (!lesson) {
        return (
            <div className={commonStyles.container}>
                <h1>Lesson not found</h1>
                <Link to="/">Go back</Link>
            </div>
        );
    }

    const codeBlocks = lesson.desc
        .filter(block => block.type === "code")
        .map(block => block.content.trim())
        .join("\n\n");

    const initialCode = codeBlocks.startsWith("<") ? `<>\n${codeBlocks}\n</>` : codeBlocks;
    const [code, setCode] = useState(initialCode);
    const [runCode, setRunCode] = useState(initialCode);
    return (
        <div>
            <h1>{lesson.title} - Try Out</h1>
            <p>{lesson.subtitle}</p>

            <LiveProvider code={runCode} scope={{ React }} noInline>
                <LiveEditor
                    className={styles.liveEditor}
                    onChange={(newCode) => setCode(newCode)}
                />
                <button
                    className={styles.runBtn}
                    onClick={() => setRunCode(code)}
                >
                    Run
                </button>

                <LiveError className={styles.liveError} />
                <div className={styles.livePreview}>
                    <LivePreview />
                </div>
            </LiveProvider>

            <Link to="/props">← Back to Lessons</Link>
        </div>
    );
}
