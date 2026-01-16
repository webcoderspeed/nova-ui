"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Highlight, themes } from "prism-react-renderer"
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

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-zinc-950 dark:bg-zinc-900">
      {filename && (
        <div className="flex items-center justify-between border-b border-border bg-zinc-900/50 px-4 py-2 text-zinc-400">
          <span className="font-mono text-xs">{filename}</span>
          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] uppercase text-zinc-400">
            {language}
          </span>
        </div>
      )}
      <div className="relative">
        <NovaButton
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100 text-zinc-400 hover:text-white hover:bg-zinc-800"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </NovaButton>
        
        <Highlight
          theme={themes.nightOwl}
          code={code.trim()}
          language={language as any}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="overflow-x-auto p-4" style={{ ...style, background: 'transparent' }}>
              <code className={`font-mono text-sm ${className}`}>
                {showLineNumbers ? (
                  <div className="flex">
                    <div className="mr-4 flex flex-col text-right text-zinc-600 select-none">
                      {tokens.map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>
                    <div>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))
                )}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
