"use client"

import * as React from "react"

export type Version = "1.0.0" | "1.1.0" | "2.0.0-beta"

interface VersionContextType {
  version: Version
  setVersion: (version: Version) => void
  versions: { value: Version; label: string; description: string }[]
  mounted: boolean
}

const versions: { value: Version; label: string; description: string }[] = [
  { value: "1.0.0", label: "v1.0.0", description: "Stable release" },
  { value: "1.1.0", label: "v1.1.0", description: "Latest stable" },
  { value: "2.0.0-beta", label: "v2.0.0-beta", description: "Beta release" },
]

const VersionContext = React.createContext<VersionContextType>({
  version: "1.1.0",
  setVersion: () => {},
  versions,
  mounted: false,
})

export function useVersion() {
  return React.useContext(VersionContext)
}

interface VersionProviderProps {
  children: React.ReactNode
  defaultVersion?: Version
}

export function VersionProvider({ children, defaultVersion = "1.1.0" }: VersionProviderProps) {
  const [version, setVersionState] = React.useState<Version>(defaultVersion)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const storedVersion = localStorage.getItem("nova-version") as Version | null
    if (storedVersion && versions.some((v) => v.value === storedVersion)) {
      setVersionState(storedVersion)
    }
    setMounted(true)
  }, [])

  const setVersion = React.useCallback((newVersion: Version) => {
    setVersionState(newVersion)
    localStorage.setItem("nova-version", newVersion)
  }, [])

  return (
    <VersionContext.Provider value={{ version, setVersion, versions, mounted }}>{children}</VersionContext.Provider>
  )
}
