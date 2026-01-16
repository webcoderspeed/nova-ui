"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
  level: number
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        title: element.textContent || "",
        level: Number(element.tagName.substring(1)),
      }))

    setItems(elements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    elements.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  return (
    <div className="hidden xl:block w-64 shrink-0 pl-8">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pt-4">
        <h4 className="mb-4 text-sm font-semibold leading-none tracking-tight">
          On This Page
        </h4>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.id} className={cn("leading-none", item.level === 3 && "pl-4")}>
              <Link
                href={`#${item.id}`}
                className={cn(
                  "block text-muted-foreground transition-colors hover:text-foreground",
                  activeId === item.id && "font-medium text-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                  setActiveId(item.id)
                  window.history.pushState(null, "", `#${item.id}`)
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
