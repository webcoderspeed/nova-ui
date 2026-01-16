"use client"

import { useVersion } from "@/components/version-provider"
import SkeletonDocsV1 from "./v1.0.0"
import SkeletonDocsV11 from "./v1.1.0"
import SkeletonDocsV2 from "./v2.0.0-beta"

export default function SkeletonPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SkeletonDocsV1 />
    case "1.1.0":
      return <SkeletonDocsV11 />
    case "2.0.0-beta":
      return <SkeletonDocsV2 />
    default:
      return <SkeletonDocsV11 />
  }
}
