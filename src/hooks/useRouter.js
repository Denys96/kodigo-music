import { useState, useEffect } from 'react';

export const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState('home');

  const navigate = (route) => {
    // Guarda la ruta en el historial del navegador
    window.history.pushState({}, '', `/${route}`);
    setCurrentRoute(route);
  };

  // Maneja el botón atrás/adelante del navegador
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || 'home';
      setCurrentRoute(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { currentRoute, navigate };
};