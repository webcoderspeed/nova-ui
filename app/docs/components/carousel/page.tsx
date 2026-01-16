"use client"

import { useVersion } from "@/components/version-provider"
import CarouselDocsV1 from "./v1.0.0"

export default function CarouselPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <CarouselDocsV1 />
    default:
      return <CarouselDocsV1 />
  }
}
