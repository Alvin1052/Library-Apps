import { getBooksByFilter } from '@/services/services';
import type { BookTypes } from '@/types/bookTypes';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RelatedBooks = ({ categoryId }: { categoryId: number }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['listbook', categoryId],
    queryFn: async () =>
      await getBooksByFilter({ categoryId }).then((res) => res.data),
  });

  if (isLoading) return <div>Loading</div>;

  const listBook = data.books;
  console.log('data', data);
  return (
    <div className='flex flex-col gap-10'>
      <div className='text-display-lg font-bold'>Recommendation</div>
      <div className='flex gap-5 flex-wrap'>
        {listBook.slice(0, 5).map((book: BookTypes) => (
          <Link to={'/books/' + book.id} key={book.id}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBooks;

const BookCard = ({ book }: { book: BookTypes }) => {
  return (
    <div className=' max-w-[224px] rounded-2xl shadow-lg'>
      <img
        src={book.coverImage}
        alt={book.title}
        className='h-[336px] w-full object-cover rounded-t-2xl'
      />
      <div className='p-4 flex flex-col gap-1 overflow-hidden'>
        <p className='text-lg font-bold truncate'>{book.title}</p>
        <p className='text-md font-medium truncate'>{book.author.name}</p>
        <div className='flex gap-2 items-center'>
          <Star className='text-[#FFAB0D] fill-[#FFAB0D]' />
          <span className='font-bold text-md'>{book.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};
