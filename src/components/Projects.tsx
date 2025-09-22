import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Placeholder projects - you'll replace these with your actual projects
  const projects = [
    {
      title: "Your First Project",
      description: "This will be replaced with your actual project description. Share the problem you solved, your approach as a PM, and the technical implementation.",
      tags: ["Product Strategy", "React", "TypeScript", "Problem Solving"],
      isPlaceholder: true,
    },
    {
      title: "Another Vibe Project",
      description: "Another placeholder for your creative coding project. Describe the user problem, your product thinking, and the technical solution you built.",
      tags: ["User Research", "API Integration", "Design Thinking"],
      isPlaceholder: true,
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