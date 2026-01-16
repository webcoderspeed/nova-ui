"use client"

import { useVersion } from "@/components/version-provider"
import TableDocsV1 from "./v1.0.0"

export default function TablePage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <TableDocsV1 />
    default:
      return <TableDocsV1 />
  }
}
