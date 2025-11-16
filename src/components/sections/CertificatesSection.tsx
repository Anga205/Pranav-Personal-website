import { TerminalWindow } from "../TerminalWindow";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-DEV-2024-001",
  },
  {
    id: 2,
    title: "React Professional Certificate",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-REACT-2023-045",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-FULLSTACK-2023-789",
  },
  {
    id: 4,
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "2023",
    credentialId: "STAN-ML-2023-234",
  },
  {
    id: 5,
    title: "Docker Certified Associate",
    issuer: "Docker Inc",
    date: "2023",
    credentialId: "DOCKER-DCA-2023-567",
  },
  {
    id: 6,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-JS-2022-890",
  },
];

export const CertificatesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section id="certificates" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/certificates">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>ls -la certificates/ | grep .cert</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className={`code-block hover:border-primary smooth-transition hover:shadow-lg cursor-pointer group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className="text-primary flex-shrink-0" size={24} />
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>
                
                <h3 className="font-bold mb-2 text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                
                <div className="code-block text-xs mt-3 bg-background">
                  <div className="text-muted-foreground">ID: {cert.credentialId}</div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 text-xs opacity-0 group-hover:opacity-100 smooth-transition"
                >
                  <ExternalLink size={12} className="mr-2" />
                  Verify Certificate
                </Button>
              </div>
            ))}
          </div>

          <div className="code-block mt-6">
            <div className="text-sm text-muted-foreground">
              <span className="command-prompt">$</span> cert-manager --summary
            </div>
            <div className="mt-3 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Total Certificates:</span>
                <span className="text-primary font-bold">{certificates.length}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Latest Achievement:</span>
                <span className="text-primary">{certificates[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
};
