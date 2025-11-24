import { 
  Code2, 
  Database, 
  Brain, 
  Server, 
  GitBranch, 
  Terminal,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 90, color: "bg-orange-500" },
        { name: "Python", level: 70, color: "bg-blue-500" },
        { name: "SQL", level: 75, color: "bg-yellow-500" },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "NLP", level: 90, color: "bg-orange-600" },
        { name: "PyTorch", level: 75, color: "bg-red-500" },
        { name: "Scikit-learn", level: 70, color: "bg-yellow-600" },
      ]
    },
    {
      title: "Generative AI & LLM Ecosystem",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "LLMs", level: 85, color: "bg-orange-600" },
        { name: "LangChain", level: 75, color: "bg-red-500" },
        { name: "Transformers / HuggingFace", level: 80, color: "bg-yellow-600" },
        { name: "Vector Databases", level: 60, color: "bg-yellow-600" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Spring Boot", level: 85, color: "bg-green-600" },
        { name: "REST APIs", level: 90, color: "bg-blue-500" },
        { name: "Microservices", level: 75, color: "bg-purple-500" }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "Git & Github", level: 80, color: "bg-blue-700" },
        { name: "Postman", level: 90, color: "bg-blue-700" },

      ]
    }
  ];

  const coreStrengths = [
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Data Structures & Algorithms",
      description: "Strong foundation in algorithmic thinking and efficient problem-solving techniques."
    },
    {
      icon: <Terminal className="w-8 h-8 text-primary" />,
      title: "Problem-Solving with Java",
      description: "Proficient in Java with practical experience in applying them to solve real-world challenges."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      description: "Experience in profiling, debugging, and optimizing applications for better performance."
    },
    {
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      title: "Version Control & Collaboration",
      description: "Proficient in Git workflows, code reviews, and team-based development practices."
    },
    
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and proven methodologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card-elegant animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary-muted text-primary">
                  {category.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Strengths */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-foreground">
            Core Strengths
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((strength, index) => (
              <div
                key={index}
                className="card-floating text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-primary-muted">
                    {strength.icon}
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-lg mb-3 text-foreground">
                  {strength.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;