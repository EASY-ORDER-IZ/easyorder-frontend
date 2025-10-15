import { Button } from '../ui/button/button';
import Xlogo from '../../assets/images/Xlogo.png';
import face from '../../assets/images/Facebooklogo.png';
import insta from '../../assets/images/logoinstagram.png';
import git from '../../assets/images/logogithub.png';
import Logo from '../CommonComponents/Logo';
import { NavLink } from 'react-router-dom';

const FooterBrand = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="items-canter flex flex-col justify-between gap-9">
        <Logo className="h-8 w-33.5" />
        <p className="text-brand-text w-62 text-sm">
          We have clothes that suit your style and which you’re proud to wear. From women to men.
        </p>
        <div className="flex w-48 justify-between">
          <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button variant="acc" size="icon">
              <img src={Xlogo} alt="X logo" className="h-2 w-3" />
            </Button>
          </NavLink>

          <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Button variant="acc" size="icon">
              <img src={face} alt="Facebook logo" className="h-7 w-7" />
            </Button>
          </NavLink>

          <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Button variant="acc" size="icon">
              <img src={insta} alt="Instagram logo" className="h-3 w-3" />
            </Button>
          </NavLink>

          <NavLink to="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="acc" size="icon">
              <img src={git} alt="GitHub logo" className="h-3 w-3" />
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default FooterBrand;
