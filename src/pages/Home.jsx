import React from 'react';
import { Link } from 'react-router-dom';
import fundo from '../assets/fundo.png';
import coruja from '../assets/mascote.png';
import livro from '../assets/book.png';

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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '900px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src={coruja} 
            alt="Corujinha do Saber" 
            style={{ 
              width: '900px',
              height: 'auto',
              marginBottom: '0.2rem',
              position: 'relative',
              zIndex: 2
            }} 
          />
          <img 
            src={livro} 
            alt="Livro" 
            style={{ 
              width: '200px',
              height: 'auto',
              position: 'absolute',
              right: '50px',
              bottom: '50px',
              zIndex: 1
            }} 
          />
        </div>

        <h1 style={{ 
          fontSize: '2.2rem', 
          color: '#FF7F32', 
          margin: '0.3rem 0', 
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Bem-vindo ao Corujinha do Saber
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#333', 
          margin: '0.2rem 0 1rem 0',
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Educação divertida, inclusiva e acessível
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/cadastro" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#FF7F32',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.6rem',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              👤 Cadastrar
            </button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.6rem',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              🔓 Entrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
