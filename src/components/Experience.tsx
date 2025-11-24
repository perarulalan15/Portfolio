import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Propeller Technologies",
      location: "Trichy, India",
      period: "May 2024 - August 2024",
      type: "Internship",
      achievements: [
        "Developed computer vision models, including YOLOv8 and Faster R-CNN, achieving 95% accuracy in detecting lumpy skin disease in cows, enhancing early disease intervention.",
        "Engineered and implemented models for insect classification and detection, optimizing accuracy through large-scale data processing and model training.",
        "Collected, annotated, and augmented extensive datasets, applying advanced data preprocessing techniques to improve model robustness and performance.",
      ],
      tech: ["Python","Computer Vision", "PyTorch", "OpenCV", "YOLOv8"," Faster R-CNN"],
      color: "border-l-blue-500"
    },
  ];

  // const stats = [
  //   { number: "4+", label: "Professional Projects", icon: <TrendingUp className="w-5 h-5" /> },
  //   { number: "1", label: "Internships Completed", icon: <Calendar className="w-5 h-5" /> },
  //   { number: "10+", label: "Technologies Mastered", icon: <MapPin className="w-5 h-5" /> }
  // ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience and meaningful contributions
          </p>
        </div>

        {/* Stats
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-elegant text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-primary-muted text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`card-floating border-l-4 ${exp.color} animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <span className="px-3 py-1 bg-primary-muted text-primary text-sm rounded-full font-medium">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-lg border border-border"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;