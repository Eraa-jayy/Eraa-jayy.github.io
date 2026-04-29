import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT - Brand + About */}
          <div className="text-center md:text-left max-w-sm">
            <h2 className="text-lg font-semibold text-foreground">
              Eranda Jayawardana
            </h2>

            <p className="text-xs text-muted-foreground mt-1">
              Software Developer • UI/UX Enthusiast
            </p>

            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Building modern web apps, breaking them occasionally, and fixing
              them before anyone notices.
            </p>
          </div>

          {/* RIGHT - Social */}
          <div className="flex items-center gap-4">

            <a
              href="/eraa-jayy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>

            <a
              href="/eraa-jayy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Eranda Jayawardana. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;