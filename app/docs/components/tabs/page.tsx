"use client"

import { useVersion } from "@/components/version-provider"
import TabsDocsV1 from "./v1.0.0"

export default function TabsPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <TabsDocsV1 />
    default:
      return <TabsDocsV1 />
  }
}
