import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "BSc (Hons) Computer Science",
    org: "Your University",
    period: "2022 – Present",
    description: "Studying core CS subjects including software engineering, databases, algorithms, AI, and project management.",
  },
  {
    icon: Award,
    title: "Certifications",
    org: "Online Platforms",
    period: "2023 – Present",
    description: "Completed courses in Agile/Scrum, Business Analysis Fundamentals, and Web Development.",
  },
  {
    icon: BookOpen,
    title: "Currently Learning",
    org: "Self-Directed",
    period: "2024 – Present",
    description: "Exploring cloud computing, advanced React patterns, data analytics with Python, and UX research methods.",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            Education & <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <div key={item.title} className="relative flex gap-6 pb-12 last:pb-0">
                {i < timeline.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
                )}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 p-5 rounded-xl bg-card border border-border card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs text-primary font-medium mt-1 sm:mt-0">{item.period}</span>
                  </div>
                  <p className="text-sm text-primary/70 mb-2">{item.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
