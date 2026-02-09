import PageWrapper from "@/components/PageWrapper";
import ProjectsSection from "@/components/ProjectsSection";
import SEO from "@/components/SEO";

const Projects = () => (
  <PageWrapper>
    <SEO title="Projects | Canopux" description="A selection of things we've built — web platforms, AI systems, and startup MVPs." />
    <div className="pt-24">
      <ProjectsSection />
    </div>
  </PageWrapper>
);

export default Projects;
