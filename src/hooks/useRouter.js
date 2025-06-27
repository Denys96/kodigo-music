import { useState } from 'react';

export const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState('home');

  const navigate = (route) => {
    setCurrentRoute(route);
  };

  return { currentRoute, navigate };
};
