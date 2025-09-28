import { SocialMediaItems } from '@/constants/sosmed-items';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className='flex gap-4 '>
      {SocialMediaItems.map((item) => (
        <Link to={item.link} key={item.name}>
          <div className='flex size-10 items-center justify-center rounded-full border border-neutral-800 p-2.5 transition-all duration-300 ease-in-out hover:opacity-80'>
            <img
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className='size-5'
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
