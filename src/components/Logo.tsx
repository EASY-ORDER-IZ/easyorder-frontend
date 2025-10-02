import type { HTMLAttributes } from 'react';
import logo from '../assets/images/logo.png';
type PropsType = HTMLAttributes<HTMLDivElement>;

const Logo = (props: PropsType) => {
  return (
    <div>
      <img src={logo} className={props.className} />
    </div>
  );
};

export default Logo;
