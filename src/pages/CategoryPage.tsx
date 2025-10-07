import FliterComponent from '@/components/FilterComponents/Filter';
import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import { useParams } from 'react-router-dom';
import Sort from '@/components/FilterComponents/Sort';
const CategoryPage = () => {
  const { title } = useParams();

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="h-0 w-full border opacity-10"></div>
        <div className="flex w-full gap-4">
          <div className="hidden flex-col gap-5 lg:flex">
            <BreadCrumbComponent cate={title} />
            <FliterComponent />
          </div>
          <div className="flex w-full flex-col pt-12">
            <Sort min={1} max={10} total={100} title={title} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
