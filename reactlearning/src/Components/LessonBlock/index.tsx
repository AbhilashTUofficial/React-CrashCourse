// components/ExpandableCard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { CodeBlock } from "../CodeBlock/CodeBlock.tsx";

interface LessonBlock {
    type: "text" | "code";
    content: string;
    language?: string;
}

interface Lesson {
    title: string;
    subtitle: string;
    desc: LessonBlock[];
    to: string;
}

interface ExpandableCardProps {
    lesson: Lesson;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({ lesson }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleExpand = () => setIsOpen(!isOpen);

    return (
        <div className={styles.expandableCard}>
            <div className={styles["expandable-header"]} onClick={toggleExpand}>
                <div>
                    <h3 className={styles["expandable-title"]}>{lesson.title}</h3>
                    <p className={styles["expandable-subtitle"]}>{lesson.subtitle}</p>
                </div>
                <div className={`${styles["expandable-icon"]} ${isOpen ? styles.open : ""}`}>
                    ▶
                </div>
            </div>

            <div className={`${styles.expandableContent} ${isOpen ? styles.open : ""}`}>
                {lesson.desc.map((block, i) =>
                    block.type === "text" ? (
                        <p key={i} className={styles.expandableDesc}>{block.content}</p>
                    ) : (
                        <CodeBlock key={i} language={block.language!} code={block.content} />
                    )
                )}
            </div>

            <Link to={lesson.to.slice(1)} className={styles["try-btn"]}>
                Try Out <span className={styles["try-btn-icon"]}>→</span>
            </Link>
        </div>
    );
};
