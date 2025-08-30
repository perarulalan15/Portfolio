import { ExternalLink, Github, Play } from 'lucide-react';
import flashlearnImg from "../assets/flashlearn.png";



const Projects = () => {
  const projects = [
    {
      title: "Flashlearn - Intelligent Learning with AI-Generated Flashcards",
      description: ["Built an AI-driven learning assistant that converts PDFs/books into summaries and flashcards for faster revision.",
                    "Implemented NLP models with Django + PyTorch to deliver scalable backend performance.",
                    "Designed a responsive UI with Django, enhancing knowledge retention for learners."],
      tech: ["Python", "Django", "PyTorch", "NLP"],
      image: "bg-gradient-to-br from-blue-400 to-purple-600",
      demoUrl: "https://github.com/user-attachments/assets/5c98959f-b7c5-4e26-a1ba-ae3e3c0f1abb",
      githubUrl: "https://github.com/perarulalan15/FlashLearn-Smart-Study-Assistant",
      highlights: ["Generated AI-powered flashcards and summaries", "boosting revision efficiency by 60%."]
    },
    {
      title: "Chaterly - Personalized Chatbot",
      description: ["Developed a chatbot system with multiple personalities (Friendly, Formal, Humorous) to improve user engagement.",
                    "Integrated Groq’s Llama3-8b model for real-time, context-aware responses.",
                    "Deployed via Chainlit, ensuring seamless user interface and smooth backend integration."],
      tech: ["Python", "Groq", "Llama3-8b", "Chainlit"],
      image: "bg-gradient-to-br from-green-400 to-blue-500",
      demoUrl: "https://raw.githubusercontent.com/perarulalan15/chatbot/main/Screenshot%202024-07-06%20100310.png",
      githubUrl: "https://github.com/perarulalan15/chatbot",
      highlights: ["Contextual response quality","Multi-personality adaptability","Smooth UI/UX with Chainlit"]
    },
    {
      title: "Image-to-Audio-Converter-Extract-and-Read-Text-Aloud",
      description: ["Built an AI-powered tool that extracts text from images using OCR and converts it into speech with TTS.",
                    "Leveraged Qwen2-VL-2B-Instruct for accurate text extraction from complex images.",
                    "Enhanced accessibility for visually impaired users and language learners."],
      tech: ["Python", "Qwen/Qwen2-VL-2B-Instruct", "gTTS (Google Text-to-Speech)", "PIL (Pillow)"],
      image: "bg-gradient-to-br from-orange-400 to-red-500",
      demoUrl: "https://github.com/perarulalan15/Image-to-Audio-Converter-Extract-and-Read-Text-Aloud",
      githubUrl: "https://github.com/perarulalan15/Image-to-Audio-Converter-Extract-and-Read-Text-Aloud",
      highlights: ["Accurate OCR with vision-language model", "Seamless Text-to-Speech for real-time audio output.", "Accessibility-focused aiding visually impaired and language learners."]
    },
    // {
    //   title: "Real-time Collaboration Platform",
    //   description: "A modern collaboration tool featuring real-time document editing, video conferencing, and project management. Built for teams working remotely with advanced security features.",
    //   tech: ["TypeScript", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
    //   image: "bg-gradient-to-br from-purple-400 to-pink-500",
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   highlights: ["Real-time collaboration", "End-to-end encryption", "Video conferencing"]
    // }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions built with cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-floating group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Banner */}
              <div className={`h-48 rounded-xl mb-6 ${project.image} flex items-center justify-center`}>
                <div className="text-white/90 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                    <Play size={24} />
                  </div>
                  <p className="text-sm font-medium">Project Demo</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                  {Array.isArray(project.description) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {project.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.description}</p>
                  )}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary-muted text-primary rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target='_blank'
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/perarulalan15?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;