import { getAuthor, getBooksByAuthor } from '@/services/services';
import type { ListBooksbyAuthorType } from '@/types/bookTypes';
import {
  useQueries,
  useQuery,
  type UseQueryResult,
} from '@tanstack/react-query';
import { User2Icon } from 'lucide-react';

interface AuthorType {
  id: number;
  name: string;
}

const ListAuthor = () => {
  const AuthorsQuery = useQuery({
    queryKey: ['authors-with-books'],
    queryFn: async () => await getAuthor().then((res) => res.data.authors),
  });

  const BookQuery = useQueries({
    queries: (AuthorsQuery.data || []).map((author: AuthorType) => ({
      queryKey: ['authorbook', author.id],
      queryFn: async () =>
        await getBooksByAuthor(author.id).then((res) => res.data),
      enabled:
        AuthorsQuery.status === 'success' && AuthorsQuery.data.length > 0,
    })),
  }) as UseQueryResult<ListBooksbyAuthorType, unknown>[];

  const BooksByAuthors = (AuthorsQuery.data ?? []).map(
    (author: AuthorType, i: number) => ({
      author: author,
      books: BookQuery[i]?.data?.books ?? [],
    })
  );

  if (AuthorsQuery.isLoading) return <p>Loading authors…</p>;
  if (AuthorsQuery.isError) return <p>Failed to load authors.</p>;
  return (
    <div className='space-y-10'>
      <div className='text-display-lg font-extrabold'>Popular Author</div>

      <div className='flex gap-5 flex-wrap '>
        {BooksByAuthors.slice(0, 4).map((list: ListBooksbyAuthorType) => (
          <ProfileCard list={list} key={list.author.id} />
        ))}
      </div>
    </div>
  );
};

export default ListAuthor;

const ProfileCard = ({ list }: { list: ListBooksbyAuthorType }) => {
  return (
    <div className='flex gap-4 items-center border rounded-2xl p-4 max-w-[285px] w-full'>
      <User2Icon size={81} className='rounded-full border' />
      <div className='flex flex-col gap-0.5  overflow-hidden '>
        <div className='truncate text-lg font-bold'>{list.author.name}</div>
        <div className='flex gap-1.5 items-center'>
          <img src='/icons/BookMarked.svg' alt='book' />
          <span className='text-md font-medium'>
            {list.books.length} <span>books</span>
          </span>
        </div>
      </div>
    </div>
  );
};
