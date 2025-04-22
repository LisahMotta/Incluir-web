import React, { useEffect, useState } from 'react';
import LeituraParlenda from './LeituraParlenda';

function Parlendas() {
  const [parlendas, setParlendas] = useState([]);
  const [parlendaSelecionada, setParlendaSelecionada] = useState(null);

  useEffect(() => {
    fetch('/dados/parlendas.json')
      .then((res) => res.json())
      .then((data) => setParlendas(data))
      .catch((error) => console.error('Erro ao carregar parlendas:', error));
  }, []);

  const estiloContainer = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    minHeight: '100vh'
  };

  const estiloTitulo = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem'
  };

  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const estiloBotao = {
    backgroundColor: '#FF7F32',
    color: 'white',
    border: 'none',
    padding: '1rem',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#E66B28',
      transform: 'translateY(-2px)'
    }
  };

  return (
    <div style={estiloContainer}>
      <h1 style={estiloTitulo}>📚 Parlendas</h1>
      
      {!parlendaSelecionada ? (
        <div style={estiloGrid}>
          {parlendas.map((parlenda) => (
            <button
              key={parlenda.id}
              onClick={() => setParlendaSelecionada(parlenda)}
              style={estiloBotao}
            >
              Parlenda {parlenda.id.replace('parlenda', '')}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setParlendaSelecionada(null)}
            style={{
              ...estiloBotao,
              marginBottom: '1rem',
              backgroundColor: '#666'
            }}
          >
            ← Voltar
          </button>
          <LeituraParlenda
  parlenda={parlendaSelecionada}
  onVoltar={() => setParlendaSelecionada(null)}
/>
        </div>
      )}
    </div>
  );
}

export default Parlendas; 