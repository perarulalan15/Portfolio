import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container-width text-center">
          <p className="text-muted-foreground">
              © 2025 Perarulalan V | Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
