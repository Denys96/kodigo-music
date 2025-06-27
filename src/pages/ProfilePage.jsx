import React from 'react';
import ProfileForm from '../components/ProfileForm.jsx';

const ProfilePage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Configuración de Perfil</h1>
        <p className="text-gray-400">Personaliza tu experiencia musical</p>
      </div>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
