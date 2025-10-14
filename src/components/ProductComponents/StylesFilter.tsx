import casual from '../../assets/images/img2.png';
import formal from '../../assets/images/img3.png';
import { cate } from '../../store/staticData';
import CategoryCard from './CategoryCard';

const StylesFilter = () => {
  return (
    <div className="rounded-1xl flex flex-col items-center justify-center gap-10 px-5 py-10">
      <span className="font-integral text-text flex max-w-60 text-center text-lg leading-[36px] font-bold sm:max-w-full">
        BROWSE BY dress STYLE
      </span>
      <div className="hidden sm:flex">
        <div className="category-card">
          <div className="A">
            <CategoryCard title="Casual" img={casual} />
          </div>
          <div className="B">
            <CategoryCard title="Formal" img={formal} />
          </div>
          <div className="C">
            <CategoryCard title="islamic" img={formal} />
          </div>
          <div className="D">
            <CategoryCard title="gym" img={casual} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:hidden">
        {cate.map((c) => {
          return <CategoryCard key={c.id} title={c.title} img={c.img} />;
        })}
      </div>
    </div>
  );
};

export default StylesFilter;
