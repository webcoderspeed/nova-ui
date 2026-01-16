"use client"

import { CodeBlock } from "@/components/docs/code-block"
import {
  NovaCard,
  NovaCardContent,
  NovaCardDescription,
  NovaCardHeader,
  NovaCardTitle,
  NovaTabs,
  NovaTabsContent,
  NovaTabsList,
  NovaTabsTrigger,
  NovaButton,
  NovaInput,
  NovaLabel,
  NovaBadge,
  NovaAvatar,
  NovaSwitch
} from "@/components/nova"
import { Mail, Lock, Bell, Shield, Zap } from "lucide-react"

export default function ExamplesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary">Examples</p>
        <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
        <p className="text-lg text-muted-foreground">
          Ready-to-use component compositions and patterns. Copy and paste these into your project as starting points.
        </p>
      </div>

      {/* Login Form */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Login Form</h2>
        <NovaTabs defaultValue="preview" className="w-full">
          <NovaTabsList>
            <NovaTabsTrigger value="preview">Preview</NovaTabsTrigger>
            <NovaTabsTrigger value="code">Code</NovaTabsTrigger>
          </NovaTabsList>
          <NovaTabsContent value="preview" className="mt-4">
            <NovaCard className="max-w-md mx-auto bg-card/50 border-border">
              <NovaCardHeader className="text-center">
                <NovaCardTitle>Welcome back</NovaCardTitle>
                <NovaCardDescription>Enter your credentials to sign in</NovaCardDescription>
              </NovaCardHeader>
              <NovaCardContent className="space-y-4">
                <div className="space-y-2">
                  <NovaLabel htmlFor="email">Email</NovaLabel>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <NovaInput id="email" placeholder="you@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <NovaLabel htmlFor="password">Password</NovaLabel>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <NovaInput id="password" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>
                <NovaButton className="w-full">Sign In</NovaButton>
                <p className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign up
                  </a>
                </p>
              </NovaCardContent>
            </NovaCard>
          </NovaTabsContent>
          <NovaTabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<NovaCard className="max-w-md mx-auto">
  <NovaCardHeader className="text-center">
    <NovaCardTitle>Welcome back</NovaCardTitle>
    <NovaCardDescription>Enter your credentials to sign in</NovaCardDescription>
  </NovaCardHeader>
  <NovaCardContent className="space-y-4">
    <div className="space-y-2">
      <NovaLabel htmlFor="email">Email</NovaLabel>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <NovaInput id="email" placeholder="you@example.com" className="pl-10" />
      </div>
    </div>
    <div className="space-y-2">
      <NovaLabel htmlFor="password">Password</NovaLabel>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <NovaInput id="password" type="password" className="pl-10" />
      </div>
    </div>
    <NovaButton className="w-full">Sign In</NovaButton>
  </NovaCardContent>
</NovaCard>`}
              language="tsx"
            />
          </NovaTabsContent>
        </NovaTabs>
      </section>

      {/* Pricing Card */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Pricing Card</h2>
        <NovaTabs defaultValue="preview" className="w-full">
          <NovaTabsList>
            <NovaTabsTrigger value="preview">Preview</NovaTabsTrigger>
            <NovaTabsTrigger value="code">Code</NovaTabsTrigger>
          </NovaTabsList>
          <NovaTabsContent value="preview" className="mt-4">
            <NovaCard className="max-w-sm mx-auto bg-card/50 border-border relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <NovaBadge className="bg-primary">Popular</NovaBadge>
              </div>
              <NovaCardHeader>
                <NovaCardTitle className="text-xl">Pro Plan</NovaCardTitle>
                <NovaCardDescription>For growing businesses</NovaCardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </NovaCardHeader>
              <NovaCardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {[
                    "Unlimited projects",
                    "Advanced analytics",
                    "Priority support",
                    "Custom integrations",
                    "API access",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <NovaButton className="w-full">Get Started</NovaButton>
              </NovaCardContent>
            </NovaCard>
          </NovaTabsContent>
          <NovaTabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<NovaCard className="max-w-sm relative overflow-hidden">
  <div className="absolute top-4 right-4">
    <NovaBadge>Popular</NovaBadge>
  </div>
  <NovaCardHeader>
    <NovaCardTitle>Pro Plan</NovaCardTitle>
    <NovaCardDescription>For growing businesses</NovaCardDescription>
    <div className="pt-4">
      <span className="text-4xl font-bold">$29</span>
      <span className="text-muted-foreground">/month</span>
    </div>
  </NovaCardHeader>
  <NovaCardContent className="space-y-4">
    <ul className="space-y-2 text-sm">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          {feature}
        </li>
      ))}
    </ul>
    <NovaButton className="w-full">Get Started</NovaButton>
  </NovaCardContent>
</NovaCard>`}
              language="tsx"
            />
          </NovaTabsContent>
        </NovaTabs>
      </section>

      {/* Settings Panel */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Settings Panel</h2>
        <NovaTabs defaultValue="preview" className="w-full">
          <NovaTabsList>
            <NovaTabsTrigger value="preview">Preview</NovaTabsTrigger>
            <NovaTabsTrigger value="code">Code</NovaTabsTrigger>
          </NovaTabsList>
          <NovaTabsContent value="preview" className="mt-4">
            <NovaCard className="max-w-lg mx-auto bg-card/50 border-border">
              <NovaCardHeader>
                <NovaCardTitle>Notification Settings</NovaCardTitle>
                <NovaCardDescription>Manage how you receive notifications</NovaCardDescription>
              </NovaCardHeader>
              <NovaCardContent className="space-y-6">
                {[
                  { icon: Mail, title: "Email notifications", desc: "Receive updates via email" },
                  { icon: Bell, title: "Push notifications", desc: "Get notified on your device" },
                  { icon: Shield, title: "Security alerts", desc: "Important security updates" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <NovaSwitch />
                  </div>
                ))}
              </NovaCardContent>
            </NovaCard>
          </NovaTabsContent>
          <NovaTabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<NovaCard className="max-w-lg">
  <NovaCardHeader>
    <NovaCardTitle>Notification Settings</NovaCardTitle>
    <NovaCardDescription>Manage how you receive notifications</NovaCardDescription>
  </NovaCardHeader>
  <NovaCardContent className="space-y-6">
    {settings.map((item) => (
      <div key={item.title} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </div>
        <NovaSwitch />
      </div>
    ))}
  </NovaCardContent>
</NovaCard>`}
              language="tsx"
            />
          </NovaTabsContent>
        </NovaTabs>
      </section>

      {/* User Profile */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">User Profile Card</h2>
        <NovaTabs defaultValue="preview" className="w-full">
          <NovaTabsList>
            <NovaTabsTrigger value="preview">Preview</NovaTabsTrigger>
            <NovaTabsTrigger value="code">Code</NovaTabsTrigger>
          </NovaTabsList>
          <NovaTabsContent value="preview" className="mt-4">
            <NovaCard className="max-w-sm mx-auto bg-card/50 border-border">
              <NovaCardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <NovaAvatar size="2xl" src="/professional-woman-portrait.png" fallback="JD" />
                  <h3 className="mt-4 text-lg font-semibold">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">Senior Developer</p>
                  <div className="mt-4 flex gap-2">
                    <NovaBadge variant="secondary">React</NovaBadge>
                    <NovaBadge variant="secondary">TypeScript</NovaBadge>
                    <NovaBadge variant="secondary">Node.js</NovaBadge>
                  </div>
                  <div className="mt-6 flex gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">128</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                    <div className="border-l border-border" />
                    <div>
                      <p className="text-2xl font-bold">4.9k</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div className="border-l border-border" />
                    <div>
                      <p className="text-2xl font-bold">320</p>
                      <p className="text-xs text-muted-foreground">Following</p>
                    </div>
                  </div>
                  <NovaButton className="mt-6 w-full">Follow</NovaButton>
                </div>
              </NovaCardContent>
            </NovaCard>
          </NovaTabsContent>
          <NovaTabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<NovaCard className="max-w-sm">
  <NovaCardContent className="pt-6">
    <div className="flex flex-col items-center text-center">
      <NovaAvatar size="2xl" src="/avatar.jpg" fallback="JD" />
      <h3 className="mt-4 text-lg font-semibold">Jane Doe</h3>
      <p className="text-sm text-muted-foreground">Senior Developer</p>
      <div className="mt-4 flex gap-2">
        <NovaBadge variant="secondary">React</NovaBadge>
        <NovaBadge variant="secondary">TypeScript</NovaBadge>
      </div>
      <div className="mt-6 flex gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">128</p>
          <p className="text-xs text-muted-foreground">Projects</p>
        </div>
        {/* ... more stats */}
      </div>
      <NovaButton className="mt-6 w-full">Follow</NovaButton>
    </div>
  </NovaCardContent>
</NovaCard>`}
              language="tsx"
            />
          </NovaTabsContent>
        </NovaTabs>
      </section>
    </div>
  )
}
