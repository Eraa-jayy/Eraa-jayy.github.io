import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, BriefcaseBusiness, Code } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Computer Science Undergraduate" },
  { icon: Briefcase, label: "High Interest in Project Management" },
  { icon: BriefcaseBusiness, label: "​Aspiring Business Analyst" },
  { icon: Code, label: "Frontend Developer" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a Computer Science undergraduate with a strong interest in both Project Management and Business Analysis. I am passionate about understanding how projects are planned, structured, and delivered effectively while ensuring that business goals are clearly defined and achieved.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I enjoy analyzing problems, gathering requirements, and translating them into clear, actionable solutions. Alongside my technical background, I am developing strong communication, teamwork, and organizational skills, which are essential for coordinating between stakeholders and development teams. I am particularly interested in how business needs are aligned with technical solutions to create successful outcomes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My goal is to build a career in Project Management or Business Analysis where I can contribute to managing projects efficiently and improving business processes. I am eager to gain industry experience, develop my analytical thinking further, and grow into a professional who can bridge the gap between business and technology effectively.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border card-hover text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
