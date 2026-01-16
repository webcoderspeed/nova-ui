"use client";

import type React from "react";
import Link from "next/link";
import { CodeBlock } from "./code-block"
import {
  NovaButton,
  NovaTabs,
  NovaTabsContent,
  NovaTabsList,
  NovaTabsTrigger,
  NovaBadge,
} from "@/components/nova"
import {
  Check,
  ChevronRight,
  ExternalLink,
  Info,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PropItem {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

interface HintItem {
  type: "info" | "warning" | "danger";
  title?: string;
  content: string;
}

interface ComponentDocProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  installCommand: string;
  importCode: string;
  usageCode: string;
  props: PropItem[];
  whenToUse?: string[];
  hints?: HintItem[];
  examples?: {
    title: string;
    description?: string;
    code: string;
    preview: React.ReactNode;
  }[];
  apiReference?: string;
  relatedComponents?: { name: string; href: string }[];
  sourceLink?: string;
  badgeText?: string;
}

function HintBlock({ hint }: { hint: HintItem }) {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300",
    warning:
      "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300",
    danger:
      "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300",
  };

  const icons = {
    info: Info,
    warning: AlertTriangle,
    danger: AlertCircle,
  };

  const Icon = icons[hint.type];

  return (
    <div
      className={cn("flex gap-3 p-4 rounded-lg border my-4", styles[hint.type])}
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="space-y-1">
        {hint.title && <p className="font-semibold text-sm">{hint.title}</p>}
        <p className="text-sm leading-relaxed opacity-90">{hint.content}</p>
      </div>
    </div>
  );
}


function PreviewContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-background/50 p-8 flex items-center justify-center min-h-[250px] relative overflow-hidden",
        "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]",
        className
      )}
    >
      <div className="relative z-10 w-full flex justify-center">{children}</div>
    </div>
  );
}

export function ComponentDocTemplate({
  title,
  description,
  preview,
  installCommand,
  importCode,
  usageCode,
  props,
  examples,
  relatedComponents,
  sourceLink,
  badgeText,
  whenToUse,
  hints,
}: ComponentDocProps) {
  return (
    <div className="space-y-12 pb-20 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground/80">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href="/docs/components"
          className="hover:text-foreground transition-colors"
        >
          Components
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{title}</span>
        {badgeText && (
          <NovaBadge
            variant="secondary"
            className="ml-2 h-5 text-[10px] font-medium px-1.5"
          >
            {badgeText}
          </NovaBadge>
        )}
      </nav>

      {/* Header */}
      <div className="space-y-6 border-b pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            {title}
          </h1>
          <div className="flex items-center gap-2">
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {description}
        </p>

        {whenToUse && whenToUse.length > 0 && (
          <div className="mt-8 space-y-3">
            <h3 id="when-to-use" className="font-semibold text-foreground flex items-center gap-2 scroll-m-20">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                ?
              </span>
              When to use
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {whenToUse.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hints && hints.map((hint, i) => <HintBlock key={i} hint={hint} />)}
      </div>

      {/* Main Preview & Usage */}
      <section className="space-y-4">
        <NovaTabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 id="preview" className="text-2xl font-semibold tracking-tight scroll-m-20">Preview</h2>
            <NovaTabsList className="grid w-[200px] grid-cols-2">
              <NovaTabsTrigger value="preview">Preview</NovaTabsTrigger>
              <NovaTabsTrigger value="code">Code</NovaTabsTrigger>
            </NovaTabsList>
          </div>
          <NovaTabsContent
            value="preview"
            className="mt-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <PreviewContainer className="min-h-[350px]">
              {preview}
            </PreviewContainer>
          </NovaTabsContent>
          <NovaTabsContent value="code" className="mt-0">
            <CodeBlock code={usageCode} />
          </NovaTabsContent>
        </NovaTabs>
      </section>

      {/* Installation */}
      <section className="space-y-6">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-m-20">Installation</h2>
        <NovaTabs defaultValue="cli" className="w-full">
          <NovaTabsList className="w-auto justify-start bg-transparent p-0 border-b w-full rounded-none h-auto">
            <NovaTabsTrigger
              value="cli"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              CLI
            </NovaTabsTrigger>
            <NovaTabsTrigger
              value="manual"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              Manual
            </NovaTabsTrigger>
          </NovaTabsList>
          <NovaTabsContent value="cli" className="mt-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Run the following command to install:
              </p>
              <div className="relative">
                <CodeBlock code={installCommand} language="bash" />
              </div>
            </div>
          </NovaTabsContent>
          <NovaTabsContent value="manual" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Copy the component source code and add it to your project.
            </p>
            <CodeBlock code={importCode} />
          </NovaTabsContent>
        </NovaTabs>
      </section>

      {/* Examples */}
      {examples && examples.length > 0 && (
        <section className="space-y-8">
          <div className="border-b pb-2">
            <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
          </div>
          {examples.map((example, index) => (
            <div key={index} className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">{example.title}</h3>
                {example.description && (
                  <p className="text-sm text-muted-foreground mt-1.5">
                    {example.description}
                  </p>
                )}
              </div>
              <NovaTabs defaultValue="preview" className="w-full">
                <NovaTabsList className="w-[200px] grid grid-cols-2">
                  <NovaTabsTrigger value="preview">Preview</NovaTabsTrigger>
                  <NovaTabsTrigger value="code">Code</NovaTabsTrigger>
                </NovaTabsList>
                <NovaTabsContent value="preview" className="mt-4">
                  <PreviewContainer>{example.preview}</PreviewContainer>
                </NovaTabsContent>
                <NovaTabsContent value="code" className="mt-4">
                  <CodeBlock code={example.code} />
                </NovaTabsContent>
              </NovaTabs>
            </div>
          ))}
        </section>
      )}

      {/* API Reference */}
      <section className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-semibold tracking-tight scroll-m-20">API Reference</h2>
        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground w-1/4">
                  Prop
                </th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground w-1/4">
                  Type
                </th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground w-1/4">
                  Default
                </th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {props.map((prop) => (
                <tr
                  key={prop.name}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
                        {prop.name}
                      </code>
                      {prop.required && (
                        <NovaBadge
                          variant="destructive"
                          className="text-[10px] h-4 px-1 rounded-sm"
                        >
                          Required
                        </NovaBadge>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <code className="text-muted-foreground font-mono text-xs break-words bg-muted px-1 py-0.5 rounded">
                      {prop.type}
                    </code>
                  </td>
                  <td className="py-4 px-6">
                    {prop.defaultValue ? (
                      <code className="text-muted-foreground font-mono text-xs">
                        {prop.defaultValue}
                      </code>
                    ) : (
                      <span className="text-muted-foreground text-xs italic">
                        -
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-muted-foreground leading-snug">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Components */}
      {relatedComponents && relatedComponents.length > 0 && (
        <section className="space-y-4 pt-8 border-t">
          <h2 className="text-lg font-semibold">Related Components</h2>
          <div className="flex flex-wrap gap-3">
            {relatedComponents.map((comp) => (
              <Link
                key={comp.href}
                href={comp.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-sm hover:shadow-md"
              >
                {comp.name}
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
