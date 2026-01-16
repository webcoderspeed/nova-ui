"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Search } from "lucide-react"

export default function SelectDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Select"
      description="V2 select with search, multi-select, custom rendering, and async loading support."
      preview={
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Popular</SelectLabel>
                <SelectItem value="us">
                  <div className="flex items-center gap-2">
                    <span>🇺🇸</span> United States
                  </div>
                </SelectItem>
                <SelectItem value="uk">
                  <div className="flex items-center gap-2">
                    <span>🇬🇧</span> United Kingdom
                  </div>
                </SelectItem>
                <SelectItem value="in">
                  <div className="flex items-center gap-2">
                    <span>🇮🇳</span> India
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaSelect } from "@/nova-ui"

// V2 exports additional variants
import { 
  NovaSelect,
  SearchableSelect,
  MultiSelect,
  AsyncSelect 
} from "@/nova-ui"`}
      usageCode={`import { NovaSelect, MultiSelect, SearchableSelect } from "@/nova-ui"

// Searchable select (NEW in v2.0.0)
export function SearchableExample() {
  return (
    <SearchableSelect
      placeholder="Search countries..."
      options={countries}
      searchPlaceholder="Type to search"
    />
  )
}

// Multi-select (NEW in v2.0.0)
export function MultiExample() {
  return (
    <MultiSelect
      placeholder="Select tags"
      options={tags}
      max={5}
    />
  )
}

// Async loading (NEW in v2.0.0)
export function AsyncExample() {
  return (
    <AsyncSelect
      placeholder="Search users..."
      loadOptions={async (query) => {
        const users = await fetchUsers(query)
        return users.map(u => ({ value: u.id, label: u.name }))
      }}
    />
  )
}

// Custom rendering (NEW in v2.0.0)
export function CustomExample() {
  return (
    <NovaSelect
      options={countries}
      renderOption={(option) => (
        <div className="flex items-center gap-2">
          <span>{option.flag}</span>
          <span>{option.label}</span>
        </div>
      )}
    />
  )
}`}
      props={[
        { name: "value", type: "string | string[]", description: "Controlled value (supports array for multi)" },
        { name: "defaultValue", type: "string | string[]", description: "Default value" },
        { name: "onValueChange", type: "(value: string | string[]) => void", description: "Callback on value change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the select" },
        { name: "options", type: "SelectOption[]", description: "Array of options" },
        { name: "groups", type: "SelectGroup[]", description: "Grouped options" },
        { name: "placeholder", type: "string", description: "Placeholder text" },
        { name: "searchable", type: "boolean", default: "false", description: "Enable search (NEW in v2.0.0)" },
        { name: "searchPlaceholder", type: "string", description: "Search input placeholder (NEW in v2.0.0)" },
        { name: "multiple", type: "boolean", default: "false", description: "Enable multi-select (NEW in v2.0.0)" },
        { name: "max", type: "number", description: "Max selections for multi-select (NEW in v2.0.0)" },
        {
          name: "loadOptions",
          type: "(query: string) => Promise<Option[]>",
          description: "Async option loading (NEW in v2.0.0)",
        },
        {
          name: "renderOption",
          type: "(option: Option) => ReactNode",
          description: "Custom option renderer (NEW in v2.0.0)",
        },
        {
          name: "renderValue",
          type: "(value: Option | Option[]) => ReactNode",
          description: "Custom value renderer (NEW in v2.0.0)",
        },
      ]}
      examples={[
        {
          title: "With Custom Rendering",
          description: "Select with custom option rendering.",
          code: `<NovaSelect
  renderOption={(opt) => (
    <div className="flex items-center gap-2">
      <span>{opt.flag}</span>
      {opt.label}
    </div>
  )}
  options={[
    { value: "us", label: "United States", flag: "🇺🇸" },
    { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
  ]}
/>`,
          preview: (
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">
                  <div className="flex items-center gap-2">
                    <span>🇺🇸</span> United States
                  </div>
                </SelectItem>
                <SelectItem value="uk">
                  <div className="flex items-center gap-2">
                    <span>🇬🇧</span> United Kingdom
                  </div>
                </SelectItem>
                <SelectItem value="in">
                  <div className="flex items-center gap-2">
                    <span>🇮🇳</span> India
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          ),
        },
        {
          title: "Searchable",
          description: "Select with search functionality.",
          code: `<SearchableSelect
  placeholder="Search..."
  searchPlaceholder="Type to filter"
  options={[...]}
/>`,
          preview: (
            <div className="w-[200px] border rounded-md">
              <div className="flex items-center gap-2 px-3 py-2 border-b">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Search..." />
              </div>
              <div className="p-1">
                <div className="px-2 py-1.5 text-sm hover:bg-accent rounded cursor-pointer">Apple</div>
                <div className="px-2 py-1.5 text-sm hover:bg-accent rounded cursor-pointer">Banana</div>
                <div className="px-2 py-1.5 text-sm hover:bg-accent rounded cursor-pointer">Orange</div>
              </div>
            </div>
          ),
        },
        {
          title: "Multi-Select",
          description: "Select multiple options.",
          code: `<MultiSelect
  placeholder="Select tags"
  max={3}
  options={[
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ]}
/>`,
          preview: (
            <div className="w-[300px] border rounded-md p-2 flex flex-wrap gap-1">
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded text-sm">
                React
                <button className="hover:text-primary/80">×</button>
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded text-sm">
                Vue
                <button className="hover:text-primary/80">×</button>
              </span>
              <span className="text-muted-foreground text-sm">+ Add more...</span>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Combobox", href: "/docs/components/command" },
        { name: "Radio Group", href: "/docs/components/radio-group" },
        { name: "Checkbox", href: "/docs/components/checkbox" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
