import { LegalLayout } from "../components/LegalLayout";

const SECTIONS = [
  {
    id: "what-are-cookies",
    heading: "What Are Cookies",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help the site remember information about your visit, which can make your next visit easier and the site more useful to you.",
    ],
  },
  {
    id: "how-we-use-cookies",
    heading: "How We Use Cookies",
    paragraphs: [
      "We use cookies to keep the website functioning correctly, to understand how visitors use our site, and to remember basic preferences. We do not use cookies to sell your personal information.",
    ],
  },
  {
    id: "types-of-cookies",
    heading: "Types of Cookies We Use",
    list: [
      "Essential cookies: Required for core site functionality, such as navigation and form submissions. The site cannot function properly without these.",
      "Analytics cookies: Help us understand how visitors interact with our site (e.g. which pages are viewed most), so we can improve it over time.",
      "Preference cookies: Remember choices you've made, such as menu state, to make your next visit more convenient.",
    ],
  },
  {
    id: "third-party-cookies",
    heading: "Third-Party Cookies",
    paragraphs: [
      "Some cookies on our site may be set by third-party services we use, such as analytics providers or embedded content. These third parties have their own privacy and cookie policies, which we encourage you to review.",
    ],
  },
  {
    id: "managing-cookies",
    heading: "Managing Cookies",
    paragraphs: [
      "Most browsers let you view, manage, and delete cookies through their settings. Blocking or deleting cookies may affect the functionality of this and other websites you visit.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated \"Last updated\" date.",
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Cookie Policy, please reach out through our Contact page.",
    ],
  },
];

export function CookiePolicy() {
  return (
    <LegalLayout
      pageTitle="Cookie Policy"
      heroTitle="Cookie Policy"
      lastUpdated="July 1, 2026"
      sections={SECTIONS}
    />
  );
}
