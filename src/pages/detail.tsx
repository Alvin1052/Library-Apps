import HeroDetail from '@/components/Details/hero';
import Header from '@/components/main/header';
import { useParams } from 'react-router-dom';
import { Divider } from './home';
import Reviews from '@/components/Details/review';
import { useQuery } from '@tanstack/react-query';
import { getBooksById } from '@/services/services';

import Footer from '@/components/main/footer';
import RelatedBooks from '@/components/Details/relatedbooks';

const Detail = () => {
  const { booksId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['book', booksId],
    queryFn: async () =>
      await getBooksById(Number(booksId)).then((res) => res.data),
  });

  if (isLoading) return <div>Loading</div>;
  console.log(data);
  return (
    <div>
      <Header />
      <div className='custom-container pt-12 pb-[118px] flex flex-col gap-16'>
        <HeroDetail BookDetail={data} />
        <Divider />
        <Reviews
          reviews={data.reviews}
          rating={data.rating}
          reviewCount={data.reviewCount}
        />
        <Divider />
        <RelatedBooks categoryId={data.categoryId} />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
