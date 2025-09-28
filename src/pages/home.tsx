import Category from '@/components/main/category';
import Footer from '@/components/main/footer';
import Header from '@/components/main/header';
import Hero from '@/components/main/hero';
import ListAuthor from '@/components/main/ListAuthor';
import ListBook from '@/components/main/listbook';
import { cn } from '@/lib/utils';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='custom-container pt-12 pb-[116px]   flex flex-col gap-12'>
        <Hero />
        <Category />
        <ListBook />
        <Divider />
        <ListAuthor />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        `w-full border  rounded-full border-neutral-300 `,
        className
      )}
    />
  );
};
