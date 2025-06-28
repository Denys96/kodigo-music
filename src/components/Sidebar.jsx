import { Home, Search, Music, User, X, LogOut } from 'lucide-react';
import { auth } from '../firebase';

const Sidebar = ({ isOpen, toggleSidebar, currentRoute, navigate, user }) => {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'search', label: 'Buscar', icon: Search },
    { id: 'library', label: 'Tu Biblioteca', icon: Music },
    { id: 'profile', label: 'Perfil', icon: User }
  ];

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className={`fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300 z-50 lg:translate-x-0 lg:static lg:z-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kodigo Music
          </h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {user && (
          <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-gray-800">
            <img 
              src={user.photoURL || 'https://i.pravatar.cc/40'} 
              alt="User" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-white font-medium">{user.displayName || 'Usuario'}</p>
              <p className="text-gray-400 text-xs">{user.email}</p>
            </div>
          </div>
        )}

        <nav className="space-y-4">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id);
                  toggleSidebar();
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentRoute === item.id ? 'bg-purple-600' : 'hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {user && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 mt-6"
          >
            <LogOut size={20} />
            <span>Cerrar sesión</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;