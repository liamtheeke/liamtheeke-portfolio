import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  liveUrl, 
  githubUrl, 
  imageUrl,
  isPlaceholder = false 
}: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-card border-border">
      <div className="aspect-video bg-gradient-secondary rounded-t-lg overflow-hidden relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="text-6xl opacity-50">🚀</span>
          </div>
        )}
        
        {isPlaceholder && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="text-white font-medium">Your Project Here</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          {liveUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;