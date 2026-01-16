"use client"

import { useVersion } from "@/components/version-provider"
import AvatarDocsV1 from "./v1.0.0"

export default function AvatarPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <AvatarDocsV1 />
    default:
      return <AvatarDocsV1 />
  }
}
