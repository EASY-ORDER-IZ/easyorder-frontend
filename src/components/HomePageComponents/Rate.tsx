import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { reviews } from '@/store/dummmyData';
import RateCard from './RateCard';

const Rate = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <div className="flex">
        <span className="title-text">What Our Happy Users Say!</span>
      </div>
      <div className="flex">
        <span className="desc-text">
          Smarter shopping, faster deals, and endless style — here’s why FirstChance is your
          ultimate shopping destination.
        </span>
      </div>
      <div className="flex w-full justify-center">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-[90%]"
        >
          <CarouselContent>
            {reviews.map((p, index) => (
              <CarouselItem key={index} className="basis-[47%] md:basis-[40%] lg:basis-[25%]">
                <RateCard id={p.id} name={p.name} comment={p.comment} rate={p.rate} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Rate;
