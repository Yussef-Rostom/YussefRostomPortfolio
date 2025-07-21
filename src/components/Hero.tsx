import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Code } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden lg:block absolute top-20 left-20 text-primary opacity-30">
        <Code size={40} />
      </div>
      <div className="hidden lg:block absolute bottom-32 right-32 text-accent opacity-20">
        <Code size={60} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name with responsive sizing */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text typing-animation leading-tight">
            Yussef Rostom
          </h1>
          
          {/* Role with responsive sizing */}
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-primary mb-6 font-mono">
            &lt;Backend Developer/&gt;
          </div>
          
          {/* Tagline with better mobile typography */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Crafting scalable backends with MEAN stack innovation and competitive programming’s problem-solving—turning complexity into efficient systems.
          </p>
          
          {/* CTA Buttons with larger touch targets */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button asChild size="lg" className="glow-primary hover:glow-accent transition-all duration-300 min-h-[48px] text-base sm:text-lg">
              <a 
                href="mailto:yussef.rostom@gmail.com"
                aria-label="Contact me via email"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground min-h-[48px] text-base sm:text-lg"
            >
              <a 
                href="https://github.com/Yussef-Rostom" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View my projects on GitHub"
              >
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
          </div>
          
          {/* Contact Info Cards with improved mobile layout */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-2">

            <a 
              href="mailto:yussef.rostom@gmail.com"
              className="block"
              target="_blank"
            >
              <div className="card-hover bg-card/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border min-h-[80px] flex flex-col justify-center">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-1 sm:mb-2 mx-auto" />
                <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                <p className="font-mono text-xs break-all">yussef.rostom@gmail.com</p>
              </div>  
            </a>

            <a 
              href="https://wa.me/201017734990" 
              className="block" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Chat with me on WhatsApp"
            >
              <div className="card-hover bg-card/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border min-h-[80px] flex flex-col justify-center">
                <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-1 sm:mb-2 mx-auto" />
                <p className="text-xs sm:text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-mono text-xs">+201017734990</p>
              </div>
            </a>
            
            <a 
              href="https://www.google.com/maps/place/Giza"
              className="block"
              target="_blank"
            >
              <div className="card-hover bg-card/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border min-h-[80px] flex flex-col justify-center">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-1 sm:mb-2 mx-auto" />
                <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                <p className="font-mono text-xs">Giza, Egypt</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yussefrostom/"
              className="block"
              target="_blank"
            >
              <div className="card-hover bg-card/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border min-h-[80px] flex flex-col justify-center">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-1 sm:mb-2 mx-auto" />
                <p className="text-xs sm:text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-mono text-xs">yussefrostom</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;