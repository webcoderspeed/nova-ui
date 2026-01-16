"use client"

import { useVersion } from "@/components/version-provider"
import ItemDocsV1 from "./v1.0.0"

export default function ItemPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ItemDocsV1 />
    default:
      return <ItemDocsV1 />
  }
}
