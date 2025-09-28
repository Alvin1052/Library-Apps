import { getRecommendBook } from '@/services/services';
import type { BookTypes } from '@/types/bookTypes';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useState } from 'react';

const ListBook = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['Recommended listbook'],
    queryFn: async () => await getRecommendBook().then((res) => res.data),
  });

  const [pageNumber, setPageNumber] = useState<number>(1);

  const numberDisplay = pageNumber * 5;

  if (isLoading) return <div>Loading</div>;

  const listBook = data.books;

  const remainingReview = listBook.length - numberDisplay;

  const handleLoadMore = () => setPageNumber((prev: number) => prev + 1);

  return (
    <div className='flex flex-col gap-10'>
      <div className='text-display-lg font-bold'>Recommendation</div>
      <div className='flex gap-5 flex-wrap'>
        {listBook.slice(0, numberDisplay).map((book: BookTypes) => (
          <Link to={'/books/' + book.id} key={book.id}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
      {remainingReview > 0 && (
        <div className='flex-center'>
          <Button variant='ghost' size={'buttonmore'} onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListBook;

const BookCard = ({ book }: { book: BookTypes }) => {
  return (
    <div className=' max-w-[224px] rounded-2xl shadow-lg'>
      <img
        src={book.coverImage}
        alt={book.title}
        className='h-[336px] object-cover rounded-t-2xl'
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
