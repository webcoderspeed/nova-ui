"use client"

import { useVersion } from "@/components/version-provider"
import ButtonDocsV1 from "./v1.0.0"

export default function ButtonPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ButtonDocsV1 />
    default:
      return <ButtonDocsV1 />
  }
}
