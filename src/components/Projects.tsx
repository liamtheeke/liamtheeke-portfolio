import ProjectCard from "./ProjectCard";

const Projects = () => {
const projects = [
    {
      title: "CerealAI",
      description: "B2B AI platform offering a suite of internal application tools. Features AI app builder (Snap), natural language SQL queries (Crackle), and company knowledge assistant (Pop). Designed to tackle specific backlog pain points with enterprise-grade security.",
      tags: ["B2B AI", "Enterprise SaaS", "Internal Tools", "Product Strategy"],
      liveUrl: "https://cerealai.lovable.app/",
      imageUrl: "/cerealai-screenshot.png",
    },
    {
      title: "Outlastr",
      description: "Sports survival league platform where players predict weekly winners across Premier League and other sports. Features league creation, lives-based elimination system, and competitive prize pools. Last player standing wins.",
      tags: ["Sports Tech", "League Management", "User Engagement", "Prize Pools"],
      liveUrl: "https://outlastr.com",
      imageUrl: "/outlastr-screenshot.png",
    },
    {
      title: "AI Bingo Buddy",
      description: "A custom ChatGPT that creates printable themed bingo cards with interactive features for any event. Demonstrates AI prompt engineering and product design thinking for community-building tools and event engagement.",
      tags: ["AI Product Design", "Community Building", "Prompt Engineering", "Event Tools"],
      liveUrl: "https://chatgpt.com/g/g-6884f09fbc108191863f101eff5d2652-ai-bingo-buddy",
      imageUrl: "/ai-bingo-buddy-screenshot.png",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of product experiments where I've combined strategic thinking 
            with hands-on development to solve real problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;