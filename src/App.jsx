import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import { useMusicPlayer } from './hooks/useMusicPlayer.js';
import { useRouter } from './hooks/useRouter.js';
import HomePage from './pages/HomePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import LibraryPage from './pages/LibraryPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import { Menu } from 'lucide-react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const musicPlayer = useMusicPlayer();
  const router = useRouter();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderCurrentPage = () => {
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
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          currentRoute={router.currentRoute}
          navigate={router.navigate}
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
      <MusicPlayer
        currentSong={musicPlayer.currentSong}
        isPlaying={musicPlayer.isPlaying}
        playPause={musicPlayer.playPause}
      />
    </div>
  );
};

export default App;
