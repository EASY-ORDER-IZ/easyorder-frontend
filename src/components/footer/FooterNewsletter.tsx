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
    <div className="bg-text-400 text-footer-text rounded-1xl flex h-74 w-90 flex-col items-center justify-between gap-4 px-4 py-6 md:h-45 md:w-230 md:flex-row md:px-16 md:py-9 lg:w-306 lg:gap-0">
      <h1 className="leading-h1 h-26 w-75 text-left text-lg font-bold md:w-137 lg:h-24">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="flex w-112 flex-col items-center gap-3">
        <div className="relative">
          <img
            src={mailicon}
            alt=""
            className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 opacity-70"
          />
          <Input
            type="email"
            value={email}
            variant="footer"
            onChange={(e) => setEmail && setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
        <Button
          variant="primary"
          onClick={handleSubscribe}
          className="rounded-7xl text-list h-10 w-77 lg:h-12 lg:w-112 lg:px-4 lg:py-3"
        >
          Subscribe to our Newsletter
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
