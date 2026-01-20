"use client"

import * as React from "react"
import { NovaInputOTP, NovaInputOTPGroup, NovaInputOTPSlot, NovaInputOTPSeparator } from "@/components/nova/nova-input-otp"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function InputOTPDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Input OTP"
      description="Accessible one-time password input component."
      whenToUse={[
        "When dealing with 2FA or verification codes.",
        "When you need a segmented input field.",
        "For entering PIN codes."
      ]}
      hints={[
        { type: "info", content: "Built on top of `input-otp`." },
        { type: "info", content: "Supports copy-paste functionality." },
        { type: "info", content: "Accessible with keyboard navigation." }
      ]}
      preview={
        <div className="flex flex-col gap-4 items-center">
          <NovaInputOTP maxLength={6}>
            <NovaInputOTPGroup>
              <NovaInputOTPSlot index={0} />
              <NovaInputOTPSlot index={1} />
              <NovaInputOTPSlot index={2} />
            </NovaInputOTPGroup>
            <NovaInputOTPSeparator />
            <NovaInputOTPGroup>
              <NovaInputOTPSlot index={3} />
              <NovaInputOTPSlot index={4} />
              <NovaInputOTPSlot index={5} />
            </NovaInputOTPGroup>
          </NovaInputOTP>
        </div>
      }
      installCommand="npx shadcn@latest add input-otp"
      importCode={`import {
  NovaInputOTP,
  NovaInputOTPGroup,
  NovaInputOTPSlot,
  NovaInputOTPSeparator,
} from "@/components/nova/nova-input-otp"`}
      usageCode={`<NovaInputOTP maxLength={6}>
  <NovaInputOTPGroup>
    <NovaInputOTPSlot index={0} />
    <NovaInputOTPSlot index={1} />
    <NovaInputOTPSlot index={2} />
  </NovaInputOTPGroup>
  <NovaInputOTPSeparator />
  <NovaInputOTPGroup>
    <NovaInputOTPSlot index={3} />
    <NovaInputOTPSlot index={4} />
    <NovaInputOTPSlot index={5} />
  </NovaInputOTPGroup>
</NovaInputOTP>`}
      props={[
        {
          name: "variant",
          type: '"default" | "ghost" | "outline" | "glow" | "glass" | "neon"',
          defaultValue: '"default"',
          description: "Visual style of the OTP input."
        },
        {
          name: "dimension",
          type: '"default" | "sm" | "lg" | "xl"',
          defaultValue: '"default"',
          description: "Size of the input slots."
        },
        {
          name: "maxLength",
          type: "number",
          defaultValue: "6",
          description: "Maximum length of the input."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the OTP input.",
          code: `<div className="flex flex-col gap-4 items-center">
  <NovaInputOTP maxLength={4} variant="glow">
    <NovaInputOTPGroup>
      <NovaInputOTPSlot index={0} />
      <NovaInputOTPSlot index={1} />
      <NovaInputOTPSlot index={2} />
      <NovaInputOTPSlot index={3} />
    </NovaInputOTPGroup>
  </NovaInputOTP>

  <NovaInputOTP maxLength={4} variant="neon">
    <NovaInputOTPGroup>
      <NovaInputOTPSlot index={0} />
      <NovaInputOTPSlot index={1} />
      <NovaInputOTPSlot index={2} />
      <NovaInputOTPSlot index={3} />
    </NovaInputOTPGroup>
  </NovaInputOTP>
</div>`,
          preview: (
            <div className="flex flex-col gap-4 items-center">
              <NovaInputOTP maxLength={4} variant="glow">
                <NovaInputOTPGroup>
                  <NovaInputOTPSlot index={0} />
                  <NovaInputOTPSlot index={1} />
                  <NovaInputOTPSlot index={2} />
                  <NovaInputOTPSlot index={3} />
                </NovaInputOTPGroup>
              </NovaInputOTP>

              <NovaInputOTP maxLength={4} variant="neon">
                <NovaInputOTPGroup>
                  <NovaInputOTPSlot index={0} />
                  <NovaInputOTPSlot index={1} />
                  <NovaInputOTPSlot index={2} />
                  <NovaInputOTPSlot index={3} />
                </NovaInputOTPGroup>
              </NovaInputOTP>
            </div>
          )
        },
        {
          title: "Sizes",
          description: "Available sizes for the OTP input.",
          code: `<div className="flex flex-col gap-4 items-center">
  <NovaInputOTP maxLength={3} dimension="sm">
    <NovaInputOTPGroup>
      <NovaInputOTPSlot index={0} />
      <NovaInputOTPSlot index={1} />
      <NovaInputOTPSlot index={2} />
    </NovaInputOTPGroup>
  </NovaInputOTP>
  
  <NovaInputOTP maxLength={3} dimension="xl">
    <NovaInputOTPGroup>
      <NovaInputOTPSlot index={0} />
      <NovaInputOTPSlot index={1} />
      <NovaInputOTPSlot index={2} />
    </NovaInputOTPGroup>
  </NovaInputOTP>
</div>`,
          preview: (
            <div className="flex flex-col gap-4 items-center">
              <NovaInputOTP maxLength={3} dimension="sm">
                <NovaInputOTPGroup>
                  <NovaInputOTPSlot index={0} />
                  <NovaInputOTPSlot index={1} />
                  <NovaInputOTPSlot index={2} />
                </NovaInputOTPGroup>
              </NovaInputOTP>
              
              <NovaInputOTP maxLength={3} dimension="lg">
                <NovaInputOTPGroup>
                  <NovaInputOTPSlot index={0} />
                  <NovaInputOTPSlot index={1} />
                  <NovaInputOTPSlot index={2} />
                </NovaInputOTPGroup>
              </NovaInputOTP>
            </div>
          )
        }
      ]}
    />
  )
}
