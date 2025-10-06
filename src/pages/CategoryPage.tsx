import BreadCrumbComponent from '@/components/BreadCrumbComponent';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { title } = useParams();
  return (
    <div>
      <BreadCrumbComponent cate={title} />
    </div>
  );
};

export default CategoryPage;
