import { CategoryItems, type CategoryType } from '@/constants/category';
import type React from 'react';

const Category = () => {
  return (
    <div className='flex justify-between gap-4'>
      {CategoryItems.map((category: CategoryType) => (
        <CategoryCart key={category.name} {...category} />
      ))}
    </div>
  );
};

export default Category;

const CategoryCart: React.FC<CategoryType> = ({ ...Category }) => {
  return (
    <div className='flex-center gap-3 flex-col w-full bg-white drop-shadow-xl p-3 rounded-2xl '>
      <div className='w-full flex-center h-16 bg-primary-200 rounded-xl'>
        <img src={Category.src} alt={Category.alt} />
      </div>
      <p className='w-full text-md font-semibold'>{Category.name}</p>
    </div>
  );
};
