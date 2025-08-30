import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // This would typically link to an actual PDF file
    // For now, we'll show a placeholder action
    console.log('Resume download requested');
    // In a real implementation: window.open('/path-to-resume.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-soft">
      <div className="container-width">
        <div className="text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-medium animate-float">
              <img
                src={profilePhoto}
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-gradient">
            Hello, I'm Perarulalan
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 max-w-3xl mx-auto">
            Aspiring Software Engineer | AI Enthusiast
          </h2>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft elegant solutions with Java and cutting-edge AI/ML technologies. 
            Passionate about backend development and building intelligent systems that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={scrollToAbout}
              className="btn-primary flex items-center gap-2"
            >
              Learn More About Me
              <ArrowDown size={18} />
            </button>
            
            <a
            href="/Perarulalan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/perarulalan15"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-110"
            >
              <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/perarulalan-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            
            <a
              href="mailto:perarulalan01@gmail.com"
              className="p-3 rounded-full bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-110"
            >
              <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;