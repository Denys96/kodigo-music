import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    favoriteGenre: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.age) {
      newErrors.age = 'La edad es requerida';
    } else if (isNaN(formData.age) || formData.age < 13 || formData.age > 120) {
      newErrors.age = 'La edad debe ser un número entre 13 y 120';
    }

    if (!formData.favoriteGenre) {
      newErrors.favoriteGenre = 'Selecciona tu género favorito';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Formulario válido:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8 text-center">
        <div className="text-green-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">¡Perfil actualizado!</h2>
        <p className="text-gray-400 mb-6">Tu información ha sido guardada exitosamente.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Editar nuevamente
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Tu Perfil</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2">Nombre completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-purple-500'
            }`}
            placeholder="Ingresa tu nombre completo"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-purple-500'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Edad</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
              errors.age ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-purple-500'
            }`}
            placeholder="Tu edad"
            min="13"
            max="120"
          />
          {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age}</p>}
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Género musical favorito</label>
          <select
            name="favoriteGenre"
            value={formData.favoriteGenre}
            onChange={handleChange}
            className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
              errors.favoriteGenre ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-purple-500'
            }`}
          >
            <option value="">Selecciona un género</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="electronic">Electronic</option>
            <option value="hiphop">Hip Hop</option>
            <option value="classical">Classical</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="salsa">Salsa</option>
          </select>
          {errors.favoriteGenre && <p className="text-red-400 text-sm mt-1">{errors.favoriteGenre}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Guardar Perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
