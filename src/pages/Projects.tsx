import PageWrapper from "@/components/PageWrapper";
import ProjectsSection from "@/components/ProjectsSection";
import SEO from "@/components/SEO";

const Projects = () => (
  <PageWrapper showSaturn>
    <SEO title="Projects | Canopux" description="A selection of things we've built — web platforms, AI systems, and startup MVPs." />
    <div className="pt-24">
      <ProjectsSection />

      {/* Closing */}
      <section className="py-16" style={{ backgroundColor: 'rgba(11, 15, 20, 0.85)' }}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground font-normal">
            We focus on fewer projects, done properly.
          </p>
        </div>
      </section>
    </div>
  </PageWrapper>
);

export default Projects;
