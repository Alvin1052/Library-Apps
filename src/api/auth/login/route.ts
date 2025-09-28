/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginScheme } from '@/lib/validations/auth';
import api from '@/services/api';

export async function POST(req: Request) {
  const body = await req.json();
  const validation = loginScheme.safeParse(body);

  if (!validation.success) {
    return new Response(
      JSON.stringify({
        error: validation.error.flatten().fieldErrors,
        status: 400,
      })
    );
  }

  const { email, password } = validation.data;

  try {
    const Response = await api.post('/api/auth/login', {
      email: email,
      password: password,
    });
    return Response.data;
  } catch (error: any) {
    const errorMessage =
      error?.Response?.data?.message ||
      'email atau password yang anda masukkan salah';
    return new Response(JSON.stringify({ error: errorMessage, status: 400 }));
  }
}
