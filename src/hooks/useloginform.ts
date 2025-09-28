/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginScheme, type TloginScheme } from '@/lib/validations/auth';
import api from '@/services/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const useLoginForms = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TloginScheme>({ resolver: zodResolver(loginScheme) });

  const onSubmit = async (data: TloginScheme) => {
    setServerError(null);

    try {
      const res = await api.post('/auth/login', data);

      localStorage.setItem('token', res.data?.data.token);
      setIsSuccess(true);
      reset();

      const expiresAt = Date.now() + 1000 * 60 * 60; // 1 hour
      localStorage.setItem('token_expires_at', String(expiresAt));

      navigate('/');
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
