import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award, BookOpen } from "lucide-react";

type TimelineItem = {
  icon: any;
  title: string;
  org: string;
  period: string;
  description?: string;
  certifications?: {
    name: string;
    provider: string;
    link: string;
  }[];
};

const timeline: TimelineItem[] = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Science (General)",
    org: "Department of Computer Science - University of Ruhuna",
    period: "2023 – Present",
    description:
      "Studying core Computer Science subjects including Data Structures & Algorithms, Object Oriented Programming, Data & Network Security and Project Management.",
  },
  {
    icon: Award,
    title: "Certifications",
    org: "LinkedIn Learning, Alison Learning",
    period: "2024",
    certifications: [
      {
        name: "Career Essentials in Project Management",
        provider: "Microsoft & LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/b10c9330684a122815a6aa5bfddc6dd4f4cd8f240b6068befdfdf4d1f7eea9be?trk=share_certificate",
      },

      {
        name: "Business Analysis - Essential Tools & Techniques",
        provider: "LinkedIn Learning(IIBA)",
        link: "https://www.linkedin.com/learning/certificates/c7aabbdbbb9839394e2266a8460f4b7e00dd9b30680246d2708a7cda92e89489?trk=share_certificate",
      },

      {
        name: "AI in Project Management",
        provider: "LinkedIn Learning(PMI, NASBA)",
        link: "https://www.linkedin.com/learning/certificates/60b19fdfcc1733a34230cd33a4237d87335edf113f36ca8b137d827cd739d40f?trk=share_certificate",
      },

      {
        name: "Advanced Prompt Engineering Techniques",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/9bac5466a66bd63f41c269a5928f60186635639e9ca0c0196c8b8409d1ff55bd?trk=share_certificate",
      },
      {
        name: "AI Chat Prompts for Business Analysis",
        provider: "IIBA",
        link: "https://www.linkedin.com/learning/certificates/e9df5a87799d4044739e97486bda001e66ac308697ec84802adf28a898c0249b?trk=share_certificate",
      },

      
      
      // {
      //   name: "Practice Exam 1 for PMI",
      //   provider: "PMP",
      //   link: "https://www.linkedin.com/learning/certificates/4ba6f56e70108adfce92ea66c7726f3cd303cc17259d619fbaa197a08a9ad690?trk=share_certificate",
      // },
      
      
    ],
  },
  {
    icon: BookOpen,
    title: "Currently Learning",
    org: "Self-Directed",
    period: "2025 – Present",
    description:
      "Focused on understanding AI-driven Project Management and Business Analysis tools, Prompt Engineering and its applications in real-world AI solutions.",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          {/* TITLE */}
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            Education & <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          {/* TIMELINE */}
          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* LINE */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
                )}

                {/* ICON */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
                  <item.icon size={20} className="text-primary" />
                </div>

                {/* CONTENT */}
                <div className="flex-1 p-5 rounded-xl bg-card border border-border card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-xs text-primary font-medium mt-1 sm:mt-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-primary/70 mb-3">{item.org}</p>

                  {/* ✅ CONDITIONAL RENDER */}
                  {item.certifications ? (
                    <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                      {item.certifications.map((cert) => (
                        <li key={cert.name}>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {cert.name} - {cert.provider}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;