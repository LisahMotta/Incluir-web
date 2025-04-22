import React, { useRef } from 'react';

function LeituraParlenda({ parlenda, onVoltar }) {
  const audioRef = useRef(null);

  if (!parlenda) return null;

  const estiloContainer = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
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
    textAlign: 'center'
  };

  const estiloTitulo = {
    fontSize: '2rem',
    color: '#000',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  const estiloTexto = {
    color: '#000',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    whiteSpace: 'pre-line',
    marginBottom: '1rem'
  };

  const estiloBotao = {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  const estiloVoltar = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 10
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <button style={estiloVoltar} onClick={onVoltar}>← Voltar</button>
      <div style={estiloContainer}>
        <div style={estiloCard}>
          <h2 style={estiloTitulo}>{parlenda.titulo}</h2>
          <p style={estiloTexto}>{parlenda.texto}</p>
          <button style={estiloBotao} onClick={handlePlay}>
            Ouvir a Parlenda
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
