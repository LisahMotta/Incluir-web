import React from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/fundo.png';

function Dashboard() {
  const navigate = useNavigate();

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

  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    maxWidth: '800px',
    width: '100%',
  };

  const estiloCard = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    }
  };

  const estiloIcone = {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#FF7F32',
  };

  const estiloTexto = {
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <div style={estiloContainer}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        maxWidth: '800px',
        width: '100%'
      }}>
        <h1 style={{
          ...estiloTitulo,
          fontSize: '2.8rem',
          marginBottom: '1rem'
        }}>
          Seja Bem-vindo!
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#333',
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}>
          Educação divertida, inclusiva e acessível
        </p>
      </div>
      
      <div style={estiloGrid}>
        <div 
          style={estiloCard}
          onClick={() => navigate('/leitura')}
        >
          <div style={estiloIcone}>📚</div>
          <div style={estiloTexto}>Leitura</div>
        </div>

        <div 
          style={estiloCard}
          onClick={() => navigate('/jogos')}
        >
          <div style={estiloIcone}>🎮</div>
          <div style={estiloTexto}>Jogos</div>
        </div>

        <div 
          style={estiloCard}
          onClick={() => navigate('/avatar')}
        >
          <div style={estiloIcone}>👤</div>
          <div style={estiloTexto}>Meu Avatar</div>
        </div>

        <div 
          style={estiloCard}
          onClick={() => navigate('/ranking')}
        >
          <div style={estiloIcone}>🏆</div>
          <div style={estiloTexto}>Ranking</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 