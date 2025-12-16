import { Button } from '@/components/ui/button/button';
import bb from '../assets/images/bb.png';
import { Separator } from '@/components/ui/separator';
import Counter from '@/hooks/counter';
import Pailroots from '../assets/svg/Pailroots';
import Collecttive from '@/assets/svg/Collecttive';
import Watan from '../assets/svg/Watan';
import aa from '../assets/images/rula.png';
import star from '../assets/images/star.png';
const Header = () => {
  return (
    <>
      <div className="">
        <div className="flex w-full items-center justify-between px-5 py-4 lg:py-0">
          <div className="flex flex-col items-center gap-5 px-14 lg:items-start">
            <div className="flex w-full flex-col items-center justify-center gap-4 lg:max-w-[62%]">
              <span className="text-text-primary text-title leading-14 font-bold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </span>
              <span className="button-text text-text-secondary">
                Browse through our diverse range of meticulously crafted garments, designed to bring
                out your individuality and cater to your sense of style.
              </span>
            </div>
            <div className="flex w-full max-w-[80%] justify-center lg:max-w-[27%]">
              <Button variant="primary" title="Shop Now!"></Button>
            </div>
            <div className="flex w-full justify-center gap-5 lg:justify-start">
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
                  International Brands
                </span>
              </div>
              <Separator orientation="vertical" className="h-auto w-auto" />
              <div className="flex flex-col items-center justify-center">
                <Counter end={30000} />
                <span className="lg:text-input text-text-secondary leading-5">
                  International Brands
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[65%]">
            <img src={bb} className="hidden object-cover lg:flex lg:h-[600px] lg:w-[700px]" />
            <div className="">
              <img src={star} alt="" className="lg:absolute lg:top-1 lg:right-5" />
              <img
                src={star}
                alt=""
                className="lg:absolute lg:top-15 lg:right-25 lg:h-[70px] lg:w-[70px]"
              />
            </div>
          </div>
          <div className="hidden w-20 lg:flex"></div>
        </div>

        <div className="bg-text-secondary">
          <div className="grid grid-cols-2 items-center p-6 lg:flex lg:justify-evenly lg:p-6">
            <div className="flex justify-center">
              <Pailroots />
            </div>
            <div className="flex justify-center">
              <Collecttive />
            </div>
            <div className="flex justify-center">
              <Watan />
            </div>
            <div className="flex justify-center">
              <img className="max-w-[82%]" src={aa} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
