import { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import TypingDots from "./TypingDots";

function normalizeLLMMarkdown(input = "") {
  if (typeof input !== "string") return "";

  const trimmed = input.trim();

  if (/^`[\s\S]*`$/.test(trimmed) && trimmed.includes("```")) {
    return trimmed.slice(1, -1).trim();
  }

  let normalizedFences = trimmed.replace(
    /```[ \t]*([^\n`]+)\n/gm,
    (full, langName) => {
      const clean = String(langName).trim();
      return "```" + clean.toLowerCase() + "\n";
    }
  );

  normalizedFences = normalizedFences.replace(
    /^`([^`\n]+)`$/gm,
    (match, code) => {
      // If it's just a single word/short code, keep it inline
      if (code.length < 50 && !code.includes("\n")) {
        return `\`${code}\``;
      }
      return match;
    }
  );

  return normalizedFences;
}

const LANGUAGE_LABELS = {
  js: "JavaScript",
  javascript: "JavaScript",
  py: "Python",
  python: "Python",
  ts: "TypeScript",
  typescript: "TypeScript",
  rb: "Ruby",
  ruby: "Ruby",
  java: "Java",
  c: "C",
  cpp: "C++",
  csharp: "C#",
  go: "Go",
  php: "PHP",
  swift: "Swift",
  kotlin: "Kotlin",
  rust: "Rust",
  sql: "SQL",
  bash: "Bash",
  sh: "Shell",
};

/** Format language label */
function prettierLangLabel(lang) {
  if (!lang) return "";
  const lower = String(lang).toLowerCase();
  return LANGUAGE_LABELS[lower] || lang.charAt(0).toUpperCase() + lang.slice(1);
}

export default function ChatBubble({ text, avatar, isSender }) {
  // local copied state shows "Copied!" after copying any block
  const [copied, setCopied] = useState(false);

  // Pre-normalize markdown only once per render using useMemo
  const normalizedText = useMemo(() => {
    if (typeof text === "string") return normalizeLLMMarkdown(text);
    return "";
  }, [text]);

  // Clipboard copy helper with graceful fallback
  const copyToClipboard = async (code) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = code;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (err) {
      console.error("copy failed", err);
    }
  };

  return (
    <div className={`flex gap-3 mb-4 ${isSender ? "flex-row-reverse" : ""}`}>
      {/* Assistant avatar only for assistant messages */}
      {!isSender && avatar && (
        <div className="flex flex-col justify-end">
          <img
            src={avatar}
            alt="assistant avatar"
            className="w-8 h-8 rounded-full object-cover border border-slate-700"
          />
        </div>
      )}

      <div
        className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${
          isSender
            ? "bg-blue-600 text-white rounded-br-none max-w-[60%]"
            : "bg-slate-800 text-slate-200 rounded-bl-none max-w-[72%]"
        }`}
      >
        {typeof normalizedText === "string" && normalizedText.trim() !== "" ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const codeContent = String(children).replace(/\n$/, "");
                const isTripleBacktick =
                  className && className.startsWith("language-");

                if (!isTripleBacktick) {
                  return (
                    <span className="bg-gray-900 text-gray-100 px-1 rounded font-mono text-sm">
                      {children}
                    </span>
                  );
                }

                const headerText = className
                  ? className.replace("language-", "")
                  : "Code";

                return (
                  <div className="mb-3 overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800 border-b border-slate-700">
                      <span className="text-xs font-medium font-mono text-slate-300">
                        {headerText}
                      </span>
                      <button
                        onClick={() => copyToClipboard(codeContent)}
                        className="text-xs px-2 py-0.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-200"
                        aria-label={`Copy ${headerText} code`}
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    {/* Code content with syntax highlighting if it's a known language */}
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        style={oneDark}
                        language={
                          LANGUAGE_LABELS[headerText.toLowerCase()]
                            ? headerText.toLowerCase()
                            : "text"
                        }
                        PreTag="div"
                        className="!m-0 !p-3 text-sm bg-transparent"
                      >
                        {codeContent}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                );
              },

              // paragraphs - small spacing for chat bubbles
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,

              // links - open in new tab and subtle color
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {children}
                </a>
              ),

              // lists
              ul: ({ children }) => (
                <ul className="list-disc pl-5 mb-2 space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-5 mb-2 space-y-1">{children}</ol>
              ),

              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-slate-600 pl-3 italic text-slate-300 mb-2">
                  {children}
                </blockquote>
              ),
            }}
          >
            {normalizedText}
          </ReactMarkdown>
        ) : (
          // show typing indicator if no text
          <TypingDots />
        )}
      </div>
    </div>
  );
}
