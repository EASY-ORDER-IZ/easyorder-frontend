import NewsletterLogic from '@/components/footer/NewsletterLogic';
import FooterBrand from './FooterBrand';
import FooterColumn from './FooterColumn';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="absolute left-1/2 -translate-x-1/2 -top-[90px] z-10">
        <NewsletterLogic />
      </div>
      <div className="flex flex-col bg-footerbottom-bg relative pt-[200px] lg:pt-[180px] pb-[10px] lg:pb-[10px] max-w-[1440px] w-full mx-auto">
        <div className="max-w-[1240px] w-full mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6  mb-[10px] lg:gap-0 px-4 sm:px-6 lg:pl-20">
          <div className="flex justify-center lg:justify-start w-full lg:w-[248px] lg:h-[220px]">
            <FooterBrand />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 text-center lg:text-left w-full lg:w-[820px]  ">
            <FooterColumn
              title="Company"
              items={['About', 'Features', 'Works']}
              className="w-[104px] h-[177px]"
            />
            <FooterColumn
              title="HELP"
              items={[
                'Customer Support',
                'Delivery Details',
                'Terms & Conditions',
                'Privacy Policy',
              ]}
              className="w-[136px] h-[177px]"
            />
            <FooterColumn
              title="FAQ"
              items={['Account', 'Manage Deliveries', 'Orders', 'Payments']}
              className="w-[149px] h-[177px]"
            />
            <FooterColumn
              title="RESOURCES"
              items={['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist']}
              className="w-[149px] h-[177px]"
            />
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-start mb-[20px] mt-0">
          <div className="w-[358px] lg:w-[1068px] h-[1px] bg-[#0000001A] mx-auto lg:ml-[130px]"></div>
        </div>
        <FooterBottom />
      </div>
    </div>
  );
};
export default Footer;
