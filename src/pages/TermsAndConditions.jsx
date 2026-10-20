
import LegalPageLayout from "../components/legal/LegalPageLayout";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of These Terms",
    paragraphs: [
      "Welcome to the website of Be The Change Foundation, available at https://bethechange.org.in/. These Terms and Conditions govern your access to and use of this website and its publicly available content.",
      "By accessing or using the website, you agree to these terms. If you do not agree, please discontinue using the website.",
    ],
  },
  {
    id: "about-the-website",
    title: "About the Website",
    paragraphs: [
      "The website provides information about the foundation, its areas of work, initiatives, activities, announcements, and ways to contact or engage with the organisation.",
      "Website content is provided for general information. Programme details, schedules, announcements, eligibility criteria, and other information may change as activities develop. Where a specific programme or application has separate rules, those rules may also apply.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    paragraphs: [
      "You agree to use the website lawfully and responsibly. You must not use the website in a way that interferes with its operation, compromises its security, or infringes the rights of the foundation or other people.",
    ],
    bullets: [
      "Do not attempt unauthorised access to the website, its systems, accounts, or data.",
      "Do not knowingly introduce malware, malicious code, or content intended to damage or disrupt the website.",
      "Do not use the website to engage in fraud, impersonation, harassment, unlawful activity, or infringement of another person's rights.",
      "Do not submit knowingly false, misleading, abusive, defamatory, or unlawful information through website forms.",
      "Do not systematically copy, scrape, republish, or exploit website material in a way that violates these terms or applicable law.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, website content—including text, branding, logos, graphics, photographs, videos, documents, and other materials—is owned by Be The Change Foundation or used with permission from its respective rights holders.",
      "You may access and view publicly available content for personal, informational, and other lawful purposes. This does not transfer ownership or grant permission to commercially reuse, substantially reproduce, modify, distribute, or republish protected material.",
      "You must obtain permission from the relevant rights holder before using protected material when permission is required by law. Third-party names, logos, and materials remain the property of their respective owners.",
    ],
  },
  {
    id: "forms-and-submissions",
    title: "Contact Forms and Submissions",
    paragraphs: [
      "When submitting an enquiry, application, or other information through a website form, you are responsible for ensuring that the information you provide is accurate to the best of your knowledge and that you are authorised to provide it.",
      "Please submit only information relevant to the form's purpose. Do not include passwords, payment card details, or other sensitive information in general enquiries.",
      "Submitting a form does not guarantee acceptance into a programme, selection for an initiative, a donation outcome, or a response within a particular timeframe. Each request may need to be reviewed by the foundation.",
      "Information submitted through the website is handled in accordance with our Privacy Policy. Contact forms may rely on third-party delivery services, whose availability and processing are outside the foundation's complete control.",
    ],
  },
  {
    id: "donations-and-payments",
    title: "Donations and Payments",
    paragraphs: [
      "Where the website links to a donation or payment service, the transaction may be processed by an independent third-party provider. The provider's terms, payment procedures, privacy practices, and applicable transaction conditions will apply to the services it operates.",
      "Please review the relevant provider's information before making a donation or payment, and retain any confirmation or receipt supplied to you.",
      "Information on this website about the foundation's activities or impact is not, by itself, a guarantee of a particular outcome from any donation. For questions about a specific donation, please use the contact details provided by the foundation or the relevant payment provider.",
    ],
  },
  {
    id: "third-party-links",
    title: "External Links and Services",
    paragraphs: [
      "The website may link to third-party websites and services, including social media platforms, maps, educational initiatives, partner websites, and payment services. These links are provided for convenience or additional information.",
      "The foundation does not control every external website's content, availability, security, or privacy practices and is not automatically responsible for changes made by independent operators. Visiting an external website is subject to that provider's terms and policies.",
      "A link does not necessarily imply endorsement, sponsorship, or a formal partnership unless the website expressly states otherwise.",
    ],
  },
  {
    id: "availability-and-accuracy",
    title: "Website Availability and Accuracy",
    paragraphs: [
      "We make reasonable efforts to keep website information useful and current. However, we do not guarantee that every page, document, link, or announcement will always be complete, accurate, available, or free of errors.",
      "Content may be updated, corrected, temporarily unavailable, or removed without prior notice. We may also modify or discontinue website features where necessary for maintenance, security, operational, or other legitimate reasons.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    paragraphs: [
      "To the extent permitted by applicable law, the website and its content are provided on an 'as available' basis without a guarantee that the website will always operate without interruption or that all published material will be error-free.",
      "Information about initiatives, activities, opportunities, and programmes is general in nature unless a specific page or written communication expressly states otherwise. You should confirm important details with the foundation before relying on them.",
      "Nothing in these terms excludes or limits a liability or legal protection that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, the foundation will not be responsible for losses arising from your inability to access the website, your reliance on information that is incomplete or outdated, or events attributable to independent third-party websites or services.",
      "This provision does not exclude or limit liability where doing so would be prohibited by law. Your statutory rights, where applicable, remain unaffected.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    paragraphs: [
      "Your use of website forms and the handling of information you submit are also governed by our Privacy Policy. Please read that policy to understand how submitted information may be collected, used, and processed.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    paragraphs: [
      "We may revise these Terms and Conditions when website features, operations, or applicable requirements change. The latest version will be published on this page with an updated date.",
      "Your continued use of the website after revised terms are published indicates your acceptance of those changes to the extent permitted by applicable law. If you do not agree with revised terms, you should stop using the website.",
    ],
  },
  {
    id: "governing-law",
    title: "Applicable Law",
    paragraphs: [
      "These terms are intended to be interpreted in accordance with applicable laws of India. Any dispute relating to the website or these terms will be subject to the jurisdiction of the courts or other authorities competent under applicable law.",
      "This section does not remove any mandatory rights or protections that apply to a user under relevant law.",
    ],
    note:
      "The foundation should have this section reviewed by its legal adviser before publication to confirm the appropriate governing-law and jurisdiction wording.",
  },
  {
    id: "contact",
    title: "Contact the Foundation",
    paragraphs: [
      "If you have questions about these Terms and Conditions or the use of this website, please contact Be The Change Foundation using the details below.",
    ],
    bullets: [
      "Address: Maruti Temple Road, At/Po - Khandala, Tal. - Shrirampur, Dist. - Ahmednagar, Maharashtra, Pin Code - 413709.",
      "Phone: +91 9067498721.",
      "Website: https://bethechange.org.in/",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      eyebrow="Terms of website use"
      description="These terms explain the conditions for accessing and using the Be The Change Foundation website and its publicly available content."
      lastUpdated="20 October 2026"
      sections={sections}
    />
  );
};

export default TermsAndConditions;
