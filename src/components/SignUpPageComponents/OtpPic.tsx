import { OTP_img } from '@/assets/icons';
const OTPPic = () => {
  return (
    <div className="hidden h-full w-full lg:flex">
      <img src={OTP_img} className="object-cover" />
    </div>
  );
};

export default OTPPic;
