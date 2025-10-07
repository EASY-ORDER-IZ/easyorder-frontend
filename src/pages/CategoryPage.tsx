import FliterComponent from '@/components/FilterComponents/Filter';
import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import { useParams } from 'react-router-dom';
const CategoryPage = () => {
  const { title } = useParams();

  return (
    <div className="flex flex-col gap-5 px-20">
      <div className="h-6"></div>
      <div>
        <BreadCrumbComponent cate={title} />
      </div>
      <FliterComponent />
    </div>
  );
};
export default CategoryPage;
