import React, { useEffect, useState } from 'react';
import LeituraParlenda from './LeituraParlenda';
import BtnVoltar from '../components/BtnVoltar';
import fundo from '../assets/fundo.png';

function Parlendas() {
  const [parlendas, setParlendas] = useState([]);
  const [parlendaSelecionada, setParlendaSelecionada] = useState(null);

  useEffect(() => {
    fetch('/dados/parlendas.json')
      .then((res) => res.json())
      .then((data) => setParlendas(data))
      .catch((error) => console.error('Erro ao carregar parlendas:', error));
  }, []);

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

  /* ─── estilos locais ─────────────────────────────────────────────────────── */
  const estiloContainer = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const estiloTitulo = {
    fontSize: '2.5rem',
    color: '#fff',
    marginBottom: '3rem',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,.45)',
    textAlign: 'center'
  };

  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const estiloBotao = {
    backgroundColor: '#FF7F32',
    color: 'white',
    border: 'none',
    padding: '1.2rem',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }
  };

  /* ─── JSX ────────────────────────────────────────────────────────────────── */
  return (
    <>
      <div style={estiloFundo} />
      
      <div style={estiloContainer}>
        {/* Botão voltar para o dashboard */}
        <BtnVoltar />

        <h1 style={estiloTitulo}>📚 Parlendas</h1>

        {!parlendaSelecionada ? (
          /* grade de botões com as parlendas */
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
          /* leitura individual da parlenda */
          <LeituraParlenda
            parlenda={parlendaSelecionada}
          />
        )}
      </div>
    </>
  );
}

export default Parlendas;
