import { api } from './api';

export async function listLogs() {
  const response = await api.get('/logs');
  return response.data;
}
