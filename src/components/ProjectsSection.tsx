import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech?: string;
  status: "Completed" | "Cooking";
}

const projects: Project[] = [
  {
    name: "Project Env / Shuddi AI",
    description: "",
    status: "Cooking",
  },
  {
    name: "IndoCrypt 2025",
    description: "Official website built for IndoCrypt 2025, focused on clarity, performance, and accessibility.",
    status: "Completed",
  },
  {
    name: "ArogSphere",
    description: "AI-powered healthcare platform for medicine price comparison, disease prediction, and smarter treatment decisions.",
    tech: "MERN Stack, AI, Cloud",
    status: "Completed",
  },
  {
    name: "Beatyx",
    description: "A full-stack music streaming platform focused on smooth playback and user experience.",
    tech: "MERN Stack",
    status: "Completed",
  },
  {
    name: "ATS (Applicant Tracking System)",
    description: "AI-powered resume screening with ATS scores, keyword insights, and smart job matching.",
    tech: "NextJS, Flask, Prisma",
    status: "Completed",
  },
  {
    name: "TechXpert",
    description: "A structured learning platform for tech skills, quizzes, and certifications.",
    tech: "MERN Stack",
    status: "Completed",
  },
  {
    name: "Trend",
    description: "An e-commerce platform built for fashion brands with secure checkout.",
    tech: "MERN Stack",
    status: "Completed",
  },
  {
    name: "CreatorConnect",
    description: "A creator platform for audience engagement and monetization with secure payments.",
    tech: "MERN Stack, Razorpay",
    status: "Completed",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary relative">
      {/* Saturn Background continuation */}
      <div className="saturn-background opacity-50">
        <div className="saturn-glow" style={{ top: '20%' }} />
        <div className="saturn-ring" style={{ top: '30%' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary font-medium mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of things we've built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full ${
                    project.status === "Cooking"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              {project.description && (
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
              )}
              {project.tech && (
                <p className="text-xs text-muted-foreground/70">
                  {project.tech}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
