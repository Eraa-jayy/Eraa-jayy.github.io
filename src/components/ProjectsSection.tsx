import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hospital Management System",
    description: "A comprehensive system for managing patient records, appointments, and hospital operations with role-based access control.",
    tech: ["Java", "MySQL", "JavaFX"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Console App",
    description: "A console-based e-commerce application featuring product browsing, shopping cart, and order management functionalities.",
    tech: ["C#", ".NET", "SQL Server"],
    github: "#",
    demo: "#",
  },
  {
    title: "Spinner Game App",
    description: "An interactive spinner game application with customizable options, animations, and score tracking.",
    tech: ["JavaScript", "HTML/CSS", "Canvas API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio built with React and TypeScript showcasing projects and skills.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl bg-card border border-border card-hover"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
