import PageWrapper from "@/components/PageWrapper";
import SEO from "@/components/SEO";
const TermsAndConditions = () => <PageWrapper>
    <SEO title="Terms & Conditions | Canopux" description="Canopux terms and conditions of service." />
    <div className="pt-24">
      <section className="py-24" style={{
      backgroundColor: 'rgba(11, 15, 20, 0.75)'
    }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-8">Terms & Conditions</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed font-normal text-sm">
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Canopux website and services, you agree to be bound by these terms and conditions.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">2. Services</h2>
              <p>Canopux provides software development, design, and consulting services. The scope and deliverables of each project are defined through mutual agreement.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">3. Intellectual Property</h2>
              <p>All work delivered to clients becomes their property upon full payment unless otherwise agreed. Canopux retains the right to showcase completed work in its portfolio.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">4. Limitation of Liability</h2>
              <p>Canopux shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">5. Changes to Terms</h2>
              <p>We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">6. Contact</h2>
              <p>connect.canopux@outlook.com<a href="mailto:canopus.incglobe@gmail.com" className="text-primary hover:text-primary/80 transition-colors">canopus.incglobe@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageWrapper>;
export default TermsAndConditions;