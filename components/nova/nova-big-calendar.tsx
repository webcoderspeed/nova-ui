"use client"

import * as React from "react"
import { Calendar, dateFnsLocalizer, type CalendarProps, type EventProps, type ToolbarProps, type View, type Components, type DateLocalizer } from "react-big-calendar"
import withDragAndDrop, { type withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop"
import { format, parse, startOfWeek, getDay, isSameDay } from "date-fns"
import { enUS } from "date-fns/locale"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MoreHorizontal } from "lucide-react"
import { NovaAvatar } from "./nova-avatar"
import { NovaButton } from "./nova-button"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const DnDCalendar = withDragAndDrop(Calendar)

const novaBigCalendarVariants = cva(
  "rounded-lg overflow-hidden transition-all duration-300 [&_.rbc-toolbar]:mb-4 [&_.rbc-toolbar_button]:hidden [&_.rbc-header]:p-2 [&_.rbc-header]:font-medium [&_.rbc-header]:text-muted-foreground [&_.rbc-header]:uppercase [&_.rbc-header]:text-xs [&_.rbc-event]:bg-transparent [&_.rbc-event]:p-0 [&_.rbc-event]:rounded-lg [&_.rbc-event.rbc-selected]:bg-transparent [&_.rbc-event:focus]:outline-none [&_.rbc-day-slot_.rbc-event]:border-none [&_.rbc-time-slot]:border-border/50 [&_.rbc-day-bg]:border-border/50 [&_.rbc-header]:border-border/50 [&_.rbc-month-view]:border-border/50 [&_.rbc-month-row]:border-border/50",
  {
    variants: {
      variant: {
        default: "bg-background border shadow-sm",
        glass: "bg-white/70 dark:bg-black/70 backdrop-blur-md border-white/20 dark:border-white/10 shadow-xl",
        minimal: "border-none shadow-none bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NovaEvent {
  title: string
  start: Date
  end: Date
  description?: string
  color?: "blue" | "green" | "pink" | "orange" | "purple"
  avatars?: string[]
  allDay?: boolean
  resource?: unknown
}

export interface NovaBigCalendarProps<TEvent extends object = NovaEvent, TResource extends object = object>
  extends Omit<CalendarProps<TEvent, TResource>, "localizer">,
    withDragAndDropProps<TEvent, TResource>,
    VariantProps<typeof novaBigCalendarVariants> {
  localizer?: DateLocalizer
  withDnD?: boolean
}

function CustomEvent<TEvent extends NovaEvent>({ event }: EventProps<TEvent>) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-700 border-l-4 border-blue-500 dark:text-blue-300",
    green: "bg-green-500/10 text-green-700 border-l-4 border-green-500 dark:text-green-300",
    pink: "bg-pink-500/10 text-pink-700 border-l-4 border-pink-500 dark:text-pink-300",
    orange: "bg-orange-500/10 text-orange-700 border-l-4 border-orange-500 dark:text-orange-300",
    purple: "bg-purple-500/10 text-purple-700 border-l-4 border-purple-500 dark:text-purple-300",
  }

  const baseColor = event.color || "blue"
  const styles = colorMap[baseColor] || colorMap.blue

  return (
    <div className={cn("flex flex-col h-full w-full p-2 text-xs leading-tight rounded-r-md transition-all hover:brightness-95", styles)}>
      <div className="flex justify-between items-start mb-1">
        <span className="font-semibold line-clamp-1">{event.title}</span>
        {event.description && <MoreHorizontal className="h-3 w-3 opacity-50" />}
      </div>
      
      <div className="flex items-center gap-1 opacity-80 mb-2">
        <Clock className="h-3 w-3" />
        <span>
          {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
        </span>
      </div>

      {event.description && (
        <p className="line-clamp-2 opacity-70 mb-2">{event.description}</p>
      )}

      {event.avatars && event.avatars.length > 0 && (
        <div className="flex -space-x-2 mt-auto pt-1">
          {event.avatars.slice(0, 3).map((avatar, i) => (
            <NovaAvatar 
              key={i} 
              src={avatar} 
              fallback={`${i + 1}`} 
              size="xs" 
              className="h-5 w-5 border border-background text-[8px]" 
            />
          ))}
          {event.avatars.length > 3 && (
            <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-[8px] border border-background">
              +{event.avatars.length - 3}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CustomToolbar<TEvent extends object, TResource extends object>(props: ToolbarProps<TEvent, TResource>) {
  const { date, onNavigate, onView, view } = props

  const goToBack = () => {
    onNavigate("PREV")
  }

  const goToNext = () => {
    onNavigate("NEXT")
  }

  const goToToday = () => {
    onNavigate("TODAY")
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4 p-4 border-b">
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-md border bg-background shadow-sm">
          <NovaButton variant="ghost" size="icon" onClick={goToBack} className="h-8 w-8 rounded-r-none border-r">
            <ChevronLeft className="h-4 w-4" />
          </NovaButton>
          <NovaButton variant="ghost" size="sm" onClick={goToToday} className="h-8 rounded-none px-3 font-normal">
            Today
          </NovaButton>
          <NovaButton variant="ghost" size="icon" onClick={goToNext} className="h-8 w-8 rounded-l-none border-l">
            <ChevronRight className="h-4 w-4" />
          </NovaButton>
        </div>
        <h2 className="text-lg font-semibold ml-2">
          {format(date, "MMMM yyyy")}
        </h2>
      </div>

      <div className="flex items-center rounded-md border bg-muted p-1">
        {(["month", "week", "day", "agenda"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => onView(v)}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-sm transition-all capitalize",
              view === v
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}

function NovaBigCalendar<TEvent extends NovaEvent = NovaEvent, TResource extends object = object>({
  className,
  variant,
  localizer: customLocalizer,
  style,
  components: userComponents,
  withDnD = false,
  ...props
}: NovaBigCalendarProps<TEvent, TResource>) {
  
  const components = React.useMemo<Components<TEvent, TResource>>(() => ({
    event: CustomEvent,
    toolbar: CustomToolbar,
    ...userComponents,
  }), [userComponents])

  const CalendarComponent = withDnD ? DnDCalendar : Calendar

  return (
    <div className={cn(novaBigCalendarVariants({ variant }), className)}>
      <CalendarComponent
        localizer={customLocalizer || localizer}
        style={{ height: 600, ...style }}
        components={components}
        {...(props as any)}
      />
    </div>
  )
}

export { NovaBigCalendar }
