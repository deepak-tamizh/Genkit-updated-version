import { LegalLayout } from "../components/LegalLayout";

const SECTIONS = [
  {
    id: "overview",
    heading: "Overview",
    paragraphs: [
      "This Refund Policy explains when and how refunds may be issued for services provided by Genkit. Because our work is custom and project-based rather than a one-size-fits-all product, refund eligibility depends on how much work has been completed at the time of a request.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility for Refunds",
    paragraphs: [
      "Refund eligibility is based on project milestones agreed to at the start of the engagement.",
    ],
    list: [
      "Before work begins: Deposits are generally refundable, minus any costs already incurred (e.g. licensing, third-party tools purchased on your behalf).",
      "After work has started but before the first milestone is delivered: A partial refund may be issued, reflecting work already completed.",
      "After a milestone has been delivered and approved: Payment for that milestone is considered earned and is non-refundable.",
    ],
  },
  {
    id: "non-refundable",
    heading: "Non-Refundable Circumstances",
    paragraphs: [
      "The following are generally not eligible for a refund:",
    ],
    list: [
      "Completed and approved project milestones",
      "Third-party costs already paid on your behalf (domains, licenses, stock assets, hosting fees)",
      "Custom work delivered as specified in the agreed project brief, even if you later change your mind about the direction",
      "Delays caused by lack of client feedback, content, or approvals",
    ],
  },
  {
    id: "how-to-request",
    heading: "How to Request a Refund",
    paragraphs: [
      "To request a refund, contact us with your project details and the reason for the request. We review each request individually and will respond with a decision and, where applicable, next steps.",
    ],
  },
  {
    id: "processing-time",
    heading: "Processing Time",
    paragraphs: [
      "Approved refunds are typically processed within 7–14 business days, returned via the original payment method where possible.",
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Refund Policy or believe you're eligible for a refund, please reach out through our Contact page.",
    ],
  },
];

export function RefundPolicy() {
  return (
    <LegalLayout
      pageTitle="Refund Policy"
      heroTitle="Refund Policy"
      lastUpdated="July 1, 2026"
      sections={SECTIONS}
    />
  );
}
