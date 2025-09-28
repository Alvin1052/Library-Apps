import { Button } from '@/components/ui/button';
import Textbox from '@/components/ui/textbox';
import { useRegisterForms } from '@/hooks/useregisterform';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  const {
    register,
    formstate: { errors, isSubmitting },
    handleSubmit,
    onSubmit,
    isFailed,
    isSuccess,
    serverError,
  } = useRegisterForms();

  return (
    <div className='flex justify-center items-center h-screen w-screen '>
      <div className='w-100 flex flex-col gap-5'>
        {/* Logo   */}
        <div className='flex gap-4 items-center'>
          <img src='/icons/logo.svg' alt='logo' className='w-[33px] h-[33px]' />
          <p className='font-extrabold text-2xl'>Booky</p>
        </div>
        {/* Title */}
        <div className='flex flex-col gap-2'>
          <div className='text-display-md font-bold'>Register</div>
          <div className='text-md font-semibold'>
            Create your account to start borrowing books.
          </div>
        </div>

        <form
          className='flex gap-4 flex-col w-full '
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-0.5'>
            <p className='text-sm font-bold'>Name</p>
            <Textbox
              {...register('name')}
              id='name'
              placeholder='Name'
              type='text'
            />
            {errors.name && (
              <p className='text-[#ee1d52] font-medium'>
                {errors.name.message}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-0.5'>
            <p className='text-sm font-bold'>Email</p>
            <Textbox
              {...register('email')}
              id='email'
              placeholder='Email'
              type='text'
            />
            {errors.email && (
              <p className='text-[#ee1d52] font-medium'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-0.5'>
            <p className='text-sm font-bold'>Nomor Handphone</p>
            <Textbox
              {...register('phone')}
              id='phone'
              placeholder='Number Phone'
              type=''
            />{' '}
            {errors.phone && (
              <p className='text-[#ee1d52] font-medium'>
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-0.5'>
            <p className='text-sm font-bold'>Password</p>
            <Textbox
              {...register('password')}
              id='password'
              placeholder='Password'
              type='password'
            />
            {errors.password && (
              <p className='text-[#ee1d52] font-medium'>
                {errors.password.message}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-0.5'>
            <p className='text-sm font-bold'>Confirm Password</p>
            <Textbox
              {...register('confirmPassword')}
              id='confirmpassword'
              placeholder='Confirm Password'
              type='password'
            />{' '}
            {errors.confirmPassword && (
              <p className='text-[#ee1d52] font-medium'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div>
            {isSuccess && (
              <p className='text-green-300 font-medium'>Login Success</p>
            )}
            {isFailed && (
              <p className='text-[#ee1d52] font-medium'>{serverError}</p>
            )}
            <Button
              type='submit'
              variant={'default'}
              disabled={isSubmitting}
              className='w-full text-md font-bold'
            >
              Sign Up
            </Button>
          </div>
          <div className='flex justify-center'>
            <p className='text-md font-semibold'>
              Already have an account?{' '}
              <Link to='/login' className='text-md font-bold text-primary-300'>
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
