import { Download } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import profileImg from "@/assets/profile.jpg";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M8 11v5M8 8v.01M12 16v-5c0-1 .5-2 2-2s2 1 2 2v5" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7.5 11c1.38 0 2.5-.56 2.5-2s-1.12-2-2.5-2H3v4h4.5zM3 13v4.5h5c1.38 0 2.5-.84 2.5-2.25S9.38 13 8 13H3zM15 7h5v1.5h-5zM17.5 10c-2.49 0-4.5 1.79-4.5 4.25S15.01 18.5 17.5 18.5c1.78 0 3.37-.85 4.1-2.25h-2.1c-.36.5-1.09.85-2 .85-1.38 0-2.3-.84-2.45-2.1h6.75c.05-.32.2-.65.2-1 0-2.46-2.01-4-4.5-4zm-2.45 3.5c.28-1.1 1.17-1.85 2.45-1.85s2.17.75 2.45 1.85h-4.9z" />
      </svg>
    ),
  },
];

const HeroSection = () => {
  const typedText = useTypingAnimation(
    ["Business Analyst", "Project Manager", "Software Developer"],
    80,
    2000
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark geometric background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/40 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-border/20 rotate-12 origin-top" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-border/10 -rotate-6 origin-top" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-5">
            <p className="text-muted-foreground text-lg tracking-wide">Hello! It's </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Eranda Jayawardana
            </h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              <span>{typedText}</span>
              <span className="typing-cursor" />
            </h1>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110 glow-primary"
              >
                Hire Me
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-muted-foreground/40 text-foreground font-semibold text-sm transition-all hover:border-primary hover:text-primary"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-0 mt-10 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
              {[
                { num: "5+", label: "Experiences" },
                { num: "20+", label: "Project done" },
                { num: "80+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 py-5 px-6 text-center ${
                    i < 2 ? "border-r border-border/50" : ""
                  }`}
                >
                  <p className="text-2xl font-heading font-bold text-primary">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - profile image */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Outer glow ring */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-primary/5 border border-primary/10" />
            {/* Inner glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-secondary/30" />

            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary/30 glow-primary z-10">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
                width={512}
                height={640}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
