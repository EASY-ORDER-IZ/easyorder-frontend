import visa from '../../assets/images/visa.png';
import paypal from '../../assets/images/paypal.png';
import applepay from '../../assets/images/applepay.png';
import googlepay from '../../assets/images/googlepay.png';
import badge from '../../assets/images/badge.png';
const FooterBottom = () => {
  return (
    <div className="w-[1180px] h-[60px] pl-10 lg:pl-32 flex flex-col lg:flex-row justify-between items-start">
      <p className="text-sm text-brand-text">Shop.co © 2000–2023. All Rights Reserved</p>
      <div className="flex w-[281px] h-[30px] justify-between items-center">
        <img src={visa} alt="Visa" className="h-[30px] w-[46px]" />
        <img src={badge} alt="PayPal" className="h-[30px] w-[46px]" />
        <img src={paypal} alt="Apple Pay" className="h-[30px] w-[46px]" />
        <img src={applepay} alt="Google Pay" className="h-[30px] w-[46px]" />
        <img src={googlepay} alt="Google Pay" className="h-[30px] w-[46px]" />
      </div>
    </div>
  );
};
export default FooterBottom;
