
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
          
          <Card className="border-none shadow-lg animate-fade-in">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate frontend developer with a strong eye for design and attention to detail. 
                With 5+ years of experience, I specialize in creating responsive, user-friendly web applications 
                that deliver exceptional user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                My journey began with a degree in Computer Science, followed by work at startups and tech companies
                where I've honed my skills in modern web technologies and best practices.
              </p>
              
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me hiking in nature, reading tech blogs, or experimenting with
                new technologies to expand my skill set. I'm always open to new challenges and opportunities to grow.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
