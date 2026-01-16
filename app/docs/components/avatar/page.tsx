"use client"

import { useVersion } from "@/components/version-provider"
import AvatarDocsV1 from "./v1.0.0"
import AvatarDocsV11 from "./v1.1.0"
import AvatarDocsV2 from "./v2.0.0-beta"

export default function AvatarPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <AvatarDocsV1 />
    case "1.1.0":
      return <AvatarDocsV11 />
    case "2.0.0-beta":
      return <AvatarDocsV2 />
    default:
      return <AvatarDocsV11 />
  }
}
