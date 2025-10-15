import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { NavLink } from 'react-router-dom';
interface Props {
  cate?: string;
}

const BreadCrumbComponent = ({ cate }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <NavLink className="text-md leading-[100%] opacity-60" to="/">
              Home
            </NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {cate && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-md leading-[100%] capitalize">{cate}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
