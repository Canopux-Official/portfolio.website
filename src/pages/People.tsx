import PageWrapper from "@/components/PageWrapper";
import PeopleSection from "@/components/PeopleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEO from "@/components/SEO";

const People = () => (
  <PageWrapper showSaturn>
    <SEO title="People | Canopux" description="Canopux is built by a small, focused group of builders." />
    <div className="pt-24">
      <PeopleSection />
      <TestimonialsSection />

      {/* Closing */}
      <section className="py-16" style={{ backgroundColor: 'rgba(11, 15, 20, 0.85)' }}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground font-normal">
            We collaborate with specialists when the work demands it.
          </p>
        </div>
      </section>
    </div>
  </PageWrapper>
);

export default People;
