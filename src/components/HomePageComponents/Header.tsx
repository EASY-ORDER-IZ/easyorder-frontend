import { Button } from '@/components/ui/button/button';
import bb from '../../assets/images/bb.png';
import { Separator } from '@/components/ui/separator';
import Counter from '@/hooks/counter';
import Pailroots from '../../assets/svg/Pailroots';
import Collecttive from '@/assets/svg/Collecttive';
import Watan from '../../assets/svg/Watan';
import aa from '../../assets/images/rula.png';
const Header = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between px-5 py-4">
        <div className="gap flex flex-col gap-14">
          <div className="flex max-w-[60%] flex-col items-center gap-4">
            <span className="text-text-primary text-title align-middle leading-14 font-bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </span>
            <span className="button-text text-text-secondary">
              Browse through our diverse range of meticulously crafted garments, designed to bring
              out your individuality and cater to your sense of style.
            </span>
          </div>
          <div className="flex max-w-[31%]">
            <Button variant="primary" title="Shop Now!"></Button>
          </div>
          <div className="flex w-full gap-5">
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
        <div className="max-w-[60%]">
          <img src={bb} className="hidden object-cover lg:flex" />
        </div>
        <div className=""></div>
      </div>
      <div className="bg-text-secondary grid grid-cols-2 items-center gap-6 p-6 lg:flex lg:justify-evenly lg:gap-0">
        <Pailroots />
        <Collecttive />
        <Watan />
        <img src={aa} />
      </div>
    </>
  );
};

export default Header;
