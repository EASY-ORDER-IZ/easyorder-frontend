import { Button } from '../ui/button/button';
import Logo from '../Logo';
import Xlogo from '../../assets/images/Xlogo.png';
import face from '../../assets/images/Facebooklogo.png';
import insta from '../../assets/images/logoinstagram.png';
import git from '../../assets/images/logogithub.png';

const FooterBrand = () => {
  return (
    <div className="flex flex-col gap-9 items-start ">
      <Logo className="w-33.5 h-8" />
      <p className="text-sm text-brand-text w-62 h-23">
        We have clothes that suit your style and which you’re proud to wear. From women to men.
      </p>
      <div className="flex justify-between w-48 h-28">
        <Button variant="acc" size="icon">
          <img src={Xlogo} alt="X logo" className="w-3 h-2" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={face} alt="Facebook logo" className="w-7 h-7" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={insta} alt="Instagram logo" className="w-3 h-3" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={git} alt="GitHub logo" className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};
export default FooterBrand;
