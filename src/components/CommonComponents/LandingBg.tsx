import { type HTMLAttributes } from 'react';
import landingbg from '../assets/images/LandingBg.png';
type PropsType = HTMLAttributes<HTMLDivElement> & {
  wrapperClassName?: string;
};

const LandingBg = (props: PropsType) => {
  return (
    <div className={props.wrapperClassName}>
      <img src={landingbg} className={props.className} />
    </div>
  );
};

export default LandingBg;
