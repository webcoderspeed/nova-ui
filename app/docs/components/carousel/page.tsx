"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function CarouselPage() {
  return (
    <ComponentDocTemplate
      title="Carousel"
      description="A carousel with motion and swipe built using Embla. Supports autoplay, loop, and custom navigation."
      preview={
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }
      installCommand="npx nova-ui@latest add carousel"
      importCode={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"`}
      usageCode={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function MyComponent() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`}
      props={[
        { name: "opts", type: "EmblaOptionsType", description: "Embla carousel options" },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Carousel direction",
        },
        { name: "setApi", type: "function", description: "Callback to get carousel API" },
        { name: "plugins", type: "EmblaPluginType[]", description: "Embla plugins (autoplay, etc.)" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Multiple Items",
          description: "Show multiple items per view.",
          code: `<Carousel className="w-full max-w-sm">
  <CarouselContent className="-ml-1">
    {items.map((_, index) => (
      <CarouselItem key={index} className="pl-1 basis-1/3">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>`,
          preview: (
            <Carousel className="w-full max-w-sm">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 basis-1/3">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <span className="text-xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ),
        },
        {
          title: "Vertical",
          description: "Vertical carousel orientation.",
          code: `<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-1 h-[200px]">
    {items.map((_, index) => (
      <CarouselItem key={index} className="pt-1 basis-1/2">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-3xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>`,
          preview: (
            <Carousel orientation="vertical" className="w-full max-w-xs">
              <CarouselContent className="-mt-1 h-[200px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 basis-1/2">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Card", href: "/docs/components/card" },
        { name: "Scroll Area", href: "/docs/components/scroll-area" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/carousel.tsx"
    />
  )
}
