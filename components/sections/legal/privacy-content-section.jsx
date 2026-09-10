import { LegalDocument } from "@/components/ui/legal-document";

const sections = [
  { id: "introduction", title: "Introduction", content: <p>ADESA HQ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage with our services.</p> },
  { id: "information-collected", title: "Information we collect", content: <><p>We may collect information in the following ways:</p><ul className="list-disc space-y-2 pl-5"><li>Personal data you voluntarily provide, including name, email, and organisation.</li><li>Automatically collected data, including IP address, browser type, and device information.</li><li>Cookies and related tracking technologies.</li></ul></> },
  { id: "use-of-information", title: "Use of your information", content: <><p>We may use collected information to:</p><ul className="list-disc space-y-2 pl-5"><li>Respond to enquiries and communications.</li><li>Improve our website and services.</li><li>Send administrative information and updates.</li><li>Comply with legal obligations.</li></ul></> },
  { id: "disclosure", title: "Disclosure of your information", content: <p>We do not sell or rent personal information to third parties. We may share information with service providers who assist our operations, or when required by law.</p> },
  { id: "security", title: "Security", content: <p>We implement appropriate technical and organisational measures to protect personal information. However, no electronic transmission or storage method is completely secure.</p> },
  { id: "contact", title: "Contact", content: <p>Questions about this Privacy Policy can be directed to the contact address listed below.</p> },
];

export default function PrivacyContentSection() {
  return <LegalDocument title="Privacy Policy" sections={sections} />;
}
