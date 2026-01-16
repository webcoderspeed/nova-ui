"use client"

import * as React from "react"
import { NovaCarousel, NovaCarouselContent, NovaCarouselItem, NovaCarouselNext, NovaCarouselPrevious } from "@/components/nova/nova-carousel"
import { NovaCard, NovaCardContent } from "@/components/nova/nova-card"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CarouselDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Carousel"
      description="A carousel with motion and swipe support."
      whenToUse={[
        "To cycle through a series of images or content.",
        "When space is limited but you have multiple items to show.",
        "For image galleries or featured content."
      ]}
      hints={[
        { type: "info", content: "Built on top of Embla Carousel." },
        { type: "info", content: "Supports `cards` variant for 3D effect." },
        { type: "info", content: "Items can have `zoom` effect on hover." }
      ]}
      preview={
        <div className="w-full max-w-xs">
          <NovaCarousel>
            <NovaCarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <NovaCarouselItem key={index}>
                  <div className="p-1">
                    <NovaCard>
                      <NovaCardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </NovaCardContent>
                    </NovaCard>
                  </div>
                </NovaCarouselItem>
              ))}
            </NovaCarouselContent>
            <NovaCarouselPrevious />
            <NovaCarouselNext />
          </NovaCarousel>
        </div>
      }
      installCommand="npx shadcn@latest add carousel"
      importCode={`import {
  NovaCarousel,
  NovaCarouselContent,
  NovaCarouselItem,
  NovaCarouselNext,
  NovaCarouselPrevious,
} from "@/components/nova/nova-carousel"`}
      usageCode={`<NovaCarousel>
  <NovaCarouselContent>
    <NovaCarouselItem>...</NovaCarouselItem>
    <NovaCarouselItem>...</NovaCarouselItem>
    <NovaCarouselItem>...</NovaCarouselItem>
  </NovaCarouselContent>
  <NovaCarouselPrevious />
  <NovaCarouselNext />
</NovaCarousel>`}
      props={[
        {
          name: "variant",
          type: '"default" | "cards"',
          defaultValue: '"default"',
          description: "Visual style of the carousel."
        }
      ]}
      examples={[
        {
          title: "Effects",
          description: "Carousel with fade and zoom effects.",
          code: `<NovaCarousel className="w-full max-w-xs">
  <NovaCarouselContent effect="fade">
    {Array.from({ length: 3 }).map((_, index) => (
      <NovaCarouselItem key={index} effect="zoom">
        <div className="p-1">
          <NovaCard>
            <NovaCardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </NovaCardContent>
          </NovaCard>
        </div>
      </NovaCarouselItem>
    ))}
  </NovaCarouselContent>
  <NovaCarouselPrevious />
  <NovaCarouselNext />
</NovaCarousel>`,
          preview: (
            <div className="w-full max-w-xs">
              <NovaCarousel>
                <NovaCarouselContent effect="fade">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <NovaCarouselItem key={index} effect="zoom">
                      <div className="p-1">
                        <NovaCard>
                          <NovaCardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </NovaCardContent>
                        </NovaCard>
                      </div>
                    </NovaCarouselItem>
                  ))}
                </NovaCarouselContent>
                <NovaCarouselPrevious />
                <NovaCarouselNext />
              </NovaCarousel>
            </div>
          )
        }
      ]}
    />
  )
}
