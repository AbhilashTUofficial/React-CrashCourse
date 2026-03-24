import React, { useState } from "react";
import { Link } from "react-router-dom";
import commonStyles from "../../styles/common.module.css";
import styles from "./styles.module.css";
import type { HomeProps } from "./types.ts";
import { eventLessons } from "./lessons.ts";
import { PageHeader } from "../../Components/PageHeader/PageHeader.tsx";
import { ExpandableCard } from "../../Components/LessonBlock/index.tsx";


export default function Home(_: HomeProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className={commonStyles.container}>
            <PageHeader title="Events" subtitle="Managing state in functional components." />

            <div className={commonStyles.vertical} aria-label="Lessons">
                {eventLessons.map((lesson, index) => {
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
