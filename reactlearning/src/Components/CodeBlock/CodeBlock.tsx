// components/CodeBlock.tsx
import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./styles.module.css";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface CodeBlockProps {
    language: string;
    code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => (
    <SyntaxHighlighter
        language={language}
        style={docco}
        wrapLongLines
        className={styles.codeBlock}
    >
        {code.trim()}
    </SyntaxHighlighter>
);
