"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
}

const Logos3 = ({
  heading = "Teknologier jeg arbejder med",
  logos = [],
}: Logos3Props) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Tech-stack</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          {heading}
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl">
          Bred teknisk ekspertise på tværs af programmering, cloud, sikkerhed og AI.
        </p>
      </div>

      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-8 flex shrink-0 flex-col items-center justify-center gap-2 group">
                    <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-gray-700 group-hover:border-orange-500">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                    <span className="text-gray-500 text-xs font-medium group-hover:text-orange-400 transition-colors">
                      {logo.description}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
