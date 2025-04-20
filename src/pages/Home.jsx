import React from 'react';
import { Link } from 'react-router-dom';
import fundo from '../assets/fundo.png';
import coruja from '../assets/mascote.png';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1400px',
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
          gap: '4rem',
        }}
      >
        {/* Coruja */}
        <div style={{ flex: '1.2', display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src={coruja}
            alt="Coruja mascote"
            style={{ width: '950px', height: 'auto', maxWidth: '100%' }}
          />
        </div>

        {/* Conteúdo */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '4rem', color: '#FF7F32', marginBottom: '1.5rem' }}>Bem-vindo!</h1>
          <p style={{ fontSize: '1.5rem', color: '#333', marginBottom: '2.5rem', textAlign: 'center' }}>
            Educação divertida, inclusiva e acessível
          </p>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem', 
            width: '80%',
            minWidth: '300px'
          }}>
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
              <button style={estiloBotao('#f87b4c')}>👤 Cadastrar</button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={estiloBotao('#f5a623')}>🔓 Entrar</button>
            </Link>
            <Link to="/leitura" style={{ textDecoration: 'none' }}>
              <button style={estiloBotao('#fbd13c')}>📖 Leitura</button>
            </Link>
            <Link to="/jogos" style={{ textDecoration: 'none' }}>
              <button style={estiloBotao('#6fcf97')}>🎮 Jogos</button>
            </Link>
            <Link to="/ranking" style={{ textDecoration: 'none' }}>
              <button style={estiloBotao('#56ccf2')}>🏆 Ranking</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Estilo dos botões
const estiloBotao = (cor) => ({
  backgroundColor: cor,
  color: '#fff',
  border: 'none',
  padding: '1rem 2.5rem',
  borderRadius: '30px',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  width: '100%',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
  }
});

export default Home;
