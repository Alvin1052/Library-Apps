/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerScheme, type TregisterScheme } from '@/lib/validations/auth';
import api from '@/services/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const useRegisterForms = () => {
  // npm i react-hook-form
  // npm i zod
  //npm i @hookform/resolvers
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TregisterScheme>({ resolver: zodResolver(registerScheme) });

  const onSubmit = async (data: TregisterScheme) => {
    setServerError(null);

    try {
      await api.post('/auth/register', data);

      setIsSuccess(true);
      reset();
      navigate('/login');
    } catch (error: any) {
      const message = error?.Response?.data?.message || 'something went wrong';
      setServerError(message);
      setIsFailed(true);
    }
  };

  return {
    register,
    onSubmit,
    serverError,
    isSuccess,
    isFailed,
    handleSubmit,
    formstate: { errors, isSubmitting },
    errors,
    reset,
  };
};
