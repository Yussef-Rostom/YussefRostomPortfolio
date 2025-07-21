import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold font-mono gradient-text focus:outline-none focus:ring-2 focus:ring-primary rounded"
              aria-label="Yussef Rostom - Portfolio Home"
            >
              &lt;YR/&gt;
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium animated-underline min-h-[44px] px-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <a
                href="https://github.com/Yussef-Rostom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary min-h-[44px] min-w-[44px]"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/yussefrostom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary min-h-[44px] min-w-[44px]"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden min-h-[44px] min-w-[44px]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg border border-border mt-2 mx-2">
              <nav role="navigation" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-3 text-muted-foreground hover:text-primary transition-colors w-full text-left min-h-[48px] rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                <a
                  href="https://github.com/Yussef-Rostom"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-primary min-h-[44px] min-w-[44px]"
                    aria-label="Visit GitHub profile"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/yussefrostom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-primary min-h-[44px] min-w-[44px]"
                    aria-label="Visit LinkedIn profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
