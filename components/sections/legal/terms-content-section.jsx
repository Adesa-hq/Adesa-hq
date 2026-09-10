import { LegalDocument } from "@/components/ui/legal-document";

const sections = [
  { id: "agreement", title: "Agreement to terms", content: <p>By accessing or using the ADESA HQ website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.</p> },
  { id: "intellectual-property", title: "Intellectual property", content: <p>The website and its original content, features, and functionality are owned by ADESA HQ and are protected by international copyright, trademark, and other intellectual property laws.</p> },
  { id: "use-license", title: "Use licence", content: <><p>Permission is granted to temporarily view materials on the ADESA HQ website for personal, non-commercial, transitory viewing only. This grants a licence, not a transfer of title. Under this licence you may not:</p><ul className="list-disc space-y-2 pl-5"><li>Modify or copy the materials.</li><li>Use the materials for any commercial purpose.</li><li>Attempt to reverse engineer software contained on the website.</li><li>Remove copyright or other proprietary notations.</li></ul></> },
  { id: "disclaimer", title: "Disclaimer", content: <p>The materials on the ADESA HQ website are provided on an &quot;as is&quot; basis. ADESA HQ makes no warranties, expressed or implied, and disclaims other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p> },
  { id: "limitations", title: "Limitations", content: <p>In no event shall ADESA HQ or its suppliers be liable for damages arising from the use or inability to use materials on the website.</p> },
  { id: "governing-law", title: "Governing law", content: <p>These terms and conditions are governed by and construed in accordance with the laws of Nigeria.</p> },
  { id: "contact", title: "Contact information", content: <p>Questions about these Terms of Service can be directed to the contact address listed below.</p> },
];

export default function TermsContentSection() {
  return <LegalDocument title="Terms of Service" sections={sections} />;
}
