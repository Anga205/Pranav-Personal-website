import { useState } from "react";
import { TerminalWindow } from "../TerminalWindow";
import { Image as ImageIcon, X } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  { id: 1, title: "Conference 2023", description: "Tech conference presentation" },
  { id: 2, title: "Hackathon Win", description: "Winner at university hackathon" },
  { id: 3, title: "Team Project", description: "Collaborating with the team" },
  { id: 4, title: "Workshop", description: "Conducting a coding workshop" },
  { id: 5, title: "Code Sprint", description: "24-hour coding marathon" },
  { id: 6, title: "Meetup", description: "Local developer meetup" },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="gallery" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/gallery">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>find ./images -type f -name "*.jpg"</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-border hover:border-primary smooth-transition cursor-pointer group overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-4 group-hover:scale-105 smooth-transition">
                  <ImageIcon className="text-primary mb-2" size={32} />
                  <div className="text-xs font-mono text-center">
                    <div className="font-bold">{image.title}</div>
                    <div className="text-muted-foreground text-[10px] mt-1">{image.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="code-block mt-6">
            <div className="text-sm text-muted-foreground">
              <span className="command-prompt">$</span> exiftool --stats
            </div>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Total Images:</span>
                <span className="text-primary">{galleryImages.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated:</span>
                <span className="text-primary">2024-01-15</span>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <ImageIcon className="text-primary" size={64} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
