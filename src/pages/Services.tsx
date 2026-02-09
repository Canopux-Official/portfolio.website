import PageWrapper from "@/components/PageWrapper";
import ServicesSection from "@/components/ServicesSection";
import SEO from "@/components/SEO";

const Services = () => (
  <PageWrapper>
    <SEO title="Services | Canopux" description="Web platforms, mobile apps, cloud systems, databases, and more — built for scale." />
    <div className="pt-24">
      <ServicesSection />
    </div>
  </PageWrapper>
);

export default Services;
