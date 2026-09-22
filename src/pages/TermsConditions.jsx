import { LegalLayout } from "../components/LegalLayout";

const SECTIONS = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing this website or engaging Genkit (\"we\", \"us\", or \"our\") for services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
    ],
  },
  {
    id: "services",
    heading: "Services Description",
    paragraphs: [
      "We provide website design, development, and related digital services as described on our Service and Pricing pages. Specific project scope, deliverables, and pricing for any engagement are agreed upon separately in a project proposal or quote.",
    ],
  },
  {
    id: "use-of-website",
    heading: "Use of Website",
    paragraphs: [
      "You agree to use this website only for lawful purposes and not to attempt to interfere with its normal operation, security, or availability.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    paragraphs: [
      "All content on this website — including text, graphics, logos, and code — is the property of Genkit or its licensors and is protected by applicable intellectual property laws, unless otherwise stated.",
      "Upon full payment for a completed project, ownership of the final delivered website transfers to the client, except for any third-party assets, licensed tools, or pre-existing Genkit frameworks used in its construction, which remain licensed for the client's use rather than transferred outright.",
    ],
  },
  {
    id: "payments",
    heading: "Payments and Fees",
    paragraphs: [
      "Project pricing is quoted individually based on scope, as outlined on our Pricing page or in a custom proposal. Payment schedules, typically structured around project milestones, are agreed upon before work begins.",
    ],
  },
  {
    id: "timelines",
    heading: "Project Timelines and Delivery",
    paragraphs: [
      "Estimated timelines are provided in good faith based on the agreed scope. Timelines may be affected by delays in client feedback, content delivery, or approvals, and we will communicate any impact on the schedule as early as possible.",
    ],
  },
  {
    id: "client-responsibilities",
    heading: "Client Responsibilities",
    paragraphs: [
      "Clients are responsible for providing timely feedback, necessary content and assets, and any required access to third-party accounts or services needed to complete the project.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Genkit is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability for any claim related to a project is limited to the amount paid for that specific project.",
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    paragraphs: [
      "Either party may terminate an ongoing project engagement in accordance with the terms outlined in the relevant project agreement. Work completed up to the point of termination will be billed according to the agreed payment schedule.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    paragraphs: [
      "These terms are governed by the laws of the jurisdiction in which Genkit operates, without regard to conflict-of-law principles.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about these Terms & Conditions, please reach out through our Contact page.",
    ],
  },
];

export function TermsConditions() {
  return (
    <LegalLayout
      pageTitle="Terms & Conditions"
      heroTitle="Terms & Conditions"
      lastUpdated="July 1, 2026"
      sections={SECTIONS}
    />
  );
}
