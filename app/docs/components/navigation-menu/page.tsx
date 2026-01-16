"use client"

import { useVersion } from "@/components/version-provider"
import NavigationMenuDocsV1 from "./v1.0.0"

export default function NavigationMenuPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <NavigationMenuDocsV1 />
    default:
      return <NavigationMenuDocsV1 />
  }
}
