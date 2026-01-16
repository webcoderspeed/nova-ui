"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaInput } from "@/components/nova/nova-input"
import {
  NovaForm,
  NovaFormControl,
  NovaFormDescription,
  NovaFormField,
  NovaFormItem,
  NovaFormLabel,
  NovaFormMessage,
} from "@/components/nova/nova-form"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function FormDocsV1() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 code">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Form"
      description="Building forms with React Hook Form and Zod."
      whenToUse={[
        "For complex forms with validation requirements.",
        "When you need robust state management for inputs.",
        "To display validation error messages accessibly."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaForm components include built-in `framer-motion` animations for error messages, providing a smooth user experience when validation fails."
        }
      ]}
      preview={
        <div className="w-full max-w-sm">
          <NovaForm {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <NovaFormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <NovaFormItem>
                    <NovaFormLabel>Username</NovaFormLabel>
                    <NovaFormControl>
                      <NovaInput placeholder="shadcn" {...field} />
                    </NovaFormControl>
                    <NovaFormDescription>
                      This is your public display name.
                    </NovaFormDescription>
                    <NovaFormMessage />
                  </NovaFormItem>
                )}
              />
              <NovaButton type="submit">Submit</NovaButton>
            </form>
          </NovaForm>
        </div>
      }
      installCommand="npx nova-ui@latest add form"
      importCode={`import {
  NovaForm,
  NovaFormControl,
  NovaFormDescription,
  NovaFormField,
  NovaFormItem,
  NovaFormLabel,
  NovaFormMessage,
} from "@/components/nova/nova-form"`}
      usageCode={`"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { NovaButton } from "@/components/nova/nova-button"
import { NovaInput } from "@/components/nova/nova-input"
import {
  NovaForm,
  NovaFormControl,
  NovaFormDescription,
  NovaFormField,
  NovaFormItem,
  NovaFormLabel,
  NovaFormMessage,
} from "@/components/nova/nova-form"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
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
    <NovaForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <NovaFormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <NovaFormItem>
              <NovaFormLabel>Username</NovaFormLabel>
              <NovaFormControl>
                <NovaInput placeholder="shadcn" {...field} />
              </NovaFormControl>
              <NovaFormDescription>
                This is your public display name.
              </NovaFormDescription>
              <NovaFormMessage />
            </NovaFormItem>
          )}
        />
        <NovaButton type="submit">Submit</NovaButton>
      </form>
    </NovaForm>
  )
}`}
      props={[]}
      examples={[]}
    />
  )
}
