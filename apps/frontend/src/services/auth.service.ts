import { api } from './api';

export type LoginInput = {
  email: string;
  password: string;
};

export async function login(input: LoginInput) {
  const response = await api.post('/auth/login', input);
  return response.data;
}
