import { FooterBrand, FooterColumn, FooterBottom, NewsletterLogic } from './index';

const Footer = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="absolute left-1/2 -translate-x-1/2 -top-[90px] z-10">
        <NewsletterLogic />
      </div>
      <div className="flex flex-col bg-footerbottom-bg relative pt-[12.5rem] lg:pt-[11.25rem] pb-[0.625rem] lg:pb-[0.625rem]w-full">
        <div className="max-w-[77.5rem] w-full mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6  mb-[0.625rem] lg:gap-0 px-4 sm:px-6 lg:pl-20">
          <div className="flex justify-center lg:justify-start w-full lg:w-[15.5rem] lg:h-[13.75rem]">
            <FooterBrand />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 text-center lg:text-left w-full lg:w-[51.25rem] ">
            <FooterColumn
              title="Company"
              items={['About', 'Features', 'Works']}
              className="w-[6.5rem] h-[11.0625rem]"
            />
            <FooterColumn
              title="HELP"
              items={[
                'Customer Support',
                'Delivery Details',
                'Terms & Conditions',
                'Privacy Policy',
              ]}
              className="w-34 h-44.5"
            />
            <FooterColumn
              title="FAQ"
              items={['Account', 'Manage Deliveries', 'Orders', 'Payments']}
              className="w-37 h-44"
            />
            <FooterColumn
              title="RESOURCES"
              items={['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist']}
              className="w-37 h-44"
            />
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-start mb-[20px] mt-0">
          <div className="w-89 lg:w-267 h-[1px] bg-[#0000001A] mx-auto lg:ml-[130px]"></div>
        </div>
        <FooterBottom />
      </div>
    </div>
  );
};
export default Footer;
