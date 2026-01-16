"use client"

import { useVersion, type Version } from "@/components/version-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Check, Tag, Sparkles, FlaskConical } from "lucide-react"

export function VersionToggle() {
  const { version, setVersion, versions } = useVersion()

  const currentVersion = versions.find((v) => v.value === version)

  const getVersionIcon = (v: Version) => {
    if (v.includes("beta")) return <FlaskConical className="h-3.5 w-3.5" />
    if (v === "1.1.0") return <Sparkles className="h-3.5 w-3.5" />
    return <Tag className="h-3.5 w-3.5" />
  }

  const getVersionBadgeClass = (v: Version) => {
    if (v.includes("beta")) return "bg-amber-500/20 text-amber-500"
    if (v === "1.1.0") return "bg-green-500/20 text-green-500"
    return "bg-muted text-muted-foreground"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 h-8 px-3 bg-transparent">
          {getVersionIcon(version)}
          <span className="font-mono text-xs">{currentVersion?.label}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Select Version</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {versions.map((v) => (
          <DropdownMenuItem
            key={v.value}
            onSelect={() => setVersion(v.value)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className={`flex h-6 w-6 items-center justify-center rounded ${getVersionBadgeClass(v.value)}`}>
                {getVersionIcon(v.value)}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-sm">{v.label}</span>
                <span className="text-xs text-muted-foreground">{v.description}</span>
              </div>
            </div>
            {version === v.value && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5 text-xs text-muted-foreground">
          Docs and components will update based on selected version.
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
