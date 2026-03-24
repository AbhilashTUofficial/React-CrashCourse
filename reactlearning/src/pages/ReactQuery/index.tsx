
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import commonStyles from "../../styles/common.module.css";
import style from "./style.module.css";
import type { HomeProps } from "./types.ts";
import { PageHeader } from "../../Components/PageHeader/PageHeader.tsx";
import { ExpandableCard } from "../../Components/LessonBlock/index.tsx";
import { reactQueryLessons } from "./lessons.ts";
import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../../api/api.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";


export default function ReactQuery(_: HomeProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    // api call
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: () => fetchTodo(),
        staleTime: 5000
    })

    const TodoTile = (todo: any) => {
        return (
            <div className={style.tile} key={todo.id}>
                <div>{todo.todo}</div>
                <div className={style.status}>
                    {todo.isCompleted ? <div className={style.completed}>Completed</div> : <div className={style.notCompleted}>Not Completed</div>}
                    {todo.criticalLevel && <div className={[todo.criticalLevel === 3 ? style.criticalLevel2 : todo.criticalLevel === 2 ? style.criticalLevel1 : style.criticalLevel0, style.criticalLevel].join(" ")}>{todo.criticalLevel}</div>}
                </div>
            </div>
        )
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    const TodoContainer = (data: any) => {
        if (isLoading) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        if (isError) {
            return (
                <div>
                    <h1>Error</h1>
                </div>
            )
        }
        return (
            <div className={style.tileContainer}>
                <div className={style.header}>
                    <div className={style.title}>Todo List</div>
                    <FontAwesomeIcon onClick={() => refetch()} className={style.icon} icon={faRefresh} size="sm" color="white" />
                </div>
                {data.data.map((todo: any) => TodoTile(todo))}
            </div>
        )
    }

    return (
        <div className={commonStyles.container}>
            <PageHeader title="Props" subtitle="React Query : Efficient and reliable data fetching in React" />

            <div className={commonStyles.vertical} aria-label="Lessons">
                {reactQueryLessons.map((lesson, index) => {
                    const isOpen = expandedIndex === index;
                    return (<ExpandableCard key={index} lesson={lesson} />
                    );
                })}
            </div>
            <TodoContainer data={data} />
            <Link to="/" className={commonStyles["back-btn"]}>
                Back <span className={commonStyles["back-btn-icon"]}>←</span>
            </Link>
        </div>
    );
}
