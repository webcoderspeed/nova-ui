"use client"

import { useVersion } from "@/components/version-provider"
import SidebarDocsV1 from "./v1.0.0"

export default function SidebarPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SidebarDocsV1 />
    default:
      return <SidebarDocsV1 />
  }
}
