import { getProfile } from '@/services/services';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '../ui/button';
import ShoppingCart from './shoppingcart';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isToken = localStorage.getItem('token');

  if (isToken === '' || isToken === null) {
    navigate('/login');
  }

  const { data, isLoading } = useQuery({
    queryKey: ['Profile'],
    queryFn: async () => await getProfile().then((res) => res?.data),
  });

  const ProfileUser = data?.profile;

  if (isLoading) return <div>Loading</div>;

  const HandleCart = () => setIsOpen(() => !isOpen);

  return (
    <div
      className={cn(
        'w-full h-[80px]   flex-center shadow-lg  sticky top-0 z-50 bg-white',
        className
      )}
    >
      <div className='flex justify-between items-center w-full custom-container '>
        <div className='flex gap-3.75 items-center'>
          <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
          <div className='text-display-md font-extrabold text-base-black'>
            Booky
          </div>
        </div>
        {/* Search Bar */}
        <div className='flex gap-1.5 items-center border border-neutral-300 rounded-full px-4 py-2 max-w-[500px] h-11 w-full'>
          <Search className='text-neutral-600 w-5 h-5' />
          <input type='text' placeholder='Search book' className='w-full' />
        </div>

        {/* Right */}
        <div className='flex justify-between items-center gap-6'>
          {/* Profile */}
          {isToken ? (
            <div className='flex items-center gap-3  '>
              <Button
                variant={'ghost'}
                onClick={HandleCart}
                className='border-0'
              >
                {isOpen ? <ShoppingCart /> : 'Open Cart'}

                <ShoppingCart />
              </Button>
              <div className='w-12 h-12 rounded-full bg-neutral-500 flex-center'>
                {ProfileUser.id}
              </div>
              <div className='flex flex-col '>
                <div className='text-lg font-semibold'>{ProfileUser.name}</div>
              </div>
            </div>
          ) : (
            // Register and Login
            <div className='flex items-center gap-4'>
              <Link to={'/login'}>
                <Button
                  variant={'ghost'}
                  className='w-[163px] text-md font-bold '
                >
                  Login
                </Button>
              </Link>
              <Link to={'/register'}>
                <Button
                  variant={'ghost'}
                  className='w-[163px] text-md font-bold bg-primary-300 text-white'
                >
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
