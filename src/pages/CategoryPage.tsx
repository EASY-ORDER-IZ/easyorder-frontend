import FliterComponent from '@/components/FliterComponent';
import BreadCrumbComponent from '@/components/BreadCrumbComponent';
import { useParams } from 'react-router-dom';
const CategoryPage = () => {
  const { title } = useParams();

  return (
    <div className="px-20">
      <div className="h-6"></div>
      <div>
        <BreadCrumbComponent cate={title} />
      </div>
      <FliterComponent />
    </div>
  );
};
export default CategoryPage;
