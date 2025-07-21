import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Server, Globe, Database, Wrench, Code, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "RESTful APIs" },
        { name: "WebSocket" },
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend Technologies",
      skills: [
        { name: "Angular" },
        { name: "TypeScript" },
        { name: "HTML/CSS" },
        { name: "JavaScript" },
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: [
        { name: "MongoDB" },
        { name: "SQL" },
        { name: "Database Design" },
        { name: "Query Optimization" },
      ],
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & DevOps",
      skills: [
        { name: "Git/GitHub" },
        { name: "Docker" },
        { name: "Postman" },
        { name: "Version Control" },
      ],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "C/C++" },
      ],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Core Concepts",
      skills: [
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "OOP" },
        { name: "Design Patterns" },
      ],
    },
  ];

  const certifications = [
    "ECPC Egyptian Collegiate Programming Contest Finalist",
    "PWF Upper Egypt Contest Finalist",
    "Machine Learning Professional Certificate",
    "MEAN Stack Development Certificate",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable backend solutions
              and solving complex problems
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="card-hover bg-card p-4 sm:p-6 rounded-lg border border-border"
              >
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  {" "}
                  {/* Added justify-center */}
                  <div className="text-primary mr-3 flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg leading-tight text-center">
                    {" "}
                    {/* Added text-center */}
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Certifications & Achievements */}
          <div className="bg-card/50 p-4 sm:p-6 lg:p-8 rounded-lg border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
              Achievements &{" "}
              <span className="gradient-text">Certifications</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 sm:p-4 bg-background/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 sm:mr-4 flex-shrink-0 mt-2"></div>
                  <span className="text-xs sm:text-sm leading-relaxed">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
