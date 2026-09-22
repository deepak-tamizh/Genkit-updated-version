import { LegalLayout } from "../components/LegalLayout";

const SECTIONS = [
  {
    id: "introduction",
    heading: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how Genkit (\"we\", \"us\", or \"our\") collects, uses, and protects information when you visit our website or engage our services. By using this site, you agree to the practices described below.",
    ],
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    paragraphs: [
      "We collect information in two general ways: information you provide directly, and information collected automatically when you use our site.",
    ],
    list: [
      "Information you provide: name, company, email address, phone number, project details, budget, and any files you choose to upload through our Contact or Request a Quote forms.",
      "Information collected automatically: IP address, browser type, device type, pages visited, and general usage patterns, typically gathered through cookies and analytics tools.",
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Your Information",
    paragraphs: [
      "We use the information we collect to respond to inquiries and quote requests, deliver and improve our services, communicate with current and prospective clients, and understand how visitors use our website so we can improve it.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and Tracking Technologies",
    paragraphs: [
      "Our website uses cookies and similar technologies to support core functionality and to understand site usage. For details on the specific types of cookies we use and how to manage them, see our Cookie Policy.",
    ],
  },
  {
    id: "sharing",
    heading: "How We Share Your Information",
    paragraphs: [
      "We do not sell your personal information. We may share information with trusted third-party service providers who help us operate our website and deliver our services — for example, form-processing and email-delivery providers, hosting providers, and analytics tools — solely for the purpose of performing those services on our behalf.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    paragraphs: [
      "We retain personal information only as long as necessary to fulfill the purposes described in this policy, or as required by law, after which it is securely deleted or anonymized.",
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    paragraphs: [
      "We use reasonable administrative and technical safeguards to protect the information we collect. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, or restrict the use of your personal information, or to receive a copy of it in a portable format. To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    paragraphs: [
      "Our website and services are not directed at children, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    paragraphs: [
      "Our website may contain links to third-party sites, including client project demos and social media. We are not responsible for the privacy practices of those third parties, and we encourage you to review their policies separately.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated \"Last updated\" date.",
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how your information is handled, please reach out through our Contact page.",
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <LegalLayout
      pageTitle="Privacy Policy"
      heroTitle="Privacy Policy"
      lastUpdated="July 1, 2026"
      sections={SECTIONS}
    />
  );
}
