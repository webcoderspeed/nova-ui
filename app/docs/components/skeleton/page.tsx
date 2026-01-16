"use client"

import { useVersion } from "@/components/version-provider"
import SkeletonDocsV1 from "./v1.0.0"

export default function SkeletonPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SkeletonDocsV1 />
    default:
      return <SkeletonDocsV1 />
  }
}
