import { Button } from '@/components/ui/button/button';
import bb from '../assets/images/bb.png';
import { Separator } from '@/components/ui/separator';
import Counter from '@/hooks/counter';
import Pailroots from '../assets/svg/Pailroots';
import Collecttive from '@/assets/svg/Collecttive';
import Watan from '../assets/svg/Watan';
import Rula from '@/assets/svg/Rula';
import star from '../assets/images/star.png';
// const HeroSection = () => {
import Full from '@/layout/Full';

const HeroSection: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <div className="flex w-full items-center justify-between lg:py-0">
          <div className="flex flex-col items-center gap-5 px-14 lg:items-start">
            <div className="flex w-full flex-col items-center justify-center gap-4 lg:max-w-[89%]">
              <span className="text-text-primary text-title font-poppins leading-17 font-extrabold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </span>
              <span className="text-text-secondary font-poppins text-table-sm">
                Browse through our diverse range of meticulously crafted garments, designed to bring
                out your individuality and cater to your sense of style.
              </span>
            </div>
            <div className="mt-5 flex w-full max-w-[80%] justify-center lg:max-w-[35%]">
              <Button
                title="Shop Now!"
                className="rounded-full text-sm text-white"
                variant="primary"
              />
            </div>
            <div className="mt-12 flex w-full justify-center gap-5 lg:justify-start">
              <div className="flex flex-col items-center justify-center">
                <Counter end={200} />
                <span className="lg:text-input text-text-secondary leading-5">
                  International Brands
                </span>
              </div>
              <Separator orientation="vertical" className="h-auto w-auto" />
              <div className="flex flex-col items-center justify-center">
                <Counter end={2000} />
                <span className="md:text-input text-text-secondary leading-5">
                  High-Quality Products
                </span>
              </div>
              <Separator orientation="vertical" className="h-auto w-auto" />
              <div className="flex flex-col items-center justify-center">
                <Counter end={30000} />
                <span className="lg:text-input text-text-secondary leading-5">Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="relative max-w-[65%]">
            <img src={bb} className="hidden object-cover lg:block lg:h-[37.5rem] lg:w-[40.6rem]" />
            <div className="hidden lg:block">
              <img src={star} alt="" className="absolute top-1 right-0" />
              <img src={star} alt="" className="absolute top-17 right-23 h-[4rem] w-[3.5rem]" />
            </div>
          </div>
          <div className="hidden w-20 lg:flex"></div>
        </div>
      </div>
      <Full>
        <div className="bg-background-900 w-full py-6 md:py-10">
          <div className="flex items-center justify-around overflow-x-auto">
            <Pailroots />
            <Collecttive />
            <Watan />
            <Rula />
          </div>
        </div>
      </Full>
    </>
  );
};

export default HeroSection;
