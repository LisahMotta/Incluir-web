import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatares from '../data/avatares';

function Dashboard() {
  const navigate = useNavigate();
  const [avatarSelecionado] = useState('avatar1');

  /* ─── Estilos ────────────────────────────────────────────────────────────── */
  const estiloContainer = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5f5'
  };

  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '800px',
    width: '100%'
  };

  const estiloCard = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
    }
  };

  const estiloIcone = {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  };

  const estiloTexto = {
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const estiloTitulo = {
    color: '#333',
    marginBottom: '1rem'
  };

  const estiloAvatar = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '4px solid #FF7F32',
    marginBottom: '1rem',
    objectFit: 'cover'
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
        {avatarSelecionado && (
          <div style={{ marginTop: '1rem' }}>
            <img 
              src={avatares[avatarSelecionado]}
              alt="Avatar selecionado"
              style={estiloAvatar}
            />
          </div>
        )}
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
          onClick={() => navigate('/ranking')}
        >
          <div style={estiloIcone}>🏆</div>
          <div style={estiloTexto}>Ranking</div>
        </div>

        <div 
          style={estiloCard}
          onClick={() => navigate('/')}
        >
          <div style={estiloIcone}>🏠</div>
          <div style={estiloTexto}>Início</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 