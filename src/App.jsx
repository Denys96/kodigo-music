import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import { useMusicPlayer } from './hooks/useMusicPlayer.js';
import { useRouter } from './hooks/useRouter.js';
import HomePage from './pages/HomePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import LibraryPage from './pages/LibraryPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { Menu } from 'lucide-react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingSpinner from './components/LoadingSpinner.jsx';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const musicPlayer = useMusicPlayer();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  // Efecto para manejar redirecciones basadas en autenticación
  useEffect(() => {
    if (loading) return; // Espera a que termine la verificación

    if (!user && router.currentRoute !== 'login') {
      // Redirigir a login si no está autenticado
      router.navigate('login');
    } else if (user && router.currentRoute === 'login') {
      // Si está autenticado y trata de acceder a login, redirigir a home
      router.navigate('home');
    }
  }, [user, loading, router.currentRoute]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderCurrentPage = () => {
    if (loading) return <LoadingSpinner />;

    // Si no hay usuario, solo permitir la página de login
    if (!user) {
      return router.currentRoute === 'login' ? <LoginPage /> : <LoadingSpinner />;
    }

    // Rutas protegidas (requieren autenticación)
    switch (router.currentRoute) {
      case 'home':
        return <HomePage musicPlayer={musicPlayer} />;
      case 'search':
        return <SearchPage musicPlayer={musicPlayer} />;
      case 'library':
        return <LibraryPage musicPlayer={musicPlayer} />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage musicPlayer={musicPlayer} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mostrar layout completo solo para usuarios autenticados */}
      {user ? (
        <div className="flex">
          <Sidebar
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            currentRoute={router.currentRoute}
            navigate={router.navigate}
            user={user}
          />
          
          <div className="flex-1 lg:ml-0">
            {/* Header móvil */}
            <header className="lg:hidden bg-gray-800 p-4 flex items-center justify-between">
              <button onClick={toggleSidebar} className="text-white">
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kodigo Music
              </h1>
              <div className="w-6" />
            </header>
            
            <main className="p-6 pb-32 lg:pb-24">
              {renderCurrentPage()}
            </main>
          </div>
        </div>
      ) : (
        // Páginas no autenticadas (solo login)
        renderCurrentPage()
      )}
      
      {/* Reproductor solo para usuarios autenticados */}
      {user && (
        <MusicPlayer
          currentSong={musicPlayer.currentSong}
          isPlaying={musicPlayer.isPlaying}
          playPause={musicPlayer.playPause}
        />
      )}
    </div>
  );
};

export default App;