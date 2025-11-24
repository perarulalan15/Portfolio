import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />, 
      label: "Email",
      value: "perarulalan01@gmail.com",
      href: "mailto:perarulalan01@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />, 
      label: "Location",
      value: "Trichy, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />, 
      label: "GitHub",
      href: "https://github.com/perarulalan15",
      color: "hover:text-gray-700"
    },
    {
      icon: <Linkedin className="w-6 h-6" />, 
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/perarulalan-v/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />, 
      label: "Email",
      href: "mailto:perarulalan01@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="animate-slide-up">
            <h3 className="font-heading font-bold text-2xl mb-8 text-foreground text-center">
              Let's Connect
            </h3>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary-muted text-primary group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="card-elegant mb-8">
              <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
                Resume
              </h4>
              <p className="text-muted-foreground mb-4">
                Download my complete resume to learn more about my experience and qualifications.
              </p>
              <a
                href="/Perarulalan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume (PDF)
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-200 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
