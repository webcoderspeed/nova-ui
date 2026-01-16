"use client"

import { useVersion } from "@/components/version-provider"
import BigCalendarDocsV1 from "./v1.0.0"

export default function BigCalendarPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <BigCalendarDocsV1 />
    default:
      return <BigCalendarDocsV1 />
  }
}
