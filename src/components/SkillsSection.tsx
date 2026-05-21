import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Code,
  Database,
  Server,
  FileSpreadsheet,
  Monitor,
  GitBranch,
  Rocket,
  Leaf,
  Layout,
  Users,
  Trello,
  MessageSquare,
  Lightbulb,
  BarChart,
  Code2,
  Layers,
  Workflow,
  Figma,
  Briefcase,
  KanbanIcon,
  KanbanSquare,
  Brackets,
  Coffee,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Java / Spring Boot", level: 75, icon: Coffee },
      { name: "C", level: 85, icon: Cpu },
      // { name: "C#", level: 75, icon: Code2 },
      { name: "HTML/CSS/JS", level: 90, icon: Brackets },
      { name: "React.js / Tailwind CSS", level: 80, icon: Layers },
      { name: "Next.js", level: 80, icon: Rocket },
      { name: "MongoDB", level: 75, icon: Leaf },
      { name: "MySQL", level: 75, icon: Database },
      // { name: "Python", level: 70, icon: Code },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 85, icon: GitBranch },
      // { name: "Trello / Jira", level: 90, icon: KanbanSquare },
      { name: "Trello", level: 90, icon: Trello },
      { name: "Jira", level: 90, icon: Briefcase },
      { name: "Figma", level: 75, icon: Figma },
      { name: "Draw.io", level: 90, icon: Workflow },

      // { name: "Spring Boot", level: 80, icon: Server },
      { name: "Vercel", level: 85, icon: Rocket },

      { name: "MS Office Suite", level: 90, icon: FileSpreadsheet },
      { name: "Windows / Linux", level: 85, icon: Monitor },
    ],
  },
  {
    title: "Methodologies & Practices",
    skills: [
      { name: "Agile", level: 85, icon: Workflow },
      { name: "Scrum", level: 85, icon: Users },
      { name: "SDLC", level: 90, icon: GitBranch },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", level: 85, icon: Users },
      { name: "Communication", level: 90, icon: MessageSquare },
      { name: "Problem Solving", level: 88, icon: Lightbulb },
      { name: "Team Collaboration", level: 92, icon: Users },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="font-heading text-xl font-semibold mb-6 text-primary">
                  {cat.title}
                </h3>
                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon size={16} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
