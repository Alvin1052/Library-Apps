import type { ReviewType } from '@/types/bookTypes';
import { format } from 'date-fns';
import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
const Reviews = ({
  reviews,
  rating,
  reviewCount,
}: {
  reviews: ReviewType[];
  rating: number;
  reviewCount: number;
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const numberDisplay = 6;

  const remainingReview = reviews.length - numberDisplay * pageNumber;

  const handleLoadMore = () => setPageNumber((prev: number) => prev + 1);
  return (
    <div className='flex flex-col gap-4.5'>
      {/* Title */}
      <div className='flex flex-col gap-3'>
        <div className='text-display-lg font-extrabold'>Review</div>
        <div className='flex gap-1 items-center'>
          <Star className='fill-amber-500 text-amber-500 size-6' />
          <span className='text-xl font-extrabold'>
            {rating} <span>({reviewCount} Ulasan)</span>
          </span>
        </div>
      </div>
      {/* Reviews */}
      <div className='grid grid-cols-2 gap-4'>
        {reviews.slice(0, 6).map((review) => (
          <ReviewCard key={review.id} data={review} />
        ))}
      </div>
      <div className='flex-center'>
        {remainingReview > 0 && (
          <Button
            variant={'ghost'}
            size={'buttonmore'}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Reviews;

const ReviewCard = ({ data }: { data: ReviewType }) => {
  return (
    <div className='flex flex-col gap-4 max-w-[590px] w-full shadow-lg  rounded-2xl p-4'>
      {/* Profile */}
      <div className='flex items-center gap-3  '>
        <div className='w-16 h-16 rounded-full bg-neutral-500 flex-center'>
          {data.id}
        </div>
        <div className='flex flex-col '>
          <div className='text-lg font-extrabold'>{data.user.name}</div>
          <div className='text-md font-regular'>{`${format(
            data.createdAt,
            'dd MMMM yyyy, HH:mm'
          )}`}</div>
        </div>
      </div>
      {/* Review */}
      <div className='flex flex-col gap-2'>
        <div className='flex gap-0.5 '>
          {Array(data.star)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                className='fill-amber-500 text-amber-500 size-6'
              />
            ))}
        </div>
        <div className='text-md font-semibold text-neutral-950'>
          {data.comment}
        </div>
      </div>
    </div>
  );
};
