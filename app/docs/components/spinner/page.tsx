"use client"

import { useVersion } from "@/components/version-provider"
import SpinnerDocsV1 from "./v1.0.0"

export default function SpinnerPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SpinnerDocsV1 />
    default:
      return <SpinnerDocsV1 />
  }
}
