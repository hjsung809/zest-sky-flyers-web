
import { Card, CardContent } from "@/components/ui/card";

export const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/908d821a-5b94-4ba4-9859-6181b307c81e.png",
      alt: "Academy Interior 1"
    },
    {
      src: "/lovable-uploads/7c42a369-9992-482b-9885-c83df0312ca2.png",
      alt: "Academy Interior 2"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
