import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/fundo.png';

function LeituraParlenda({ parlenda, onVoltar }) {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  if (!parlenda) return null;

  /* ─── Fundo fixo ──────────────────────────────────────────────────────── */
  const estiloFundo = {
    position: 'fixed',
    inset: 0,
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1
  };

  const estiloContainer = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
    padding: '2rem'
  };

  const estiloCard = {
    backgroundImage: `url(${parlenda.imagem})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '90vw',
    maxWidth: '800px',
    height: '90vh',
    maxHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    position: 'relative'
  };

  const estiloTitulo = {
    fontSize: '2.5rem',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const estiloTexto = {
    color: '#333',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    whiteSpace: 'pre-line',
    marginBottom: '2rem',
    lineHeight: '1.6'
  };

  const estiloBotao = {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#FF7F32',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
    }
  };

  const estiloVoltar = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#ff7043',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 10,
    fontWeight: 'bold'
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleVoltar = () => {
    navigate('/parlendas');
  };

  return (
    <>
      <div style={estiloFundo} />
      <button style={estiloVoltar} onClick={handleVoltar}>← Voltar</button>
      <div style={estiloContainer}>
        <div style={estiloCard}>
          <h2 style={estiloTitulo}>{parlenda.titulo}</h2>
          <p style={estiloTexto}>{parlenda.texto}</p>
          <button style={estiloBotao} onClick={handlePlay}>
            🔊 Ouvir a Parlenda
          </button>
          {parlenda.audio && (
            <audio ref={audioRef} src={parlenda.audio} preload="auto" />
          )}
        </div>
      </div>
    </>
  );
}

export default LeituraParlenda;
