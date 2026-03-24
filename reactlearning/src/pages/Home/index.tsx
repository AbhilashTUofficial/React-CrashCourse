import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/common.module.css";
import type { HomeProps } from "./types.ts";

export default function Home(_: HomeProps) {
    const lessons = [
        { to: "/react-basics", title: "React Basics", desc: "Components, JSX, props, rendering, lists" },
        { to: "/props", title: "Props", desc: "Props, children, default props, spread props, prop types, required props" },
        { to: "/state", title: "State", desc: "State, state hooks, stateful components" },
        { to: "/events", title: "Events", desc: "Event handlers, event propagation, event delegation" },
        { to: "/hooks", title: "Hooks", desc: "useEffect, useRef, custom hooks" },
        { to: "/context-api", title: "Context API", desc: "Global state, useContext, avoiding prop drilling" },
        { to: "/react-router", title: "React Router", desc: "Routing, Links, params, nested & protected routes" },
        { to: "/data-fetching", title: "Data Fetching", desc: "Async fetch, loading/error states, useEffect" },
        { to: "/performance", title: "Performance", desc: "React.memo, useCallback, useMemo" },
        { to: "/advanced-concepts", title: "Advanced React", desc: "Error boundaries, portals, HOCs, compound components" },
        { to: "/react-query", title: "React Query", desc: "Data fetching, caching, updating, mutations" },
        { to: "/paggination", title: "Paggination", desc: "Pagination, infinite scroll, lazy loading" },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>React Learning — Minimal Effort High Return</h1>
                    <p className={styles.subtitle}>Small lessons, interactive demos, and minimal code — one page per concept.</p>
                </div>
            </header>

            <nav className={styles.grid} aria-label="Lessons">
                {lessons.map((l) => (
                    <Link key={l.to} to={l.to} className={styles.card}>
                        <h2 className={styles.cardTitle}>{l.title}</h2>
                        <p className={styles.cardDesc}>{l.desc}</p>
                        <span className={styles.chev} aria-hidden>→</span>
                    </Link>
                ))}
            </nav>

            <footer className={styles.footer}>
                <small>Tip: open the menu or use the links above to start a lesson.</small>
            </footer>
        </div>
    );
}
