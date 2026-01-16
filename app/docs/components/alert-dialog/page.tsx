"use client"

import { useVersion } from "@/components/version-provider"
import AlertDialogDocsV1 from "./v1.0.0"

export default function AlertDialogPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <AlertDialogDocsV1 />
    default:
      return <AlertDialogDocsV1 />
  }
}
