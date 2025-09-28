import { Button } from '@/components/ui/button';
import Textbox from '@/components/ui/textbox';
import { useLoginForms } from '@/hooks/useloginform';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const {
    register,
    formstate: { errors, isSubmitting },
    handleSubmit,
    onSubmit,
    isFailed,
    isSuccess,
    serverError,
  } = useLoginForms();

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
          <div className='text-display-md font-bold'>Login</div>
          <div className='text-md font-semibold'>
            Sign in to manage your library account.
          </div>
        </div>
        {/* Form */}
        <form
          className='flex gap-4 flex-col w-full  '
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Username */}
          <div className='flex flex-col gap-0.5'>
            <p className='text-sm font-bold'>Email</p>
            <Textbox
              {...register('email')}
              id='email'
              placeholder='Email'
              type='text'
            />
            {errors.email && (
              <p className='text-[#ee1d52] font-medium text-sm'>
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Password */}
          <div className='flex flex-col gap-0.5'>
            <p className='text-sm font-bold'>Password</p>
            <Textbox
              {...register('password')}
              id='password'
              placeholder='password'
              type='password'
            />
            {errors.password && (
              <p className='text-[#ee1d52] font-medium text-sm'>
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Button */}
          <div>
            {isSuccess && (
              <p className='text-green-300 font-medium text-sm'>
                Login Success
              </p>
            )}
            {isFailed && (
              <p className='text-[#ee1d52] font-medium text-sm'>
                {serverError}
              </p>
            )}
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full text-md font-bold'
            >
              Sign In
            </Button>
          </div>
          <div className='flex justify-center'>
            <p className='text-md font-semibold'>
              Don't have an account?{' '}
              <Link
                to='/register'
                className='text-md font-bold text-primary-300'
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
