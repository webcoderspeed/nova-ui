"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CardDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Card"
      description="Displays a card with header, content, and footer. Enhanced with hover effects and better styling options."
      preview={
        <Card className="w-[350px] transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content goes here.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaCard } from "@/nova-ui"

// Or individual components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/nova-ui/card"`}
      usageCode={`import { NovaCard } from "@/nova-ui"

// Using NovaCard wrapper (NEW in v1.1.0)
export function MyCard() {
  return (
    <NovaCard hoverable>
      <NovaCard.Header>
        <NovaCard.Title>Card Title</NovaCard.Title>
        <NovaCard.Description>Card description</NovaCard.Description>
      </NovaCard.Header>
      <NovaCard.Content>
        <p>Content goes here</p>
      </NovaCard.Content>
      <NovaCard.Footer>
        <Button>Action</Button>
      </NovaCard.Footer>
    </NovaCard>
  )
}`}
      props={[
        {
          name: "hoverable",
          type: "boolean",
          default: "false",
          description: "Adds hover shadow effect (NEW in v1.1.0)",
        },
        {
          name: "clickable",
          type: "boolean",
          default: "false",
          description: "Makes entire card clickable (NEW in v1.1.0)",
        },
        { name: "className", type: "string", description: "Additional CSS classes for Card" },
        { name: "children", type: "ReactNode", description: "Card content" },
      ]}
      examples={[
        {
          title: "Hoverable Card",
          description: "Card with hover shadow effect.",
          code: `<NovaCard hoverable>
  <NovaCard.Header>
    <NovaCard.Title>Hover me</NovaCard.Title>
  </NovaCard.Header>
  <NovaCard.Content>
    <p>This card has a hover effect.</p>
  </NovaCard.Content>
</NovaCard>`,
          preview: (
            <Card className="w-[350px] transition-shadow hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Hover me</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This card has a hover effect.</p>
              </CardContent>
            </Card>
          ),
        },
        {
          title: "Card with Actions",
          description: "Card with footer actions.",
          code: `<NovaCard>
  <NovaCard.Header>
    <NovaCard.Title>Confirm Action</NovaCard.Title>
    <NovaCard.Description>Are you sure?</NovaCard.Description>
  </NovaCard.Header>
  <NovaCard.Footer className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </NovaCard.Footer>
</NovaCard>`,
          preview: (
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Confirm Action</CardTitle>
                <CardDescription>Are you sure?</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </CardFooter>
            </Card>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Dialog", href: "/docs/components/dialog" },
        { name: "Glass Card", href: "/docs/nova-extras/glass-card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
