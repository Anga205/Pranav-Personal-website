import { TerminalWindow } from "../TerminalWindow";
import { FileText, Calendar, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    date: "2024-01-15",
    readTime: "5 min",
    excerpt: "A comprehensive guide to understanding and using React Hooks in your projects. Learn about useState, useEffect, and custom hooks.",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 2,
    title: "Building REST APIs with Node.js",
    date: "2024-01-10",
    readTime: "8 min",
    excerpt: "Learn how to build scalable and secure REST APIs using Node.js and Express. Includes authentication, validation, and best practices.",
    tags: ["Node.js", "Backend", "API"],
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use What",
    date: "2024-01-05",
    readTime: "6 min",
    excerpt: "Understanding the differences between CSS Grid and Flexbox, and when to use each layout system for maximum efficiency.",
    tags: ["CSS", "Frontend", "Layout"],
  },
];

export const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section id="blog" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/blog">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>cat blog/*.md | head</span>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post, idx) => (
              <div 
                key={post.id} 
                className={`code-block hover:border-primary smooth-transition cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start gap-3">
                  <FileText className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2"># {post.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime} read</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="code-block mt-6">
            <div className="text-sm">
              <span className="command-prompt">$</span> blog --stats
            </div>
            <div className="mt-3 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-xs text-muted-foreground">Total Posts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1.2K</div>
                <div className="text-xs text-muted-foreground">Total Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">156</div>
                <div className="text-xs text-muted-foreground">Reactions</div>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
};
