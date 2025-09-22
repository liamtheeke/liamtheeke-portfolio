import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "PL Survivor",
      description: "A Premier League survival game where players pick winners each gameweek to survive elimination. Features group creation, lives system, power-ups, and a competitive pot system. Built with engaging UI and real-time game state management.",
      tags: ["Game Design", "User Engagement", "Sports Tech", "Group Dynamics"],
      liveUrl: "https://huggingface.co/spaces/liamtheeke/pl-survivor",
      imageUrl: "/pl-survivor-screenshot.png",
    },
    {
      title: "AI Bingo Buddy",
      description: "A custom ChatGPT that creates printable themed bingo cards with interactive features for any event. Demonstrates AI prompt engineering and product design thinking for community-building tools and event engagement.",
      tags: ["AI Product Design", "Community Building", "Prompt Engineering", "Event Tools"],
      liveUrl: "https://chatgpt.com/g/g-6884f09fbc108191863f101eff5d2652-ai-bingo-buddy",
      imageUrl: "/ai-bingo-buddy-screenshot.png",
    },
    {
      title: "PM Experiment",
      description: "Space for your third project. Show how you identified an opportunity, validated the idea, and brought it to life through code.",
      tags: ["MVP Development", "User Testing", "Iterative Design"],
      isPlaceholder: true,
    },
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
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to add your projects? Simply provide the links and details!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;