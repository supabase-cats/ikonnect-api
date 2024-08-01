import { Children } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface Props extends React.PropsWithChildren {
  size?: 'large' | 'small';
}

export default function Swiper({ size = 'small', children }: Props) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-5">
        {Children.map(children, (child, index) => (
          <CarouselItem
            key={index}
            className={`${size === 'small' ? 'basis-1/10' : 'basis-1/3 md:basis-1/4'} pl-5`}
          >
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
