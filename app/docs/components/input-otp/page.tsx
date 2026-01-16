"use client"

import { useVersion } from "@/components/version-provider"
import InputOTPDocsV1 from "./v1.0.0"

export default function InputOTPPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <InputOTPDocsV1 />
    default:
      return <InputOTPDocsV1 />
  }
}
