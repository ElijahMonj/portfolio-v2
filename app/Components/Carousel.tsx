"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import image1 from "@/public/images/projects/capstone/1.jpg";
import image2 from "@/public/images/projects/capstone/2.jpg";
import image3 from "@/public/images/projects/capstone/3.jpg";

/** Alt text per slide — these are the real contents, not "screen 1 of 3". */
const images = [
  {
    src: image1,
    alt: "TricyCall passenger app screens: profile settings, in-app chat with a driver, live map booking, a fare breakdown with discounts, OTP sign-in, and travel history.",
  },
  {
    src: image2,
    alt: "TricyCall feature overview: book with a live map, real-time chat with your driver, OTP-verified sign-in, and a feedback system.",
  },
  {
    src: image3,
    alt: "TricyCall admin dashboard on laptop and desktop, showing role management, passenger and driver accounts, and the support ticket queue.",
  },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="overflow-hidden rounded-2xl border border-border" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
              <div className="relative aspect-video">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={100}
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="glass absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-foreground transition-colors hover:text-accent-blue"
      >
        <FiChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="glass absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-foreground transition-colors hover:text-accent-blue"
      >
        <FiChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {snaps.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selected}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selected
                ? "w-8 bg-gradient-to-r from-accent-cyan to-accent-violet"
                : "w-4 bg-border hover:bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
