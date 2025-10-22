import { FooterBrand, FooterColumn, FooterBottom, NewsletterLogic } from './index';

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-55 lg:pt-45">
      <div className="relative flex w-full flex-col items-center justify-between gap-3 gap-20 bg-white">
        <div className="flex items-center justify-center">
          <NewsletterLogic />
        </div>
        <div className="relative flex w-full flex-col items-center justify-between gap-3 p-4">
          <div className="bg-background-100 flex w-[95%] max-w-306 flex-col items-center justify-between gap-13 lg:flex-row lg:gap-0">
            <div className="mr-10 lg:mr-0 lg:w-71">
              <FooterBrand />
            </div>
            <div className="grid grid-cols-2 justify-center gap-10 gap-y-10 text-left md:w-200 md:grid-cols-4">
              <FooterColumn title="Company" items={['About', 'Features', 'Forks']} />
              <FooterColumn
                title="Help"
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
                title="Resources"
                items={['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist']}
              />
            </div>
          </div>

          <div className="flex w-full justify-center">
            <div className="bg-text-400 h-[1px] w-89 md:w-220 lg:w-306" />
          </div>

          <FooterBottom />
        </div>
      </div>
    </div>
  );
};
export default Footer;
