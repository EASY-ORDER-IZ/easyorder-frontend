import { Button } from '../ui/button/button';
import Logo from '../Logo';
import Xlogo from '../../assets/images/Xlogo.png';
import face from '../../assets/images/Facebooklogo.png';
import insta from '../../assets/images/logoinstagram.png';
import git from '../../assets/images/logogithub.png';

const FooterBrand = () => {
  return (
    <div className="flex flex-col gap-[32px] items-start ">
      <Logo className="w-[134px] h-[32px]" />
      <p className="text-sm text-brand-text w-[248px] h-[91px]">
        We have clothes that suit your style and which you’re proud to wear. From women to men.
      </p>
      <div className="flex justify-between w-48 h-28">
        <Button variant="acc" size="icon">
          <img src={Xlogo} alt="X logo" className="w-[11px] h-[9px]" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={face} alt="Facebook logo" className="w-[28px] h-[28px]" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={insta} alt="Instagram logo" className="w-[13px] h-[13px]" />
        </Button>
        <Button variant="acc" size="icon">
          <img src={git} alt="GitHub logo" className="w-[12px] h-[12px]" />
        </Button>
      </div>
    </div>
  );
};
export default FooterBrand;
