import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  className?: string;
}

const ImageCarousel = ({ images, alt = "Image", className }: ImageCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [enlargedIndex, setEnlargedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  const openEnlarged = (index: number) => {
    setEnlargedIndex(index);
  };

  const closeEnlarged = () => {
    setEnlargedIndex(null);
  };

  const navigateEnlarged = (direction: "prev" | "next") => {
    if (enlargedIndex === null) return;
    
    if (direction === "prev") {
      setEnlargedIndex(enlargedIndex === 0 ? images.length - 1 : enlargedIndex - 1);
    } else {
      setEnlargedIndex(enlargedIndex === images.length - 1 ? 0 : enlargedIndex + 1);
    }
  };

  // Handle keyboard navigation in enlarged view
  React.useEffect(() => {
    if (enlargedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateEnlarged("prev");
      } else if (e.key === "ArrowRight") {
        navigateEnlarged("next");
      } else if (e.key === "Escape") {
        closeEnlarged();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enlargedIndex]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className={cn("w-full", className)}>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="-ml-0">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div 
                  className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-border bg-card cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openEnlarged(index)}
                >
                  <img
                    src={image}
                    alt={`${alt} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10 border-border bg-background/80 backdrop-blur-sm hover:bg-background/90 text-foreground/80 hover:text-foreground" />
              <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10 border-border bg-background/80 backdrop-blur-sm hover:bg-background/90 text-foreground/80 hover:text-foreground" />
            </>
          )}
        </Carousel>

        {/* Dot Indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 focus:outline-none",
                  current === index + 1
                    ? "w-8 bg-foreground"
                    : "w-1.5 bg-muted-foreground hover:bg-foreground/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index + 1 ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>

      {/* Enlarged Image Dialog */}
      <Dialog open={enlargedIndex !== null} onOpenChange={(open) => !open && closeEnlarged()}>
        <DialogOverlay className="bg-black/90" />
        <DialogContent className="max-w-[98vw] max-h-[98vh] w-auto h-auto p-0 border-0 bg-transparent">
          {enlargedIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[enlargedIndex]}
                alt={`${alt} - Image ${enlargedIndex + 1}`}
                className="max-w-[98vw] max-h-[98vh] w-auto h-auto object-contain rounded-lg"
              />
              
              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => navigateEnlarged("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-foreground border border-border transition-all z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => navigateEnlarged("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-foreground border border-border transition-all z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-sm border border-border">
                  {enlargedIndex + 1} / {images.length}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageCarousel;

