"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CardDocsV1() {
  return (
    <ComponentDocTemplate
      title="Card"
      description="Displays a card with header, content, and footer. Basic version with essential structure."
      preview={
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content goes here.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/nova-ui/card"`}
      usageCode={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/nova-ui/card"

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`}
      props={[
        { name: "className", type: "string", description: "Additional CSS classes for Card" },
        { name: "children", type: "ReactNode", description: "Card content" },
      ]}
      examples={[
        {
          title: "Basic Card",
          description: "A simple card with all sections.",
          code: `<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>View your notifications here.</p>
  </CardContent>
</Card>`,
          preview: (
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>View your notifications here.</p>
              </CardContent>
            </Card>
          ),
        },
      ]}
      relatedComponents={[{ name: "Dialog", href: "/docs/components/dialog" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
