import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Textbox = ({
  classname,
  placeholder,
  type = 'text',
  id,
  ...props
}: {
  classname?: string;
  placeholder: string;
  type: string;
  id: string;
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className='flex justify-between px-3 py-3.25 h-14 border border-neutral-300 p-3 rounded-[12px] '>
      <input
        {...props}
        id={id}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        className={cn(
          ' text-sm font-regular w-full focus:outline-none',
          classname
        )}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <button onClick={handleShow} type='button'>
          {show ? <EyeOff /> : <Eye />}
        </button>
      )}
    </div>
  );
};

export default Textbox;
