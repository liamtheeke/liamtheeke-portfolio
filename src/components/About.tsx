import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Users, Target } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Product Vision",
      description: "Implementing solutions saving $125M+ in costs and driving $625M ROI through data-driven product strategy."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Team Building",
      description: "Leading cross-functional teams, managing 5-person development teams, and interviewing 100+ candidates to maintain high hiring standards."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Implementation",
      description: "Creating MVPs through vibe coding and collaborating effectively with engineers to expand ideas into production-ready solutions. Strong technical partnership skills."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Process Optimization",
      description: "Six Sigma methodologies, supply chain optimization, and agile/scrum product development delivering measurable business impact."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a Product Manager who has driven over $625M in ROI through strategic 
              supply chain innovations. I believe the best products come from understanding both 
              the strategic why and the technical how. My "vibe coding" projects are experiments 
              where I explore ideas, test hypotheses, and build solutions that matter - combining 
              my PM experience with hands-on development skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg opacity-90">
                Whether it's a product strategy session, a technical deep-dive, or just 
                a conversation about the future of product development, I'd love to connect.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;