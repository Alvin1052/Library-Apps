import SocialMedia from '../SocialMedia';

const Footer = () => {
  return (
    <div className='border-t border-neutral-300'>
      <div className='custom-container flex flex-col justify-center items-center gap-10 py-20 '>
        <div className=' flex-center flex-col gap-5.5 '>
          {/* Logo */}
          <div className='flex gap-3.75 items-center'>
            <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
            <div className='text-display-md font-extrabold text-base-black'>
              Foody
            </div>
          </div>
          {/* Description */}
          <p className='text-md font-semibold'>
            Discover inspiring stories & timeless knowledge, ready to borrow
            anytime. Explore online or visit our nearest library branch.
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-md font-extrabold'>Follow on Social Media</div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
