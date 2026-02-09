import PageWrapper from "@/components/PageWrapper";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const Contact = () => (
  <PageWrapper>
    <SEO title="Contact | Canopux" description="Got an idea? We're here to help you ship it." />
    <div className="pt-24">
      <ContactSection />
    </div>
  </PageWrapper>
);

export default Contact;
