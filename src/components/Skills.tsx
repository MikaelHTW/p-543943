
import { Card, CardContent } from '@/components/ui/card';
import { Code, Layout, Database, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'CSS/SCSS', 'Tailwind CSS'],
    icon: <Layout className="h-8 w-8 text-primary" />,
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL'],
    icon: <Server className="h-8 w-8 text-primary" />,
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    category: 'Other',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum'],
    icon: <Code className="h-8 w-8 text-primary" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="h-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <ul className="space-y-2 mt-auto">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
