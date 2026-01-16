"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { NovaButton } from "../nova"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "tsx", filename, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card">
      {filename && (
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">{filename}</span>
          <span className="rounded bg-secondary px-2 py-0.5 text-[10px] uppercase text-muted-foreground">
            {language}
          </span>
        </div>
      )}
      <div className="relative">
        <NovaButton
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </NovaButton>
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-sm">
            {showLineNumbers ? (
              <div className="flex">
                <div className="mr-4 flex flex-col text-right text-muted-foreground/50">
                  {lines.map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <div>
                  {lines.map((line, i) => (
                    <div key={i} className="text-foreground">
                      {highlightSyntax(line, language)}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              lines.map((line, i) => (
                <div key={i} className="text-foreground">
                  {highlightSyntax(line, language)}
                </div>
              ))
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}

function highlightSyntax(line: string, language: string) {
  if (language === "bash" || language === "shell") {
    if (line.startsWith("#")) {
      return <span className="text-muted-foreground">{line}</span>
    }
    return (
      <span>
        {line.split(" ").map((word, i) => {
          if (i === 0 && ["npm", "npx", "git", "cd", "pnpm", "yarn"].includes(word)) {
            return (
              <span key={i} className="text-primary">
                {word}{" "}
              </span>
            )
          }
          if (word.startsWith("--") || word.startsWith("-")) {
            return (
              <span key={i} className="text-accent">
                {word}{" "}
              </span>
            )
          }
          return <span key={i}>{word} </span>
        })}
      </span>
    )
  }

  // Basic TSX/JS highlighting
  const keywords = [
    "import",
    "export",
    "from",
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "async",
    "await",
    "default",
    "interface",
    "type",
  ]
  const parts: React.ReactNode[] = []
  const remaining = line

  // Handle comments
  if (remaining.trim().startsWith("//")) {
    return <span className="text-muted-foreground">{line}</span>
  }

  // Simple string highlighting
  const stringRegex = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g
  let lastIndex = 0
  let match

  while ((match = stringRegex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      parts.push(highlightKeywords(remaining.slice(lastIndex, match.index), keywords))
    }
    parts.push(
      <span key={`str-${match.index}`} className="text-accent">
        {match[0]}
      </span>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < remaining.length) {
    parts.push(highlightKeywords(remaining.slice(lastIndex), keywords))
  }

  return <>{parts.length > 0 ? parts : line}</>
}

function highlightKeywords(text: string, keywords: string[]) {
  const words = text.split(/(\s+)/)
  return words.map((word, i) => {
    if (keywords.includes(word)) {
      return (
        <span key={i} className="text-primary">
          {word}
        </span>
      )
    }
    if (word.startsWith("<") || word.endsWith(">") || word.includes("</")) {
      return (
        <span key={i} className="text-chart-3">
          {word}
        </span>
      )
    }
    return word
  })
}
