"use client"

import * as React from "react"
import { NovaBigCalendar, type NovaEvent } from "@/components/nova/nova-big-calendar"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock,
  MoreHorizontal,
  Plus
} from "lucide-react"
import { NovaAvatar } from "@/components/nova/nova-avatar"
import { NovaButton } from "@/components/nova/nova-button"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { type ToolbarProps, type EventProps, type View } from "react-big-calendar"
import { toast } from "sonner"

// --- Mock Data ---
const today = new Date()
// Ensure we have some data for the current month/week
const initialEvents: NovaEvent[] = [
  {
    title: "Shooting Stars",
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 30),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
    description: "Photography session with the team.",
    color: "green",
    avatars: ["/avatars/01.png", "/avatars/02.png"],
  },
  {
    title: "The Amazing Hubble",
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
    description: "Deep space observation review.",
    color: "orange",
    avatars: ["/avatars/03.png", "/avatars/04.png"],
  },
  {
    title: "Choosing A Quality Cookware Set",
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0),
    description: "Product testing and review.",
    color: "purple",
    avatars: ["/avatars/05.png"],
  },
  {
    title: "Astronomy Binoculars A Great Alternative",
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 11, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 13, 0),
    description: "Equipment comparison meeting.",
    color: "blue", 
    avatars: ["/avatars/01.png"],
  },
  {
    title: "The Universe Through A Child S Eyes",
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2, 11, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2, 14, 0),
    description: "Educational outreach planning.",
    color: "orange",
    avatars: ["/avatars/02.png", "/avatars/03.png"],
  },
]

// --- Custom Components ---

function CustomDashboardToolbar<TEvent extends object, TResource extends object>(props: ToolbarProps<TEvent, TResource>) {
  const { date, onNavigate, onView, view } = props

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 px-2 pt-2">
      <div className="flex items-center gap-6 w-full sm:w-auto">
        <div className="flex items-center rounded-lg border bg-background shadow-sm overflow-hidden">
            <button 
                onClick={() => onNavigate("PREV")}
                className="p-2 hover:bg-muted transition-colors border-r"
                title="Previous"
            >
                <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
                onClick={() => onNavigate("TODAY")}
                className="px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                title="Today"
            >
                Today
            </button>
            <button 
                onClick={() => onNavigate("NEXT")}
                className="p-2 hover:bg-muted transition-colors border-l"
                title="Next"
            >
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground tracking-tight">
            {format(date, "MMMM yyyy")}
        </h2>
      </div>

      <div className="bg-muted/50 border rounded-lg p-1 flex items-center gap-1">
        {(["month", "week", "day", "agenda"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => onView(v)}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all capitalize",
              view === v
                ? "bg-background text-foreground shadow-sm border"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}

function CustomDashboardEvent<TEvent extends NovaEvent>({ event }: EventProps<TEvent>) {
  const colorMap: Record<string, string> = {
    green: "bg-green-500 text-white shadow-green-500/20",
    orange: "bg-orange-500 text-white shadow-orange-500/20",
    purple: "bg-purple-500 text-white shadow-purple-500/20",
    blue: "bg-blue-500 text-white shadow-blue-500/20",
  }

  const style = colorMap[event.color || "blue"]

  return (
    <div className={cn("flex flex-col h-full w-full p-2 rounded-lg shadow-sm transition-all hover:scale-[1.02] border border-white/10 opacity-90 hover:opacity-100", style)}>
      <div className="flex justify-between items-start mb-0.5">
        <span className="text-[10px] font-medium opacity-90">
          {format(event.start, "h:mm a")}
        </span>
      </div>
      
      <h4 className="font-semibold text-xs leading-tight line-clamp-2">
        {event.title}
      </h4>
    </div>
  )
}

function CustomAgendaEvent({ event }: { event: NovaEvent }) {
    const colorMap: Record<string, { bg: string, border: string, text: string, icon: string }> = {
        green: { bg: "bg-green-50 dark:bg-green-950/20", border: "border-green-500", text: "text-green-700 dark:text-green-300", icon: "text-green-500" },
        orange: { bg: "bg-orange-50 dark:bg-orange-950/20", border: "border-orange-500", text: "text-orange-700 dark:text-orange-300", icon: "text-orange-500" },
        purple: { bg: "bg-purple-50 dark:bg-purple-950/20", border: "border-purple-500", text: "text-purple-700 dark:text-purple-300", icon: "text-purple-500" },
        blue: { bg: "bg-blue-50 dark:bg-blue-950/20", border: "border-blue-500", text: "text-blue-700 dark:text-blue-300", icon: "text-blue-500" },
    }
    const theme = colorMap[event.color || "blue"]

    return (
        <div className={cn("flex items-start p-4 rounded-r-lg border-l-4 w-full mb-2 cursor-pointer transition-colors hover:bg-muted/50", theme.bg, theme.border)}>
            <div className="flex-1">
                <h3 className={cn("font-bold text-sm mb-1", theme.text)}>{event.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock className="h-3 w-3" />
                    <span>{format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}</span>
                </div>
                <p className="text-sm text-muted-foreground/80 line-clamp-1">{event.description}</p>
            </div>
            <div className="flex items-center gap-2">
                 <div className="flex -space-x-2">
                    {event.avatars?.slice(0, 2).map((src, i) => (
                        <NovaAvatar key={i} src={src} size="xs" className="h-6 w-6 border-2 border-background" />
                    ))}
                 </div>
                 <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                 </button>
            </div>
        </div>
    )
}

function CalendarDashboard() {
  const [events, setEvents] = React.useState<NovaEvent[]>(initialEvents)

  const handleSelectSlot = React.useCallback(({ start, end }: { start: Date; end: Date }) => {
    const title = window.prompt("New Event Name")
    if (title) {
      setEvents((prev) => [
        ...prev,
        {
          start,
          end,
          title,
          description: "New event created via interaction",
          color: "blue", // Default color
        },
      ])
      toast.success("Event created successfully!")
    }
  }, [])

  const handleSelectEvent = React.useCallback((event: NovaEvent) => {
    if (window.confirm(`Delete event "${event.title}"?`)) {
      setEvents((prev) => prev.filter((e) => e !== event))
      toast.success("Event deleted")
    }
  }, [])

  return (
    <div className="h-[800px] w-full font-sans p-6 bg-background border rounded-xl shadow-sm relative group">
      <div className="absolute top-4 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
          Try clicking a date to add an event
        </div>
      </div>
      <NovaBigCalendar<NovaEvent>
        selectable
        events={events}
        defaultView="month"
        views={["month", "week", "day", "agenda"]}
        components={{
          toolbar: CustomDashboardToolbar,
          event: CustomDashboardEvent,
          agenda: {
            event: CustomAgendaEvent as any 
          }
        }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        className={cn(
            "h-full",
            // Premium Month View Styles
            "[&_.rbc-month-view]:border-none",
            "[&_.rbc-header]:border-b [&_.rbc-header]:text-muted-foreground [&_.rbc-header]:font-medium [&_.rbc-header]:py-4 [&_.rbc-header]:text-xs [&_.rbc-header]:uppercase [&_.rbc-header]:tracking-wider",
            "[&_.rbc-month-row]:border-b [&_.rbc-month-row]:min-h-[120px]",
            "[&_.rbc-day-bg]:border-r [&_.rbc-day-bg]:border-border/30",
            "[&_.rbc-off-range-bg]:bg-muted/20",
            "[&_.rbc-date-cell]:text-muted-foreground [&_.rbc-date-cell]:font-medium [&_.rbc-date-cell]:p-2",
            "[&_.rbc-now]:text-primary [&_.rbc-now]:font-bold",
            "[&_.rbc-event]:shadow-none", // Reset default shadow
            
            // Premium Time Grid Styles (Week/Day)
            "[&_.rbc-time-view]:border-none [&_.rbc-time-header]:border-b",
            "[&_.rbc-time-header-content]:border-l-0",
            "[&_.rbc-time-content]:border-t-0",
            "[&_.rbc-timeslot-group]:border-b [&_.rbc-timeslot-group]:border-border/30",
            "[&_.rbc-label]:text-xs [&_.rbc-label]:text-muted-foreground [&_.rbc-label]:font-medium",
            "[&_.rbc-day-slot]:bg-background/50",
            
            // Premium Agenda View Styles
            "[&_.rbc-agenda-view]:border-none",
            "[&_.rbc-agenda-table]:border-separate [&_.rbc-agenda-table]:border-spacing-y-4",
            "[&_.rbc-agenda-thead]:hidden", 
            "[&_.rbc-agenda-tbody_tr]:hover:bg-transparent",
            "[&_.rbc-agenda-date-cell]:align-top [&_.rbc-agenda-date-cell]:text-right [&_.rbc-agenda-date-cell]:pr-6 [&_.rbc-agenda-date-cell]:font-semibold [&_.rbc-agenda-date-cell]:text-muted-foreground [&_.rbc-agenda-date-cell]:border-none",
            "[&_.rbc-agenda-time-cell]:hidden", 
            "[&_.rbc-agenda-event-cell]:border-none [&_.rbc-agenda-event-cell]:p-0",
        )}
      />
    </div>
  )
}

export default function BigCalendarDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Big Calendar"
      description="A premium, customizable calendar component with professional views."
      whenToUse={[
        "When you need a full-featured calendar for scheduling.",
        "To display complex events with rich data (avatars, descriptions).",
        "For applications requiring multiple calendar views (month, week, day, agenda)."
      ]}
      hints={[
        { type: "info", content: "Includes custom event rendering with support for colors, descriptions, and avatars." },
        { type: "info", content: "Custom toolbar with navigation and view switching included by default." },
        { type: "info", content: "Responsive design that adapts to mobile devices." }
      ]}
      preview={
        <div className="w-full -mx-4 sm:mx-0">
          <CalendarDashboard />
        </div>
      }
      installCommand="npm install react-big-calendar @types/react-big-calendar date-fns lucide-react sonner"
      importCode={`import { NovaBigCalendar, type NovaEvent } from "@/components/nova/nova-big-calendar"`}
      usageCode={`// Premium Interactive Calendar
import { NovaBigCalendar, type NovaEvent } from "@/components/nova/nova-big-calendar"
import { toast } from "sonner"

export function InteractiveCalendar() {
  const [events, setEvents] = React.useState<NovaEvent[]>(initialEvents)

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event Name")
    if (title) {
      setEvents(prev => [...prev, { start, end, title, color: "blue" }])
      toast.success("Event created!")
    }
  }

  const handleSelectEvent = (event) => {
    if (window.confirm(\`Delete \${event.title}?\`)) {
      setEvents(prev => prev.filter(e => e !== event))
      toast.success("Event deleted")
    }
  }

  return (
    <div className="h-[800px] p-6 bg-background border rounded-xl shadow-sm">
      <NovaBigCalendar<NovaEvent>
        selectable
        events={events}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        // ... custom components and styles (see source)
      />
    </div>
  )
}`}
      props={[
        {
          name: "events",
          type: "NovaEvent[]",
          defaultValue: "[]",
          description: "Array of event objects with title, start, end, and optional styling props."
        },
        {
          name: "selectable",
          type: "boolean",
          defaultValue: "false",
          description: "Allows user to select slots and events."
        },
        {
          name: "onSelectSlot",
          type: "(slotInfo) => void",
          defaultValue: "undefined",
          description: "Callback fired when a slot is selected."
        }
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A modern glassmorphism style calendar.",
          code: `<NovaBigCalendar
  events={events}
  variant="glass"
  className="h-[600px]"
/>`,
          preview: (
            <div className="w-full h-[600px] p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
              <NovaBigCalendar
                events={initialEvents}
                variant="glass"
                defaultView="month"
              />
            </div>
          )
        },
        {
          title: "Minimal Variant",
          description: "A clean, minimal calendar style.",
          code: `<NovaBigCalendar
  events={events}
  variant="minimal"
  className="h-[600px]"
/>`,
          preview: (
            <div className="w-full h-[600px] border rounded-xl p-4">
              <NovaBigCalendar
                events={initialEvents}
                variant="minimal"
                defaultView="day"
              />
            </div>
          )
        }
      ]}
    />
  )
}
