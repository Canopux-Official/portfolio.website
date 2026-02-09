import PageWrapper from "@/components/PageWrapper";
import ApproachSection from "@/components/ApproachSection";
import ProcessSection from "@/components/ProcessSection";
import SEO from "@/components/SEO";

const HowWeWork = () => (
  <PageWrapper showSaturn>
    <SEO title="How We Work | Canopux" description="We build fundamentals, not trends. Every project is a partnership." />
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: 'rgba(11, 15, 20, 0.75)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Approach</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              How we work
            </h1>
            <div className="space-y-3 text-muted-foreground text-lg leading-relaxed font-normal">
              <p>We build fundamentals, not trends.</p>
              <p>Every project is a partnership.</p>
              <p>We care about outcomes, not just deliverables.</p>
            </div>
          </div>
        </div>
      </section>

      <ApproachSection />
      <ProcessSection />

      {/* Closing */}
      <section className="py-24" style={{ backgroundColor: 'rgba(11, 15, 20, 0.85)' }}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            We build things meant to last.
          </p>
        </div>
      </section>
    </div>
  </PageWrapper>
);

export default HowWeWork;
