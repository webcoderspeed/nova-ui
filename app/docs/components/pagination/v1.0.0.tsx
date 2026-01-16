"use client"

import {
  NovaPagination,
  NovaPaginationContent,
  NovaPaginationEllipsis,
  NovaPaginationItem,
  NovaPaginationLink,
  NovaPaginationNext,
  NovaPaginationPrevious,
} from "@/components/nova/nova-pagination"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function PaginationDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Navigation"
      title="Pagination"
      description="Pagination with page numbers and next/previous links."
      whenToUse={[
        "To split large amounts of content into multiple pages.",
        "When scrolling is not the best user experience for navigation.",
        "To provide direct access to specific pages of results."
      ]}
      hints={[
        { type: "info", content: "Supports `glow` and `glass` variants on `NovaPaginationLink`, `NovaPaginationNext`, and `NovaPaginationPrevious`." }
      ]}
      preview={
        <NovaPagination>
          <NovaPaginationContent>
            <NovaPaginationItem>
              <NovaPaginationPrevious href="#" />
            </NovaPaginationItem>
            <NovaPaginationItem>
              <NovaPaginationLink href="#">1</NovaPaginationLink>
            </NovaPaginationItem>
            <NovaPaginationItem>
              <NovaPaginationLink href="#" isActive>
                2
              </NovaPaginationLink>
            </NovaPaginationItem>
            <NovaPaginationItem>
              <NovaPaginationLink href="#">3</NovaPaginationLink>
            </NovaPaginationItem>
            <NovaPaginationItem>
              <NovaPaginationEllipsis />
            </NovaPaginationItem>
            <NovaPaginationItem>
              <NovaPaginationNext href="#" />
            </NovaPaginationItem>
          </NovaPaginationContent>
        </NovaPagination>
      }
      installCommand="npx nova-ui@latest add pagination"
      importCode={`import {
  NovaPagination,
  NovaPaginationContent,
  NovaPaginationEllipsis,
  NovaPaginationItem,
  NovaPaginationLink,
  NovaPaginationNext,
  NovaPaginationPrevious,
} from "@/components/nova/nova-pagination"`}
      usageCode={`<NovaPagination>
  <NovaPaginationContent>
    <NovaPaginationItem>
      <NovaPaginationPrevious href="#" />
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationLink href="#">1</NovaPaginationLink>
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationLink href="#" isActive>2</NovaPaginationLink>
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationLink href="#">3</NovaPaginationLink>
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationEllipsis />
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationNext href="#" />
    </NovaPaginationItem>
  </NovaPaginationContent>
</NovaPagination>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glow" | "glass"',
          defaultValue: '"default"',
          description: "Visual style of the pagination links.",
        },
      ]}
      examples={[
        {
          title: "Glow Variant",
          description: "Pagination links with a glowing hover effect.",
          code: `<NovaPagination>
  <NovaPaginationContent>
    <NovaPaginationItem>
      <NovaPaginationPrevious href="#" variant="glow" />
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationLink href="#" variant="glow">1</NovaPaginationLink>
    </NovaPaginationItem>
    {/* ... */}
    <NovaPaginationItem>
      <NovaPaginationNext href="#" variant="glow" />
    </NovaPaginationItem>
  </NovaPaginationContent>
</NovaPagination>`,
          preview: (
            <NovaPagination>
              <NovaPaginationContent>
                <NovaPaginationItem>
                  <NovaPaginationPrevious href="#" variant="glow" />
                </NovaPaginationItem>
                <NovaPaginationItem>
                  <NovaPaginationLink href="#" variant="glow">1</NovaPaginationLink>
                </NovaPaginationItem>
                <NovaPaginationItem>
                  <NovaPaginationLink href="#" isActive variant="glow">
                    2
                  </NovaPaginationLink>
                </NovaPaginationItem>
                <NovaPaginationItem>
                  <NovaPaginationLink href="#" variant="glow">3</NovaPaginationLink>
                </NovaPaginationItem>
                <NovaPaginationItem>
                  <NovaPaginationNext href="#" variant="glow" />
                </NovaPaginationItem>
              </NovaPaginationContent>
            </NovaPagination>
          )
        },
        {
          title: "Glass Variant",
          description: "Pagination links with a glassmorphism effect.",
          code: `<NovaPagination>
  <NovaPaginationContent>
    <NovaPaginationItem>
      <NovaPaginationPrevious href="#" variant="glass" />
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationLink href="#" variant="glass">1</NovaPaginationLink>
    </NovaPaginationItem>
    {/* ... */}
    <NovaPaginationItem>
      <NovaPaginationNext href="#" variant="glass" />
    </NovaPaginationItem>
  </NovaPaginationContent>
</NovaPagination>`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-full">
              <NovaPagination>
                <NovaPaginationContent>
                  <NovaPaginationItem>
                    <NovaPaginationPrevious href="#" variant="glass" className="text-white hover:text-white" />
                  </NovaPaginationItem>
                  <NovaPaginationItem>
                    <NovaPaginationLink href="#" variant="glass" className="text-white hover:text-white">1</NovaPaginationLink>
                  </NovaPaginationItem>
                  <NovaPaginationItem>
                    <NovaPaginationLink href="#" isActive variant="glass" className="text-white hover:text-white bg-white/30">
                      2
                    </NovaPaginationLink>
                  </NovaPaginationItem>
                  <NovaPaginationItem>
                    <NovaPaginationLink href="#" variant="glass" className="text-white hover:text-white">3</NovaPaginationLink>
                  </NovaPaginationItem>
                  <NovaPaginationItem>
                    <NovaPaginationNext href="#" variant="glass" className="text-white hover:text-white" />
                  </NovaPaginationItem>
                </NovaPaginationContent>
              </NovaPagination>
            </div>
          )
        }
      ]}
    />
  )
}
