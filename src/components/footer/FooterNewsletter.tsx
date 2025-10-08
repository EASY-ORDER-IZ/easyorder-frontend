import { Input } from '../ui/input';
import { Button } from '@/components/ui/button/button';
import mailicon from '../../assets/images/emailLogo.png';

interface FooterNewsletterProps {
  email?: string;
  setEmail?: (email: string) => void;
  handleSubscribe?: () => void;
}

const FooterNewsletter = ({ email, setEmail, handleSubscribe }: FooterNewsletterProps) => {
  return (
    <div className="bg-footer-bg text-footer-text rounded-[20px] lg:w-[1112px] sm:w-[326px] px-4 py-[34px] lg:px-[64px] lg:py-[36px] sm:h-[255px] lg:h-[180px] flex flex-col lg:flex-row sm:gap-4 lg:gap-0 items-center justify-between">
      <h1 className="font-integral font-bold text-center lg:text-left text-[32px] leading-[35px] w-[297px] h-[105px] lg:text-[35px] lg:leading-[40px] lg:w-[551px] lg:h-[94px]">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="flex flex-col  items-center gap-[14px] w-full lg:w-[349px] ">
        <div className="relative ">
          <img
            src={mailicon}
            alt=""
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail && setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
        <Button
          variant="secondary"
          onClick={handleSubscribe}
          className="w-[279px] h-[18px] lg:w-[317px] lg:h-[40px] lg:px-[16px] lg:py-[12px] rounded-[62px] text-sm lg:text-base "
        >
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
