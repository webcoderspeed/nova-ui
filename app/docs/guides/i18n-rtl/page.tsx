"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { NovaCard as Card, NovaCardContent as CardContent } from "@/components/nova"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function I18nRtlPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/guides" className="hover:text-foreground">
          Guides
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">i18n & RTL</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Internationalization & RTL Support</h1>
        <p className="text-lg text-muted-foreground">
          Nova.UI is built with internationalization in mind, supporting both LTR and RTL layouts out of the box. Learn
          how to implement multi-language support in your application.
        </p>
      </div>

      {/* Setup next-intl */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setting Up next-intl</h2>
        <p className="text-muted-foreground">
          We recommend using <code className="text-xs bg-accent px-1.5 py-0.5 rounded">next-intl</code> for
          internationalization. Install it first:
        </p>
        <CodeBlock code={`npm install next-intl`} language="bash" />

        <h3 className="text-lg font-medium mt-6">1. Create translation files</h3>
        <CodeBlock
          code={`// messages/en.json
{
  "common": {
    "welcome": "Welcome",
    "submit": "Submit",
    "cancel": "Cancel"
  },
  "hero": {
    "title": "Build Beautiful UIs",
    "description": "A modern component library for React"
  }
}

// messages/ar.json
{
  "common": {
    "welcome": "مرحباً",
    "submit": "إرسال",
    "cancel": "إلغاء"
  },
  "hero": {
    "title": "أنشئ واجهات جميلة",
    "description": "مكتبة مكونات حديثة لـ React"
  }
}`}
          language="json"
        />

        <h3 className="text-lg font-medium mt-6">2. Configure middleware</h3>
        <CodeBlock
          code={`// middleware.ts
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ar', 'he', 'fa'],
  defaultLocale: 'en'
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}`}
          language="tsx"
        />

        <h3 className="text-lg font-medium mt-6">3. Use translations</h3>
        <CodeBlock
          code={`import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')
  
  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </section>
  )
}`}
          language="tsx"
        />
      </section>

      {/* RTL Support */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">RTL Support</h2>
        <p className="text-muted-foreground">
          Nova.UI components automatically adapt to RTL layouts. Set the{" "}
          <code className="text-xs bg-accent px-1.5 py-0.5 rounded">dir</code> attribute on your HTML element:
        </p>
        <CodeBlock
          code={`// app/[locale]/layout.tsx
import { getLocale } from 'next-intl/server'

const rtlLocales = ['ar', 'he', 'fa']

export default async function LocaleLayout({ children }) {
  const locale = await getLocale()
  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr'
  
  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Tailwind RTL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tailwind RTL Utilities</h2>
        <p className="text-muted-foreground">Use Tailwind&apos;s logical properties and RTL modifiers:</p>
        <CodeBlock
          code={`// Use logical properties instead of physical
<div className="ms-4">    {/* margin-inline-start (replaces ml-4) */}
<div className="me-4">    {/* margin-inline-end (replaces mr-4) */}
<div className="ps-4">    {/* padding-inline-start */}
<div className="pe-4">    {/* padding-inline-end */}
<div className="start-0"> {/* inset-inline-start (replaces left-0) */}
<div className="end-0">   {/* inset-inline-end (replaces right-0) */}

// Or use RTL modifier for specific overrides
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  Moves to opposite side in RTL
</div>`}
          language="tsx"
        />
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="grid gap-3">
          {[
            { tip: "Use logical properties", desc: "Prefer ms-/me-/ps-/pe- over ml-/mr-/pl-/pr-" },
            { tip: "Test with real content", desc: "Arabic and Hebrew text behave differently than placeholder" },
            { tip: "Watch for icons", desc: "Some icons may need to be mirrored in RTL (arrows, etc.)" },
            { tip: "Number formatting", desc: "Use Intl.NumberFormat for locale-aware number display" },
          ].map((item) => (
            <Card key={item.tip} className="bg-card/50 border-border">
              <CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">{item.tip}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
