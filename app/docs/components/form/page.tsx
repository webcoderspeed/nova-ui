"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FormPage() {
  return (
    <ComponentDocTemplate
      title="Form"
      description="Building forms with React Hook Form and Zod validation. Provides accessible form controls with error handling."
      preview={
        <form className="space-y-4 w-[350px]">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter username" />
            <p className="text-sm text-muted-foreground">This is your public display name.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      }
      installCommand="npx nova-ui@latest add form"
      importCode={`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"`}
      usageCode={`import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
      props={[
        { name: "control", type: "Control", description: "React Hook Form control object" },
        { name: "name", type: "string", description: "Field name for form registration" },
        { name: "render", type: "function", description: "Render function for the field" },
      ]}
      examples={[
        {
          title: "With Validation",
          description: "Form with Zod schema validation.",
          code: `const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

// Use with useForm and zodResolver`,
          preview: (
            <form className="space-y-4 w-[300px]">
              <div className="space-y-2">
                <Label htmlFor="email2">Email</Label>
                <Input id="email2" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Input", href: "/docs/components/input" },
        { name: "Select", href: "/docs/components/select" },
        { name: "Checkbox", href: "/docs/components/checkbox" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/form.tsx"
    />
  )
}
