import PageWrapper from "@/components/PageWrapper";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => (
  <PageWrapper>
    <SEO title="Privacy Policy | Canopux" description="Canopux privacy policy — how we handle your data." />
    <div className="pt-24">
      <section className="py-24" style={{ backgroundColor: 'rgba(11, 15, 20, 0.75)' }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-normal mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed font-normal text-sm">
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly, such as your name, email address, and project details when you contact us through our website.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, provide our services, and improve our website experience.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">3. Data Sharing</h2>
              <p>We do not sell or share your personal information with third parties, except as necessary to provide our services or as required by law.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">4. Data Security</h2>
              <p>We take reasonable measures to protect your information from unauthorized access, alteration, or destruction.</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground mb-3">5. Contact</h2>
              <p>If you have questions about this privacy policy, please contact us at <a href="mailto:canopus.incglobe@gmail.com" className="text-primary hover:text-primary/80 transition-colors">canopus.incglobe@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageWrapper>
);

export default PrivacyPolicy;
