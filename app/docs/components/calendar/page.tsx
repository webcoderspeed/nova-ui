"use client"

import { useVersion } from "@/components/version-provider"
import CalendarDocsV1 from "./v1.0.0"

export default function CalendarPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <CalendarDocsV1 />
    default:
      return <CalendarDocsV1 />
  }
}
