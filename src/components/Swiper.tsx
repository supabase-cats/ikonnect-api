import { Children } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default function Swiper({ children }: React.PropsWithChildren) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-5">
        {Children.map(children, (child, index) => (
          <CarouselItem key={index} className="basis-1/3 pl-5 md:basis-1/4">
            <div>{child}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden xl:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
