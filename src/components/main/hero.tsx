import { HeroImage } from '@/constants/heroimage';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className=' flex flex-col items-center gap-4 '>
      <Carousel
        className='custom-container'
        opts={{ align: 'center', loop: true }}
        setApi={setApi}
      >
        <CarouselContent className='rounded-4xl'>
          {HeroImage.map((item, index) => (
            <CarouselItem key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className='w-full h-full rounded-4xl'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className=' flex gap-1.5'>
        {Array.from({ length: HeroImage.length }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'size-2.5 rounded-full bg-neutral-300',
              index === current - 1 && 'bg-primary-300'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
