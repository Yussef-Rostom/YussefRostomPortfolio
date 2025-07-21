import { Code, Database, Server, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Developer",
      description: "Expert in MEAN stack development"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Competitive Programmer", 
      description: "ECPC finalist with algorithmic thinking"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a <span className="text-primary font-semibold">Backend Developer</span> specializing in the MEAN stack 
                  (MongoDB, Express.js, Angular, Node.js), with a passion for creating highly efficient and scalable 
                  backend solutions.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">

                  My competitive programming experience helps me solve problems efficiently and build fast,
                  clean systems. I love using <span className="text-accent font-semibold">Node.js, Express.js, and MongoDB </span>
                  to create powerful backend solutions for tough challenges.
                </p>
              
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Solved Problem</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">contest participation</div>
                </div>
              </div>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="card-hover bg-card/80 p-6 rounded-lg border border-border text-center"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;