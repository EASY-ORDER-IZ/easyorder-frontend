import CategoryCard from './CategoryCard';
import casual from '../assets/images/img2.png';
import formal from '../assets/images/img3.png';

const StylesFilter = () => {
  return (
    <div className="bg-filter-bg ml-5 flex w-120 flex-col gap-10 rounded-3xl px-13 py-10 text-center sm:ml-0 sm:w-auto sm:justify-center">
      <span className="font-integral text-text text-center text-[32px] leading-[100%] font-bold">
        BROWSE BY dress STYLE
      </span>
      <div className="hidden flex-col items-center justify-center gap-3 sm:flex">
        <div className="flex gap-4">
          <CategoryCard title="Casual" img={casual} link="/cate" />
          <CategoryCard title="Formal" img={formal} />
        </div>
        <div className="flex gap-4">
          <CategoryCard title="Islamic" img={formal} />
          <CategoryCard title="Gym" img={casual} />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:hidden">
        <CategoryCard title="Casual" img={casual} link="/cate" />
        <CategoryCard title="Formal" img={formal} />

        <CategoryCard title="Islamic" img={formal} />
        <CategoryCard title="Gym" img={casual} />
      </div>
    </div>
  );
};

export default StylesFilter;
