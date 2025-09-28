import { useLoginForms } from '@/hooks/useloginform';
import { TabsContent } from '@radix-ui/react-tabs';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import Textbox from './ui/textbox';

const Login = () => {
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
    <div className='w-93.5 flex-center'>
      <div className='flex flex-col gap-5 w-full '>
        <div className='flex gap-3.75 items-center'>
          <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
          <div className='text-display-md font-extrabold text-base-black'>
            Foody
          </div>
        </div>
        {/* Welcome */}
        <div>
          <div className='text-display-sm font-extrabold'>Welcome Back</div>
          <div className='text-md font font-regular'>
            Good to see you again! Let’s eat
          </div>
        </div>
        {/* Tabs */}

        <Tabs defaultValue='signin'>
          <TabsList>
            <TabsTrigger value='signin'>Sign In</TabsTrigger>
            <TabsTrigger value='signup'>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value='signin'>
            <form
              className='flex gap-5 flex-col w-full mt-5'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <Textbox
                  {...register('email')}
                  id='email'
                  placeholder='Email'
                  type='text'
                />
                {errors.email && (
                  <p className='text-red-300'>{errors.email.message}</p>
                )}
              </div>

              <div>
                <Textbox
                  {...register('password')}
                  id='password'
                  placeholder='password'
                  type='password'
                />
                {errors.password && (
                  <p className='text-red-300'>{errors.password.message}</p>
                )}
              </div>

              <div className='flex items-center gap-2'>
                <input id='remember' type='checkbox' className='text-2xl' />
                Remember Me
              </div>
              <div>
                {isSuccess && <p className='text-green-300'>Login Success</p>}
                {isFailed && <p className='text-red-300'>{serverError}</p>}
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full'
                >
                  Sign In
                </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value='signup'></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
