import { Button } from '../ui/button/button';
import Logo from '../CommonComponents/Logo';
import Xlogo from '../../assets/images/Xlogo.png';
import face from '../../assets/images/Facebooklogo.png';
import insta from '../../assets/images/logoinstagram.png';
import git from '../../assets/images/logogithub.png';

const FooterBrand = () => {
  return (
    <div className="flex flex-col items-start gap-9">
      <Logo className="h-8 w-33.5" />
      <p className="text-brand-text h-23 w-62 text-sm">
        We have clothes that suit your style and which you’re proud to wear. From women to men.
      </p>
      <div className="flex h-28 w-48 justify-between">
        <Button variant="acc" size="icon">
          <img src={Xlogo} alt="X logo" className="h-2 w-3" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={face} alt="Facebook logo" className="h-7 w-7" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={insta} alt="Instagram logo" className="h-3 w-3" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={git} alt="GitHub logo" className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
export default FooterBrand;
