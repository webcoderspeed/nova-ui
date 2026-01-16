"use client"

import { useVersion } from "@/components/version-provider"
import MenubarDocsV1 from "./v1.0.0"

export default function MenubarPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <MenubarDocsV1 />
    default:
      return <MenubarDocsV1 />
  }
}
