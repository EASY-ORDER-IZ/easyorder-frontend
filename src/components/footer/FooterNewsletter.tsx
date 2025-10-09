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
    <div className="bg-footer-bg text-footer-text rounded-[20px] lg:w-278 sm:w-81 px-4 py-8 lg:px-16 lg:py-9 sm:h-64 lg:h-45 flex flex-col lg:flex-row sm:gap-4 lg:gap-0 items-center justify-between">
      <h1 className="font-integral font-bold text-center lg:text-left text-[32px] leading-[36px] w-74 h-26 lg:text-9 lg:leading-10 lg:w-138 lg:h-23">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="flex flex-col  items-center gap-3 w-full lg:w-87 ">
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
          className="w-70 h-5 lg:w-79 lg:h-10 lg:px-4 lg:py-3 rounded-16 text-sm lg:text-base "
        >
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
