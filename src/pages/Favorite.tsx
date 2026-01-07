import BreadCrumbComponent from '@/components/FilterComponents/BreadCrumb';
import { getAllFav } from '@/hooks/useFav';
import React, { useEffect, useState } from 'react';
import CardItem from '../components/CommonComponents/CardItem/CardItem.tsx';
const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setFavorite(getAllFav('favorites'));
  }, []);
  return (
    <div className="px-22">
      <BreadCrumbComponent cate="favorite" />
      <div className="mt-4 flex flex-wrap gap-4">
        {favorite.length === 0 && <p>No favorites yet.</p>}
        {favorite.map((item) => (
          <CardItem
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            discount={item.discount}
            rating={item.rating}
            sale={item.sale}
            heart={item.fav}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
