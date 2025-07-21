import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Animated Dancing Squirrel",
      description:
        "A 3D animation system featuring a dancing squirrel character built with C# and OpenGL. Achieved 60 FPS performance through optimized shader use and implemented advanced skeletal animation systems with particle effects.",
      technologies: ["C#", "OpenGL", "3D Graphics", "Animation"],
      features: [
        "2D skeletal animation system",
        "60 FPS performance optimization",
        "Custom shader effects",
        "Particle system integration",
      ],
      github: "https://github.com/Yussef-Rostom/DrawingBoundok",
      category: "Graphics Programming",
    },
    {
      title: "To-Do Management System",
      description:
        "A full-stack web application built with Django featuring user authentication, task management, and real-time updates. Serves 100+ monthly active users with a responsive dark-themed interface.",
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
      features: [
        "User authentication system",
        "Real-time task updates",
        "Responsive design",
        "100+ monthly active users",
      ],
      github: "https://github.com/Yussef-Rostom/ToDoManagementSystem",
      category: "Full-Stack Development",
    },
    {
      title: "Student GPA Predictor",
      description:
        "Machine learning model with 90% accuracy for predicting student GPA using Python and Scikit-learn. Features comprehensive data preprocessing pipelines and interactive visualization dashboard.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "90% prediction accuracy",
        "Advanced data preprocessing",
        "Interactive visualizations",
        "Statistical analysis dashboard",
      ],
      github:
        "https://colab.research.google.com/drive/10-zg_LNQZU3s4VcB73rebYzKA0He34d8?usp=sharing",
      category: "Machine Learning",
    },
    {
      title: "Queuing Simulation System",
      description:
        "Advanced simulation system built with C# and OOP principles. Improved system efficiency by 30% through optimized queue management algorithms and comprehensive performance analytics.",
      technologies: ["C#", "OOP", "Data Structures", "Algorithms", "WinForms"],
      features: [
        "30% efficiency improvement",
        "Advanced queue algorithms",
        "Real-time performance metrics",
        "Comprehensive system analytics",
      ],
      github: "https://github.com/Yussef-Rostom/SimulationProject",
      category: "System Design",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of technical projects demonstrating proficiency in
              backend development, machine learning, and system optimization
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-hover bg-card rounded-lg overflow-hidden border border-border group transition-all duration-300 hover:shadow-md"
              >
                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold animated-underline cursor-pointer">
                      {project.title}
                    </h3>
                    {/* Category Badge - Now with better width handling */}
                    <Badge
                      variant="secondary"
                      className="bg-primary/90 text-primary-foreground border-0 text-xs sm:text-sm whitespace-nowrap px-3 py-1 min-w-max"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-accent mb-2 flex items-center text-sm sm:text-base">
                      <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-xs sm:text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-muted text-muted-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-border hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Single View Code Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full min-h-[44px] text-sm mt-2"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <div className="bg-card/50 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">
                Explore More on <span className="gradient-text">GitHub</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover additional projects, contributions, and open-source
                work on my GitHub profile. From competitive programming
                solutions to full-stack applications.
              </p>
              
              <a
                href="https://github.com/Yussef-Rostom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my projects on GitHub"
              >
                <Button className="glow-primary">
                  <Github className="h-5 w-5 mr-2" />
                  Visit GitHub Profile
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
