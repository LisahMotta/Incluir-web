import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelecionarAvatar from '../components/SelecionarAvatar';
import fundo from '../assets/fundo.png';

function SelecionarAvatarPage() {
  const navigate = useNavigate();
  const [avatarSelecionado, setAvatarSelecionado] = useState(null);

  const estiloContainer = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    margin: 0,
    boxSizing: 'border-box',
  };

  const estiloTitulo = {
    color: '#FF7F32',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2.5rem',
  };

  const estiloBotoes = {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem'
  };

  const estiloBotao = {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#FF7F32',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }
  };

  const handleSalvarAvatar = () => {
    if (avatarSelecionado) {
      // Salva o avatar no localStorage
      localStorage.setItem('avatarSelecionado', avatarSelecionado);
      alert('Avatar salvo com sucesso!');
      navigate('/dashboard');
    } else {
      alert('Por favor, selecione um avatar antes de salvar.');
    }
  };

  return (
    <div style={estiloContainer}>
      <h1 style={estiloTitulo}>Escolha seu Avatar</h1>
      
      <SelecionarAvatar 
        onSelect={setAvatarSelecionado}
        selectedAvatar={avatarSelecionado}
      />

      <div style={estiloBotoes}>
        <button 
          style={estiloBotao}
          onClick={() => navigate('/dashboard')}
        >
          Voltar
        </button>
        
        <button 
          style={estiloBotao}
          onClick={handleSalvarAvatar}
        >
          Salvar Avatar
        </button>
      </div>
    </div>
  );
}

export default SelecionarAvatarPage; 