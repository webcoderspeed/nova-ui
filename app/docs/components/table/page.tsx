"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
]

export default function TablePage() {
  return (
    <ComponentDocTemplate
      title="Table"
      description="A responsive table component. Displays tabular data with headers, rows, and optional captions."
      preview={
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
      installCommand="npx nova-ui@latest add table"
      importCode={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`}
      usageCode={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function MyComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`}
      props={[{ name: "className", type: "string", description: "Additional CSS classes" }]}
      examples={[
        {
          title: "Striped Rows",
          description: "Table with alternating row colors.",
          code: `<Table>
  <TableBody>
    {data.map((row, i) => (
      <TableRow key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
        <TableCell>{row.name}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
          preview: (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-muted/50">
                  <TableCell>Alice</TableCell>
                  <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob</TableCell>
                  <TableCell>Designer</TableCell>
                </TableRow>
                <TableRow className="bg-muted/50">
                  <TableCell>Charlie</TableCell>
                  <TableCell>Manager</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Pagination", href: "/docs/components/pagination" },
        { name: "Scroll Area", href: "/docs/components/scroll-area" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/table.tsx"
    />
  )
}
