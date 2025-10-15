import { FooterBrand, FooterColumn, FooterBottom, NewsletterLogic } from './index';

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-55 lg:pt-45">
      <div className="relative w-full items-center justify-between bg-white">
        <div className="absolute -top-[90px] left-1/2 z-10 -translate-x-1/2">
          <NewsletterLogic />
        </div>
        <div className="bg-footerbottom-bg relative flex w-full flex-col items-center justify-between gap-4 p-4 pt-50 pb-2.5 lg:pt-45">
          <div className="flex w-full max-w-310 flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
            <div className="mr-10 lg:mr-0 lg:w-71">
              <FooterBrand />
            </div>
            <div className="grid grid-cols-2 justify-center gap-10 gap-y-10 text-left lg:w-200 lg:grid-cols-4">
              <FooterColumn title="Company" items={['About', 'Features', 'Forks']} />
              <FooterColumn
                title="HELP"
                items={[
                  'Customer Support',
                  'Delivery Details',
                  'Terms & Conditions',
                  'Privacy Policy',
                ]}
              />
              <FooterColumn
                title="FAQ"
                items={['Account', 'Manage Deliveries', 'Orders', 'Payments']}
              />
              <FooterColumn
                title="RESOURCES"
                items={['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist']}
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="bg-background-600 h-[1px] w-[95%] sm:w-[30%] lg:w-[95%]" />
          </div>

          <FooterBottom />
        </div>
      </div>
    </div>
  );
};
export default Footer;
