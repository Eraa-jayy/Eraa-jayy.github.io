import { Download } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import eraaa from "@/assets/eraaa.png";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eraa-jayy/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M8 11v5M8 8v.01M12 16v-5c0-1 .5-2 2-2s2 1 2 2v5" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Eraa-jayy",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

const HeroSection = () => {
  const typedText = useTypingAnimation(
    [
      "Aspiring Project Manager",
      
      "Software Developer",
    ],
    80,
    2000
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg tracking-wide">
              Hello! It's
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Eranda Jayawardana
            </h2>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              <span>{typedText}</span>
              <span className="typing-cursor" />
            </h1>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:erandajayawardhane25@gmail.com?subject=Hiring%20Inquiry"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition"
              >
                Hire Me
              </a>

              <a
                href="/cv.pdf"
                download="Eranda_Jayawardana_CV.pdf"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-muted-foreground/40 text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>

            {/* STATS */}
            <div className="flex items-center mt-5 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
              {[
                { num: "4+", label: "Projects done" },
                { num: "4+", label: "Certifications" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 py-4 px-6 text-center ${
                    i === 0 ? "border-r border-border/50" : ""
                  }`}
                >
                  <p className="text-2xl font-heading font-bold text-primary">
                    {stat.num}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center items-center relative mt-8 lg:mt-0">
            <div className="absolute w-[320px] h-[320px] bg-primary rounded-full blur-3xl opacity-30 animate-pulse" />

            <div className="relative w-[280px] h-[280px] rounded-full p-1 bg-gradient-to-tr from-primary via-transparent to-primary/50">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={eraaa}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;