import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import React from 'react';

const Favorite = () => {
  return (
    <div className="px-22">
      <BreadCrumbComponent cate="favorite" />
      <div></div>
    </div>
  );
};

export default Favorite;
