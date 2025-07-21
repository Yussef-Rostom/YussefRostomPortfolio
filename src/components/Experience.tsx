import { Briefcase, Calendar, MapPin, TrendingUp, Users, Code2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Orange Digital Center Egypt & Digital HUB",
      location: "Cairo",
      period: "2024",
      type: "Internship",
      link: "https://drive.google.com/file/d/1rSIrzrX5ikzHYkOUIPOXpzVelyWMZ6O3/view?usp=drive_link",
      description: "Developed customized software solutions in collaboration with a team of 5 engineers and designers, improving project delivery time by 20%.",
      achievements: [
        "Resolved 15+ bugs through systematic debugging, enhancing software stability and user satisfaction",
        "Applied best practices in software design, reducing code redundancy by 25% and improving maintainability",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ],
      skills: ["Node.js", "Express.js", "Team Collaboration", "Software Design"],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Machine Learning Intern",
      company: "National Telecommunication Institute (NTI)",
      location: "Minia",
      period: "2024 Sep – 2024 Nov",
      type: "Internship",
      link: "https://drive.google.com/file/d/14nEmn6MzZi-UNuB7ndQks8aG1EPj7hTK/view?usp=drive_link",
      description: "Trained ML model development, achieving 90% accuracy in a student GPA prediction project.",
      achievements: [
        "Implemented real-world ML solutions, optimizing data preprocessing pipelines to reduce training time by 30%",
        "Developed predictive models with high accuracy using advanced algorithms",
        "Gained hands-on experience with data analysis and model optimization"
      ],
      skills: ["Python", "Machine Learning", "Data Analysis", "Model Optimization"],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "MEAN Stack Development Intern",
      company: "NTI & ITIDA",
      location: "Remote",
      period: "2025 Jun – 2025 Aug",
      type: "Internship",
      link: "#",
      description: "Completed an intensive, project-based training program covering MongoDB, Express.js, Angular, and Node.js.",
      achievements: [
        "Specialized in backend development, focusing on creating RESTful APIs, server-side logic, and database integration",
        "Built full-stack applications with Express.js and MongoDB",
        "Mastered modern web development practices and architectural patterns"
      ],
      skills: ["MEAN Stack", "RESTful APIs", "MongoDB", "Angular"],
      icon: <Code2 className="h-6 w-6" />
    }
  ];

  const volunteering = {
    title: "Coding Instructor & Head of Training",
    company: "ICPC Minia University",
    location: "Minia",
    period: "2022 Sep – present",
    description: "Mentored Minia University students in competitive programming, helping them qualify for national competitions like ICPC and ACPC.",
    achievements: [
      "Developed comprehensive training programs for algorithmic problem-solving",
      "Coached students to achieve top rankings in regional programming contests",
      "Built a community of competitive programmers at the university"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building expertise through hands-on experience in software development and team collaboration
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content Card - Now clickable */}
                <a 
                  href={exp.link}
                  target="_blank"
                  className="ml-20 card-hover bg-card p-6 rounded-lg border border-border w-full block hover:shadow-lg transition-shadow duration-300 cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
                  aria-label={`View details about ${exp.title} at ${exp.company}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex items-start space-x-3 mb-4 lg:mb-0">
                      <div className="text-primary mt-1">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                        <p className="text-lg font-medium">{exp.company}</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1 space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-accent">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          {/* Volunteering Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
            <div className="flex items-start space-x-3 mb-4">
              <Users className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Volunteering & <span className="gradient-text">Leadership</span>
                </h3>
                <h4 className="text-xl font-medium text-primary">{volunteering.title}</h4>
                <p className="text-lg">{volunteering.company}</p>
                <div className="flex items-center text-sm text-muted-foreground mt-1 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {volunteering.period}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {volunteering.location}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {volunteering.description}
            </p>
            
            <ul className="space-y-2">
              {volunteering.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;