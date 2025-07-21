import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "yussef.rostom@gmail.com",
      link: "mailto:yussef.rostom@gmail.com"
    },
    {
      icon: <FaWhatsapp className="h-6 w-6" />,
      label: "WhatsApp",
      value: "+201017734990",
      link: "https://wa.me/201017734990"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "yussefrostom", 
      link: "https://linkedin.com/in/yussefrostom"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Feel free to reach out through any of these channels
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
          </div>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="card-hover bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors flex flex-col items-center text-center group"
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                aria-label={`${info.label}: ${info.value}`}
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{info.label}</h3>
                <p className="text-muted-foreground text-sm">{info.value}</p>
              </a>
            ))}
            
            {/* Availability Card */}
            <div className="card-hover bg-card p-6 rounded-lg border border-border sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-center justify-between">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h3 className="text-xl font-bold mb-2">Availability</h3>
                <p className="text-muted-foreground">Currently open to new opportunities</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Project Work: <span className="text-sm font-medium text-accent">Available</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Full-time Roles: <span className="text-sm font-medium text-accent">Available</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;