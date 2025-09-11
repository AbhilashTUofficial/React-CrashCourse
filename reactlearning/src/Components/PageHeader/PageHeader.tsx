import React from "react";
import commonStyles from "../../pages/commonStyles.module.css";

interface HeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader: React.FC<HeaderProps> = ({ title, subtitle }) => (
    <header className={commonStyles.header}>
        <div>
            <h1 className={commonStyles.title}>{title}</h1>
            {subtitle && <p className={commonStyles.subtitle}>{subtitle}</p>}
        </div>
    </header>
);