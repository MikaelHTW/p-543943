
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent z-0" />
      
      <div className="container mx-auto px-4 py-12 z-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
          <span className="text-foreground">Hello, I'm </span>
          <span className="text-primary">John Doe</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A passionate <span className="text-primary font-medium">Frontend Developer</span> creating beautiful and functional web experiences
        </h2>
        
        <Button onClick={scrollToAbout} className="flex items-center gap-2 mt-8 animate-bounce">
          Explore My Work <ArrowDown size={16} />
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/80 shadow-md"
          aria-label="Scroll to About"
        >
          <ArrowDown size={20} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
