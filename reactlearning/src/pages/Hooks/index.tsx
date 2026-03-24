import React, { useState } from "react";
import { Link } from "react-router-dom";
import commonStyles from "../../styles/common.module.css";
import styles from "./styles.module.css";
import type { HomeProps } from "./types.ts";
import { hooksLessons } from "./lessons.ts";
import { ExpandableCard } from "../../Components/LessonBlock/index.tsx";


export default function Hooks(_: HomeProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className={commonStyles.container}>
            <header className={commonStyles.header}>
                <div>
                    <h1 className={commonStyles.title}>Props</h1>
                    <p className={commonStyles.subtitle}>
                        Passing data from parent to child.
                    </p>
                </div>
            </header>

            <div className={commonStyles.vertical} aria-label="Lessons">
                {hooksLessons.map((lesson, index) => {
                    const isOpen = expandedIndex === index;

                    return (<ExpandableCard key={index} lesson={lesson} />
                    );
                })}
            </div>

            <Link to="/" className={commonStyles["back-btn"]}>
                Back <span className={commonStyles["back-btn-icon"]}>←</span>
            </Link>
        </div>
    );
}
