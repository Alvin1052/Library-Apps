import { Divider } from '@/pages/home';
import type { BookTypes } from '@/types/bookTypes';
import { Star } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Button } from '../ui/button';

const HeroDetail = ({ BookDetail }: { BookDetail: BookTypes }) => {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/' className='text-primary-300 '>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/category' className='text-primary-300 '>
              Category
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className='text-sm text-neutral-950'>
            {BookDetail.title}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Contents */}
      <div className='flex-center gap-9 w-full  '>
        {/* Cover */}
        <div className='flex-center  w-full rounded-2xl bg-neutral-200 '>
          <img
            src={BookDetail.coverImage}
            alt={BookDetail.title}
            className='h-[482px] w-[321px]  object-cover rounded-2xl m-2'
          />
        </div>
        {/* Details */}
        <div className='flex flex-col gap-5 max-w-[827px]'>
          {/* Upper */}
          <div className='flex flex-col gap-5.5'>
            {/* Title */}
            <div className='flex flex-col gap-1'>
              <div className='text-sm font-bold text-neutral-950 px-2 border border-neutral-300 w-fit rounded-[6px]'>
                {BookDetail.category.name}
              </div>
              <div className='text-display-sm font-bold'>
                {BookDetail.title}
              </div>
              <div className='text-md font-semibold'>
                {BookDetail.author.name}
              </div>
              <div className='flex gap-2 items-center'>
                <Star className='text-[#FFAB0D] fill-[#FFAB0D]' />
                <span className='font-bold text-md'>
                  {BookDetail.rating.toFixed(1)}
                </span>
              </div>
            </div>
            {/* Properties */}
            <div className='flex gap-5'>
              {/* Rating */}
              <div className='min-w-[102px]'>
                <div className='text-display-xs font-bold'>
                  {BookDetail.rating}
                </div>
                <div className='text-md font-medium'>Rating</div>
              </div>
              <Divider className='w-[1px] h-full ' />
              {/* Review Count */}
              <div className='min-w-[102px]'>
                <div className='text-display-xs font-bold'>
                  {BookDetail.reviewCount}
                </div>
                <div className='text-md font-medium'>Review</div>
              </div>
              <Divider className='w-[1px] h-full' />
              {/* Years */}
              <div className='min-w-[102px]'>
                <div className='text-display-xs font-bold'>
                  {BookDetail.publishedYear}
                </div>
                <div className='text-md font-medium'>Published Year</div>
              </div>
            </div>
          </div>
          <Divider />
          {/* Description */}
          <div className='flex flex-col gap-1'>
            <div className='text-xl font-bold'>Description</div>
            <div className='text-md font-medium'>{BookDetail.description}</div>
          </div>
          {/* Button */}
          <div className='flex gap-3'>
            <Button variant={'ghost'} className='w-50'>
              Add to Cart
            </Button>
            <Button variant={'default'} className='w-50'>
              Borrow Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
