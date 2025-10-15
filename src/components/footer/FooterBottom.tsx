import visa from '../../assets/images/visa.png';
import paypal from '../../assets/images/paypal.png';
import applepay from '../../assets/images/applepay.png';
import googlepay from '../../assets/images/googlepay.png';
import badge from '../../assets/images/badge.png';
const FooterBottom = () => {
  return (
    <div className="flex w-full justify-center lg:w-310">
      <div className="flex h-15 w-89 flex-col items-center justify-between md:w-[80%] md:flex-row lg:w-[95%]">
        <p className="text-brand-text text-sm">Shop.co © 2000–2023. All Rights Reserved</p>
        <div className="flex h-7.5 w-70 items-center gap-3">
          <img src={visa} alt="Visa" className="h-7.6 w-11.5" />
          <img src={badge} alt="PayPal" className="h-7.5 w-11.5" />
          <img src={paypal} alt="Apple Pay" className="h-7.5 w-11.5" />
          <img src={applepay} alt="Google Pay" className="h-7.5 w-11.5" />
          <img src={googlepay} alt="Google Pay" className="h-7.5 w-11.5" />
        </div>
      </div>
    </div>
  );
};
export default FooterBottom;
