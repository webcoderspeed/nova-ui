"use client"

import { useVersion } from "@/components/version-provider"
import PaginationDocsV1 from "./v1.0.0"

export default function PaginationPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <PaginationDocsV1 />
    default:
      return <PaginationDocsV1 />
  }
}
