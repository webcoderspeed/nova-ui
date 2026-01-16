"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
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
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <Card className="max-w-md mx-auto bg-card/50 border-border">
              <CardHeader className="text-center">
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Enter your credentials to sign in</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" placeholder="you@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>
                <Button className="w-full">Sign In</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign up
                  </a>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<Card className="max-w-md mx-auto">
  <CardHeader className="text-center">
    <CardTitle>Welcome back</CardTitle>
    <CardDescription>Enter your credentials to sign in</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input id="email" placeholder="you@example.com" className="pl-10" />
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input id="password" type="password" className="pl-10" />
      </div>
    </div>
    <Button className="w-full">Sign In</Button>
  </CardContent>
</Card>`}
              language="tsx"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Pricing Card */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Pricing Card</h2>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <Card className="max-w-sm mx-auto bg-card/50 border-border relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary">Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro Plan</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<Card className="max-w-sm relative overflow-hidden">
  <div className="absolute top-4 right-4">
    <Badge>Popular</Badge>
  </div>
  <CardHeader>
    <CardTitle>Pro Plan</CardTitle>
    <CardDescription>For growing businesses</CardDescription>
    <div className="pt-4">
      <span className="text-4xl font-bold">$29</span>
      <span className="text-muted-foreground">/month</span>
    </div>
  </CardHeader>
  <CardContent className="space-y-4">
    <ul className="space-y-2 text-sm">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          {feature}
        </li>
      ))}
    </ul>
    <Button className="w-full">Get Started</Button>
  </CardContent>
</Card>`}
              language="tsx"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Settings Panel */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Settings Panel</h2>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <Card className="max-w-lg mx-auto bg-card/50 border-border">
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                    <Switch />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<Card className="max-w-lg">
  <CardHeader>
    <CardTitle>Notification Settings</CardTitle>
    <CardDescription>Manage how you receive notifications</CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
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
        <Switch />
      </div>
    ))}
  </CardContent>
</Card>`}
              language="tsx"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* User Profile */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">User Profile Card</h2>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <Card className="max-w-sm mx-auto bg-card/50 border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/professional-woman-portrait.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-semibold">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">Senior Developer</p>
                  <div className="mt-4 flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
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
                  <Button className="mt-6 w-full">Follow</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <CodeBlock
              code={`<Card className="max-w-sm">
  <CardContent className="pt-6">
    <div className="flex flex-col items-center text-center">
      <Avatar className="h-20 w-20">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <h3 className="mt-4 text-lg font-semibold">Jane Doe</h3>
      <p className="text-sm text-muted-foreground">Senior Developer</p>
      <div className="mt-4 flex gap-2">
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">TypeScript</Badge>
      </div>
      <div className="mt-6 flex gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">128</p>
          <p className="text-xs text-muted-foreground">Projects</p>
        </div>
        {/* ... more stats */}
      </div>
      <Button className="mt-6 w-full">Follow</Button>
    </div>
  </CardContent>
</Card>`}
              language="tsx"
            />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
