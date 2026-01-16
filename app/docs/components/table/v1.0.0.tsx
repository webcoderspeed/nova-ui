"use client"

import * as React from "react"
import {
  NovaTable,
  NovaTableBody,
  NovaTableCaption,
  NovaTableCell,
  NovaTableHead,
  NovaTableHeader,
  NovaTableRow,
  NovaTableFooter,
} from "@/components/nova/nova-table"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
]

export default function TableDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Table"
      description="A responsive table component."
      whenToUse={[
        "To display rows of data.",
        "When you need to compare multiple items.",
        "To list tabular information."
      ]}
      hints={[
        { type: "info", content: "Supports `bordered`, `striped`, and `clean` variants." },
        { type: "info", content: "Has `compact` and `spacious` density options." },
        { type: "info", content: "Built-in scroll area for responsiveness." }
      ]}
      preview={
        <div className="w-full">
          <NovaTable>
            <NovaTableCaption>A list of your recent invoices.</NovaTableCaption>
            <NovaTableHeader>
              <NovaTableRow>
                <NovaTableHead className="w-[100px]">Invoice</NovaTableHead>
                <NovaTableHead>Status</NovaTableHead>
                <NovaTableHead>Method</NovaTableHead>
                <NovaTableHead className="text-right">Amount</NovaTableHead>
              </NovaTableRow>
            </NovaTableHeader>
            <NovaTableBody>
              {invoices.map((invoice) => (
                <NovaTableRow key={invoice.invoice}>
                  <NovaTableCell className="font-medium">{invoice.invoice}</NovaTableCell>
                  <NovaTableCell>{invoice.paymentStatus}</NovaTableCell>
                  <NovaTableCell>{invoice.paymentMethod}</NovaTableCell>
                  <NovaTableCell className="text-right">{invoice.totalAmount}</NovaTableCell>
                </NovaTableRow>
              ))}
            </NovaTableBody>
            <NovaTableFooter>
              <NovaTableRow>
                <NovaTableCell colSpan={3}>Total</NovaTableCell>
                <NovaTableCell className="text-right">$2,500.00</NovaTableCell>
              </NovaTableRow>
            </NovaTableFooter>
          </NovaTable>
        </div>
      }
      installCommand="npx shadcn@latest add table"
      importCode={`import {
  NovaTable,
  NovaTableBody,
  NovaTableCaption,
  NovaTableCell,
  NovaTableHead,
  NovaTableHeader,
  NovaTableRow,
} from "@/components/nova/nova-table"`}
      usageCode={`<NovaTable>
  <NovaTableHeader>
    <NovaTableRow>
      <NovaTableHead>Invoice</NovaTableHead>
      <NovaTableHead>Status</NovaTableHead>
      <NovaTableHead>Amount</NovaTableHead>
    </NovaTableRow>
  </NovaTableHeader>
  <NovaTableBody>
    <NovaTableRow>
      <NovaTableCell>INV001</NovaTableCell>
      <NovaTableCell>Paid</NovaTableCell>
      <NovaTableCell>$250.00</NovaTableCell>
    </NovaTableRow>
  </NovaTableBody>
</NovaTable>`}
      props={[
        {
          name: "variant",
          type: '"default" | "bordered" | "striped" | "clean"',
          defaultValue: '"default"',
          description: "Visual style of the table."
        },
        {
          name: "density",
          type: '"default" | "compact" | "spacious"',
          defaultValue: '"default"',
          description: "Spacing of table cells."
        }
      ]}
      examples={[
        {
          title: "Striped Variant",
          description: "Table with striped rows.",
          code: `<NovaTable variant="striped">
  <NovaTableHeader>
    <NovaTableRow>
      <NovaTableHead>Invoice</NovaTableHead>
      <NovaTableHead>Status</NovaTableHead>
    </NovaTableRow>
  </NovaTableHeader>
  <NovaTableBody>
    {invoices.map((invoice) => (
      <NovaTableRow key={invoice.invoice}>
        <NovaTableCell>{invoice.invoice}</NovaTableCell>
        <NovaTableCell>{invoice.paymentStatus}</NovaTableCell>
      </NovaTableRow>
    ))}
  </NovaTableBody>
</NovaTable>`,
          preview: (
            <div className="w-full">
              <NovaTable variant="striped">
                <NovaTableHeader>
                  <NovaTableRow>
                    <NovaTableHead>Invoice</NovaTableHead>
                    <NovaTableHead>Status</NovaTableHead>
                  </NovaTableRow>
                </NovaTableHeader>
                <NovaTableBody>
                  {invoices.map((invoice) => (
                    <NovaTableRow key={invoice.invoice}>
                      <NovaTableCell>{invoice.invoice}</NovaTableCell>
                      <NovaTableCell>{invoice.paymentStatus}</NovaTableCell>
                    </NovaTableRow>
                  ))}
                </NovaTableBody>
              </NovaTable>
            </div>
          )
        }
      ]}
    />
  )
}
