"use client"

import { useVersion } from "@/components/version-provider"
import SliderDocsV1 from "./v1.0.0"
import SliderDocsV11 from "./v1.1.0"
import SliderDocsV2 from "./v2.0.0-beta"

export default function SliderPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SliderDocsV1 />
    case "1.1.0":
      return <SliderDocsV11 />
    case "2.0.0-beta":
      return <SliderDocsV2 />
    default:
      return <SliderDocsV11 />
  }
}
