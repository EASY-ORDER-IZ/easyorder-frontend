import { FooterBrand, FooterColumn, FooterBottom, NewsletterLogic } from './index';

const Footer = () => {
  return (
    <div className="relative w-full items-center justify-between bg-white">
      <div className="absolute -top-[90px] left-1/2 z-10 -translate-x-1/2">
        <NewsletterLogic />
      </div>
      <div className="bg-footerbottom-bg relative flex w-full flex-col items-center justify-between pt-50 pb-2.5 lg:pt-45">
        <div className="flex w-full max-w-310 flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
          <div className="flex w-full justify-center lg:h-55 lg:w-71 lg:justify-start">
            <FooterBrand />
          </div>
          <div className="grid w-full grid-cols-2 justify-between gap-10 gap-y-10 text-center lg:w-200 lg:grid-cols-4 lg:text-left">
            <FooterColumn
              title="Company"
              items={['About', 'Features', 'Forks']}
              className="h-44 w-26"
            />
            <FooterColumn
              title="HELP"
              items={[
                'Customer Support',
                'Delivery Details',
                'Terms & Conditions',
                'Privacy Policy',
              ]}
              className="h-44.5 w-34"
            />
            <FooterColumn
              title="FAQ"
              items={['Account', 'Manage Deliveries', 'Orders', 'Payments']}
              className="h-44 w-37"
            />
            <FooterColumn
              title="RESOURCES"
              items={['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist']}
              className="h-44 w-37"
            />
          </div>
        </div>
        <div className="mb-4 flex w-full justify-center">
          <div className="bg-background-600 h-[1px] w-89 lg:w-310" />
        </div>
        <FooterBottom />
      </div>
    </div>
  );
};
export default Footer;
