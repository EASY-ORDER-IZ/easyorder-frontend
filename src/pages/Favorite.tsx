import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import React from 'react';

const Favorite = () => {
  const item = localStorage.getItem('favorite');

  return (
    <div className="px-22">
      <BreadCrumbComponent cate="favorite" />
      <div>{item}</div>
    </div>
  );
};

export default Favorite;
