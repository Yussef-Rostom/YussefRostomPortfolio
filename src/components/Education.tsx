import { GraduationCap, Calendar, MapPin, Award, Trophy } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Computer and Information Sciences",
    university: "Minia University",
    location: "Minia, Egypt",
    period: "2022 Sep – present",
    status: "In Progress",
  };

  const achievements = [
    {
      title: "ECPC Finalist",
      organization: "ECPC Egyptian Collegiate Programming Contest",
      description: "Competed at the national level in Egypt's premier collegiate programming competition",
      year: "2024",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "PWF Finalist", 
      organization: "Upper Egypt Programming Contest",
      description: "Top performer in regional competitive programming contest",
      year: "2024",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management Systems", 
    "Computer Networks",
    "Operating Systems",
    "Web Development",
    "Machine Learning",
    "Object-Oriented Programming"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and competitive programming excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Education Card */}
            <div className="lg:col-span-2">
              <div className="card-hover bg-card p-8 rounded-lg border border-border h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-xl font-medium mb-2">{education.university}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-muted-foreground text-sm space-y-1 sm:space-y-0">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {education.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {education.location}
                      </span>
                    </div>
                  </div>
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {education.status}
                  </div>
                </div>
                
  
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 p-4 rounded-lg border border-border text-center">
                    <div className="text-2xl font-bold text-accent">2025</div>
                    <div className="text-sm text-muted-foreground">Expected Graduation</div>
                  </div>
                </div>
                
                {/* Relevant Coursework */}
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Relevant Coursework:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {coursework.map((course, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Achievements Sidebar */}
            <div className="space-y-6">
              <div className="card-hover bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-6 text-center">
                  <span className="gradient-text">Achievements</span>
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 bg-background/30">
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-1">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
                          <p className="text-sm font-medium mb-2">{achievement.organization}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                          <div className="text-xs text-accent font-medium mt-2">
                            {achievement.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;