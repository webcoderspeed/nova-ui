"use client"

import type React from "react"

import { useVersion, type Version } from "@/components/version-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

interface VersionedDocLoaderProps {
  versions: {
    [key in Version]?: React.ComponentType
  }
  componentName: string
}

export function VersionedDocLoader({ versions, componentName }: VersionedDocLoaderProps) {
  const { version } = useVersion()

  const DocComponent = versions[version]

  if (!DocComponent) {
    // Fallback to latest available version
    const availableVersions = Object.keys(versions) as Version[]
    const latestAvailable = availableVersions[availableVersions.length - 1]
    const FallbackComponent = versions[latestAvailable]

    return (
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Version Not Available</AlertTitle>
          <AlertDescription>
            Documentation for {componentName} in v{version} is not available. Showing v{latestAvailable} documentation
            instead.
          </AlertDescription>
        </Alert>
        {FallbackComponent && <FallbackComponent />}
      </div>
    )
  }

  return <DocComponent />
}
