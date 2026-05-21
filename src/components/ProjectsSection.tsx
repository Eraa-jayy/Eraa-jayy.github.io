import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Healthify - Personal Healthcare Monitoring System (Group Project)",
    description:
      "Healthify is a web-based system that helps users store, track, and analyze their health data in one place. It provides visual insights, medication reminders, and secure data sharing with doctors to improve personal healthcare management.",
    tech: [
      "React.js / Tailwind CSS",
      "Java / SpringBoot",
      "MySQL",
      "REST APIs",
    ],
    github: "https://github.com/IndikaMadhushan/Healthify-FrontEnd",
    demo: "#",
  },
  {
    title: "Police Information Management System (Group Project)",
    description:
      "A centralized digital platform that manages police records and enables the public to submit entries, request reports, and apply for services like firearm permits online, improving accessibility and efficiency.",
    tech: ["C#", ".NET", "MySQL"],
    github: "https://github.com/IndikaMadhushan/Police-info-management-System",
    demo: "#",
  },

  {
    title: "DineMate - Restaurant Point of Sale System",
    description:
      "A modern, responsive Restaurant Point of Sale (POS) system built using Next.js, designed to manage orders, billing, and restaurant operations efficiently.",
    tech: ["React.js / Tailwind CSS", "Next.js", "MongoDB"],
    github: "https://github.com/Eraa-jayy/Bakery-POS.git",
    demo: "#",
  },

  {
    title: "InTime - Smart Attendance Tracking System",
    description:
      "A Face Recognition Attendance System is a full-stack application that automates student attendance using Python-based face recognition for real-time identification, combined with a MERN stack web app for user management, authentication, and attendance tracking, with data stored in MongoDB Atlas and a TailwindCSS-based admin dashboard.",
    tech: ["React.js / Tailwind CSS", "Python Face API", "MongoDB"],
    github: "https://github.com/Eraa-jayy/Text-to-Speech-Converter",
  },
  {
    title: "Text-to-Speech Converter",
    description:
      "A JavaScript Text-to-Speech Converter is a web tool that converts written text into spoken audio using the Web Speech API. It allows users to input text and hear it instantly in a selected voice, making web content more interactive and accessible.",
    tech: ["HTML/CSS", "JavaScript", "Web Speech API"],
    github: "https://github.com/Eraa-jayy/Text-to-Speech-Converter",
    demo: "https://text-to-speech-converter-murex.vercel.app/",
  },
  // {
  //   title: "Eranda Jayawardana - Personal Portfolio Website",
  //   description:
  //     "A modern, responsive personal portfolio built with React and TypeScript showcasing projects and skills.",
  //   tech: ["React.js / Tailwind CSS", "TypeScript"],
  //   github: "https://github.com/Eraa-jayy/EraaJayyPortfolio.git",
  //   demo: "https://erandajayawardana.vercel.app/",
  // },
  // {
  //   title: "DineMate - Restaurant Point of Sale System",
  //   description:
  //   "A modern, responsive Restaurant Point of Sale (POS) system built using Next.js, designed to manage orders, billing, and restaurant operations efficiently.",
  //   tech: ["React.js / Tailwind CSS", "Next.js", "MongoDB"],
  //   github: "#",
  //   demo: "#",
  // },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
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
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
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
