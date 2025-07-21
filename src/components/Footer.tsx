import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold font-mono gradient-text mb-4">
              &lt;Yussef Rostom/&gt;
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Crafting scalable backends with MEAN stack innovation and competitive programming’s problem-solving—turning complexity into efficient systems.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary"
                asChild
              >
                <a
                  href="https://github.com/Yussef-Rostom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub profile</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary"
                asChild
              >
                <a
                  href="https://linkedin.com/in/yussefrostom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn profile</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary"
                asChild
              >
                <a href="mailto:yussef.rostom@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Send email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Backend Development</li>
              <li>API Development</li>
              <li>Database Design</li>
              <li>System Optimization</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Yussef Rostom. All rights reserved.
              </p>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:text-primary"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
