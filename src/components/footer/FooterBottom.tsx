import visa from '../../assets/images/visa.png';
import paypal from '../../assets/images/paypal.png';
import applepay from '../../assets/images/applepay.png';
import googlepay from '../../assets/images/googlepay.png';
import badge from '../../assets/images/badge.png';
const FooterBottom = () => {
  return (
    <div className="lg:w-305 w-89 h-15 pl-10 lg:pl-32 flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <p className="text-sm text-brand-text">Shop.co © 2000–2023. All Rights Reserved</p>
      <div className="flex w-70 h-7.5 items-center gap-3">
        <img src={visa} alt="Visa" className="h-7.6 w-11.5" />
        <img src={badge} alt="PayPal" className="h-7.5 w-11.5" />
        <img src={paypal} alt="Apple Pay" className="h-7.5 w-11.5" />
        <img src={applepay} alt="Google Pay" className="h-7.5 w-11.5" />
        <img src={googlepay} alt="Google Pay" className="h-7.5 w-11.5" />
      </div>
    </div>
  );
};
export default FooterBottom;
