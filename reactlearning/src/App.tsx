import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactBasics from "./pages/ReactBasics";
import Props from "./pages/Props";
import TryOut from "./pages/TryOut";
import { propsLessons } from "./pages/Props/lessons";
import StateEvents from "./pages/StateEvents";
import { stateLessons } from "./pages/StateEvents/lessons";
import Hooks from "./pages/Hooks";
import { hooksLessons } from "./pages/Hooks/lessons";
import ContextApi from "./pages/ContextApi";
import { contextLessons } from "./pages/ContextApi/lessons";
import ReactRouter from "./pages/ReactRouter";
import { routerLessons } from "./pages/ReactRouter/lessons";
import DataFetching from "./pages/DataFetching";
import { dataFetchingLessons } from "./pages/DataFetching/lessons";

export default function App() {
  return (
    <div>
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react-basics" element={<ReactBasics />} />
          <Route path="/props" element={<Props />} />
          <Route path="/props/:lessonId" element={<TryOut lessons={propsLessons} />} />
          <Route path="/state-events" element={<StateEvents />} />
          <Route path="/state-events/:lessonId" element={<TryOut lessons={stateLessons} />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/hooks/:lessonId" element={<TryOut lessons={hooksLessons} />} />
          <Route path="/context-api" element={<ContextApi />} />
          <Route path="/context-api/:lessonId" element={<TryOut lessons={contextLessons} />} />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/react-router/:lessonId" element={<TryOut lessons={routerLessons} />} />
          <Route path="/data-fetching" element={<DataFetching />} />
          <Route path="/data-fetching/:lessonId" element={<TryOut lessons={dataFetchingLessons} />} />
        </Routes>
      </main>
    </div>
  );
}
