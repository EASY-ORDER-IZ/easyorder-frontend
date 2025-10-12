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
    <div className="bg-footer-bg text-footer-text rounded-6 flex h-74 w-90 flex-col items-center justify-between gap-4 px-4 py-6 lg:h-45 lg:w-310 lg:flex-row lg:gap-0 lg:px-16 lg:py-9">
      <h1 className="lg:font-integral text-h2 leading-h1 h-26 w-75 text-left font-bold lg:h-24 lg:w-137">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="flex w-87 flex-col items-center gap-3">
        <div className="relative">
          <img
            src={mailicon}
            alt=""
            className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 opacity-70"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail && setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
        <Button
          variant="newslatter"
          onClick={handleSubscribe}
          className="h-10 w-77 rounded-[62px] text-sm lg:h-12 lg:w-78 lg:px-4 lg:py-3"
        >
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
