import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/fundo.png';

// Importando imagens de animais
import cachorro from '../avatar/animais/cachorro.png';
import elefante from '../avatar/animais/elefante.png';
import esquilo from '../avatar/animais/esquilo.png';
import gato from '../avatar/animais/gato.png';
import husky from '../avatar/animais/husky.png';
import leao from '../avatar/animais/leao.png';
import macaco from '../avatar/animais/macaco.png';
import panda from '../avatar/animais/panda.png';
import pterodactilo from '../avatar/animais/pterodactilo.png';
import raposa from '../avatar/animais/raposa.png';
import tigre from '../avatar/animais/tigre.png';
import trex from '../avatar/animais/trex.png';
import triceratops from '../avatar/animais/triceratops.png';
import unicornio from '../avatar/animais/unicornio.png';

// Importando imagens de meninas
import menina1 from '../avatar/menina/menina1.png';
import menina2 from '../avatar/menina/menina2.png';

// Importando imagens de meninos
import menino1 from '../avatar/menino/menino1.png';
import menino2 from '../avatar/menino/menino2.png';

// Importando imagens de seres mágicos
import bruxa from '../avatar/seresmagicos/bruxa.png';
import bruxo from '../avatar/seresmagicos/bruxo.png';
import fada from '../avatar/seresmagicos/fada.png';
import fado from '../avatar/seresmagicos/fado.png';
import heroi from '../avatar/seresmagicos/heroi.png';
import heroina from '../avatar/seresmagicos/heroina.png';
import pirata from '../avatar/seresmagicos/pirata.png';
import piratinha from '../avatar/seresmagicos/piratinha.png';
import princesa from '../avatar/seresmagicos/princesa.png';
import principe from '../avatar/seresmagicos/principe.png';
import vampira from '../avatar/seresmagicos/vampira.png';
import vampiro from '../avatar/seresmagicos/vampiro.png';
import zumbi from '../avatar/seresmagicos/zumbi.png';
import zumbia from '../avatar/seresmagicos/zumbia.png';

const avatares = {
  cachorro, elefante, esquilo, gato, husky, leao, macaco, panda, 
  pterodactilo, raposa, tigre, trex, triceratops, unicornio,
  menina1, menina2, menino1, menino2,
  bruxa, bruxo, fada, fado, heroi, heroina, pirata, piratinha,
  princesa, principe, vampira, vampiro, zumbi, zumbia
};

function Dashboard() {
  const navigate = useNavigate();
  const [avatarSelecionado, setAvatarSelecionado] = useState(null);
  const [mostrarSubmenu, setMostrarSubmenu] = useState(false);

  useEffect(() => {
    // Carrega o avatar salvo do localStorage
    const avatarSalvo = localStorage.getItem('avatarSelecionado');
    if (avatarSalvo) {
      setAvatarSelecionado(avatarSalvo);
    }
  }, []);

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

  const estiloAvatar = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '4px solid #FF7F32',
    marginBottom: '1rem',
    objectFit: 'cover'
  };

  const estiloSubmenu = {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '0 0 20px 20px',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 1,
  };

  const estiloSubmenuItem = {
    padding: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 127, 50, 0.1)',
    }
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
          style={{
            ...estiloCard,
            position: 'relative'
          }}
          onMouseEnter={() => setMostrarSubmenu(true)}
          onMouseLeave={() => setMostrarSubmenu(false)}
        >
          <div style={estiloIcone}>📚</div>
          <div style={estiloTexto}>Leitura</div>
          {mostrarSubmenu && (
            <div style={estiloSubmenu}>
              <div 
                style={estiloSubmenuItem}
                onClick={() => navigate('/leitura')}
              >
                Alfabeto
              </div>
              <div 
                style={estiloSubmenuItem}
                onClick={() => navigate('/parlendas')}
              >
                Parlendas
              </div>
            </div>
          )}
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