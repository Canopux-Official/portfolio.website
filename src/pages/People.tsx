import PageWrapper from "@/components/PageWrapper";
import PeopleSection from "@/components/PeopleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEO from "@/components/SEO";

const People = () => (
  <PageWrapper>
    <SEO title="People | Canopux" description="Canopux is built by a small, focused group of builders." />
    <div className="pt-24">
      <PeopleSection />
      <TestimonialsSection />
    </div>
  </PageWrapper>
);

export default People;
