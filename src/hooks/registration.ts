import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface registrationData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  createStore: string;
  storeName?: string;
}

export const useRegister = () => {
  return useMutation({
    mutationFn: async (payload: registrationData) => {
      const { data } = await axios.post('http://localhost:3000/api/v1/auth/register', payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      return data;
    },
  });
};
