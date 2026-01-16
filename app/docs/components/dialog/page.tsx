"use client"

import { useVersion } from "@/components/version-provider"
import DialogDocsV1 from "./v1.0.0"

export default function DialogPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <DialogDocsV1 />
    default:
      return <DialogDocsV1 />
  }
}
