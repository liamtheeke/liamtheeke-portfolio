import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Interested in collaborating, discussing product ideas, or just want to chat 
            about the intersection of product management and development?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email Me</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss your project or opportunity
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:liamtheeke@gmail.com">
                    liamtheeke@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Schedule a Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a time that works for both of us
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://calendar.app.google/1rP37ZRPWPKxWqC86" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors" asChild>
              <a href="https://github.com/liamtheeke" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors" asChild>
              <a href="https://www.linkedin.com/in/liamtheeke/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;