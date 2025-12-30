import CommentSection from '@/components/customercomments/CommentSection';
import HeroSection from '@/components/HeroSection';
import { Footer } from '@/components/HomePageComponents/footer';
import { footer1 } from '../assets/icons';
import PageSection from '@/layout/PageSection';
import ProductBar from '@/components/HomePageComponents/ProductBar';
import { cate, newClothes, topSelling } from '@/store/dummmyData';
import CategoryBar from '@/components/HomePageComponents/CategoryBar';
import Full from '@/layout/Full';

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col gap-22 overflow-visible">
      <PageSection>
        <HeroSection />
      </PageSection>
      <PageSection>
        <ProductBar array={newClothes} title="New In" />
      </PageSection>
      <PageSection>
        <ProductBar array={topSelling} title="Top Selling" />
      </PageSection>
      <PageSection>
        <CategoryBar array={cate} title="Shop by category" />
      </PageSection>
      <PageSection>
        <CommentSection />
      </PageSection>

      <Full>
        <Footer src={footer1} alt="Footer Background" className="h-[363px]" />
      </Full>
    </div>
  );
};

export default HomePage;
