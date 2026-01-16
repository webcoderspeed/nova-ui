"use client"

import { useVersion } from "@/components/version-provider"
import DrawerDocsV1 from "./v1.0.0"

export default function DrawerPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <DrawerDocsV1 />
    default:
      return <DrawerDocsV1 />
  }
}
