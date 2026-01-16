"use client"

import { useVersion } from "@/components/version-provider"
import SliderDocsV1 from "./v1.0.0"

export default function SliderPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SliderDocsV1 />
    default:
      return <SliderDocsV1 />
  }
}
