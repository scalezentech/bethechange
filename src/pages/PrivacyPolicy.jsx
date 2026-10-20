
import LegalPageLayout from "../components/legal/LegalPageLayout";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Be The Change Foundation respects the privacy of visitors to its website. This Privacy Policy explains what information may be collected when you visit bethechange.org.in, contact us, or use forms available on the website, and how that information may be used.",
      "This policy applies to information collected through this website. It does not automatically apply to websites, applications, or services operated independently by other organisations.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "The information we receive depends on how you interact with our website and which fields you choose or are required to complete.",
    ],
    bullets: [
      "Contact enquiries: your name, email address, mobile number, and the query or message you submit through our Contact Us form.",
      "Other submissions: information you provide through any application, volunteer, programme, partnership, or other form that may be available on the website.",
      "Messages and correspondence: information you include when you communicate with the foundation.",
      "Technical information: our hosting provider or other website service providers may process technical data, such as browser details, device information, IP address, access times, and server logs, as part of operating and protecting the website.",
    ],
    note:
      "Please provide only information relevant to your enquiry. Avoid submitting passwords, payment card details, government identification numbers, or other sensitive information through a general contact form.",
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    paragraphs: [
      "Information submitted through the website may be used for the purposes relevant to the interaction, including:",
    ],
    bullets: [
      "Responding to questions, enquiries, requests, and feedback.",
      "Reviewing applications or requests submitted for foundation activities, where applicable.",
      "Communicating with you about the enquiry or activity you initiated.",
      "Operating, maintaining, securing, and improving the website and its forms.",
      "Identifying misuse, preventing fraudulent or harmful activity, and protecting the website.",
      "Meeting applicable legal requirements or responding to lawful requests when required.",
    ],
    paragraphsExtra: [],
  },
  {
    id: "contact-form-and-email",
    title: "Contact Forms and Email Delivery",
    paragraphs: [
      "The Contact Us form can collect your name, email address, mobile number, and query. The website may use FormSubmit, a third-party form delivery service, to transmit submitted information and forward enquiries to the foundation's designated inbox.",
      "Information sent through this service may be handled by FormSubmit in accordance with its own service terms and privacy practices. Third-party service availability, processing, and delivery are not controlled entirely by the foundation.",
      "Submitting a form does not guarantee an immediate response. Do not use the contact form to send confidential or highly sensitive information.",
    ],
    bullets: [
      "Form delivery service: https://formsubmit.co/",
      "Please confirm that the form displays the correct recipient and that the foundation has completed any required email verification before using it in production.",
    ],
  },
  {
    id: "cookies-and-technical-data",
    title: "Cookies and Technical Data",
    paragraphs: [
      "Our website hosting provider and integrated services may use technical logs, cookies, or similar technologies where enabled. These technologies may support site operation, security, performance, and the functioning of embedded or external services.",
      "The specific cookies and technical records collected depend on the website configuration and the services in use. This policy should be updated if analytics, advertising, tracking, or additional cookie-based services are introduced.",
      "You can manage or restrict cookies through your browser settings. Disabling certain cookies may affect some website features.",
    ],
  },
  {
    id: "sharing-information",
    title: "When Information May Be Shared",
    paragraphs: [
      "The foundation does not intend to sell personal information submitted through its website. Information may be made available when reasonably necessary for the purposes described in this policy.",
    ],
    bullets: [
      "To service providers that help operate the website, hosting, form submissions, or communications.",
      "To authorised foundation personnel who need the information to handle your enquiry or request.",
      "Where disclosure is required by applicable law, a lawful request, or a competent authority.",
      "Where reasonably necessary to protect the website, the foundation, its users, or other people against fraud, misuse, or security risks.",
    ],
    paragraphsExtra: [],
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites and Embedded Services",
    paragraphs: [
      "The website may link to external websites or include third-party features, such as maps, social media links, donation pages, or form delivery services. When you visit or interact with these services, the relevant third party may process information under its own policies.",
      "The foundation does not control the privacy practices or security of independent third-party websites. Please review their policies before sharing information or completing a transaction with them.",
    ],
  },
  {
    id: "retention-and-security",
    title: "Data Retention and Security",
    paragraphs: [
      "Information may be retained for as long as reasonably necessary to respond to an enquiry, manage a request, maintain relevant records, protect the website, or meet applicable legal obligations.",
      "We take reasonable steps appropriate to the website and the information handled to protect against unauthorised access, loss, misuse, or disclosure. However, no website, internet transmission, or electronic storage method can be guaranteed to be completely secure.",
      "Information handled by third-party providers may also be subject to their retention and security practices.",
    ],
  },
  {
    id: "your-choices",
    title: "Your Choices and Requests",
    paragraphs: [
      "You may contact the foundation to ask about personal information you have submitted, request a correction, or ask whether information may be deleted. We may need sufficient details to identify the relevant submission and may be required to retain certain information where applicable law or legitimate recordkeeping needs require it.",
      "We will review requests and respond as reasonably practicable, subject to applicable requirements and the information available to us.",
    ],
    bullets: [
      "Use the Contact Us page to send a privacy-related request.",
      "For general contact, call +91 9067498721.",
    ],
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    paragraphs: [
      "The website is not intended to be a place for submitting unnecessary personal information about children. Parents and guardians should guide children's use of online forms and help ensure that information is shared only when appropriate.",
      "If you believe a child has submitted personal information inappropriately through our website, please contact the foundation so the matter can be reviewed.",
    ],
  },
  {
    id: "policy-changes",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy when website features, services, information-handling practices, or applicable requirements change. Updates will be published on this page and the revised date will be shown at the top.",
      "Please review this page periodically to remain informed about our privacy practices.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact the Foundation",
    paragraphs: [
      "For questions about this Privacy Policy or a request concerning information you submitted through the website, please contact Be The Change Foundation using the details below.",
    ],
    bullets: [
      "Address: Maruti Temple Road, At/Po - Khandala, Tal. - Shrirampur, Dist. - Ahmednagar, Maharashtra, Pin Code - 413709.",
      "Phone: +91 9067498721.",
      "Website: https://bethechange.org.in/",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      eyebrow="Your privacy matters"
      description="Learn how Be The Change Foundation handles information submitted through its website, contact forms, and related online services."
      lastUpdated="20 October 2026"
      sections={sections}
    />
  );
};

export default PrivacyPolicy;
