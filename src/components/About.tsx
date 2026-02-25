import { BookOpen, Code, Heart, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Technical Excellence",
      description: "Specialized in Java, Python, and modern backend architectures with a focus on scalable solutions."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "AI & Machine Learning",
      description: "Passionate about implementing intelligent systems and exploring the frontiers of artificial intelligence."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Continuous Learning",
      description: "Actively strengthening my expertise in Data Structures and Algorithms to build efficient and robust systems."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Problem Solving",
      description: "Love tackling complex challenges and turning innovative ideas into practical, impactful solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the next generation of intelligent software through backend engineering and applied AI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main About Content */}
          <div className="card-elegant mb-12 animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed mb-6">
              I’m a B.Tech graduate in Artificial Intelligence and Data Science with a strong passion for software development and artificial intelligence. My journey started with a curiosity about how technology can solve real-world problems, and it has grown into a commitment to building impactful solutions. I specialize in backend development and machine learning, where I love transforming ideas into scalable and intelligent systems.
              </p>
              
              <p className="text-foreground/90 leading-relaxed mb-6">
                Through various internships and projects, I've gained hands-on experience in building scalable 
                applications, implementing AI/ML models, and working with diverse tech stacks. I am always eager to learn new technologies and methodologies.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest developments in AI research. I enjoy reading tech blogs and solve LeetCode problems. 
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card-floating animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-muted">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;