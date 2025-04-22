import React, { useState } from 'react';

// Importando imagens de animais
import cachorro from '../../src/avatar/animais/cachorro.png';
import elefante from '../../src/avatar/animais/elefante.png';
import esquilo from '../../src/avatar/animais/esquilo.png';
import gato from '../../src/avatar/animais/gato.png';
import husky from '../../src/avatar/animais/husky.png';
import leao from '../../src/avatar/animais/leao.png';
import macaco from '../../src/avatar/animais/macaco.png';
import panda from '../../src/avatar/animais/panda.png';
import pterodactilo from '../../src/avatar/animais/pterodactilo.png';
import raposa from '../../src/avatar/animais/raposa.png';
import tigre from '../../src/avatar/animais/tigre.png';
import trex from '../../src/avatar/animais/trex.png';
import triceratops from '../../src/avatar/animais/triceratops.png';
import unicornio from '../../src/avatar/animais/unicornio.png';

// Importando imagens de meninas
import menina1 from '../../src/avatar/menina/menina1.png';
import menina2 from '../../src/avatar/menina/menina2.png';

// Importando imagens de meninos
import menino1 from '../../src/avatar/menino/menino1.png';
import menino2 from '../../src/avatar/menino/menino2.png';

// Importando imagens de seres mágicos
import bruxa from '../../src/avatar/seresmagicos/bruxa.png';
import bruxo from '../../src/avatar/seresmagicos/bruxo.png';
import fada from '../../src/avatar/seresmagicos/fada.png';
import fado from '../../src/avatar/seresmagicos/fado.png';
import heroi from '../../src/avatar/seresmagicos/heroi.png';
import heroina from '../../src/avatar/seresmagicos/heroina.png';
import pirata from '../../src/avatar/seresmagicos/pirata.png';
import piratinha from '../../src/avatar/seresmagicos/piratinha.png';
import princesa from '../../src/avatar/seresmagicos/princesa.png';
import principe from '../../src/avatar/seresmagicos/principe.png';
import vampira from '../../src/avatar/seresmagicos/vampira.png';
import vampiro from '../../src/avatar/seresmagicos/vampiro.png';
import zumbi from '../../src/avatar/seresmagicos/zumbi.png';
import zumbia from '../../src/avatar/seresmagicos/zumbia.png';

const avataresPorCategoria = {
  animais: [
    { id: 'cachorro', nome: 'Cachorro', imagem: cachorro },
    { id: 'elefante', nome: 'Elefante', imagem: elefante },
    { id: 'esquilo', nome: 'Esquilo', imagem: esquilo },
    { id: 'gato', nome: 'Gato', imagem: gato },
    { id: 'husky', nome: 'Husky', imagem: husky },
    { id: 'leao', nome: 'Leão', imagem: leao },
    { id: 'macaco', nome: 'Macaco', imagem: macaco },
    { id: 'panda', nome: 'Panda', imagem: panda },
    { id: 'pterodactilo', nome: 'Pterodáctilo', imagem: pterodactilo },
    { id: 'raposa', nome: 'Raposa', imagem: raposa },
    { id: 'tigre', nome: 'Tigre', imagem: tigre },
    { id: 'trex', nome: 'T-Rex', imagem: trex },
    { id: 'triceratops', nome: 'Triceratops', imagem: triceratops },
    { id: 'unicornio', nome: 'Unicórnio', imagem: unicornio }
  ],
  menina: [
    { id: 'menina1', nome: 'Menina 1', imagem: menina1 },
    { id: 'menina2', nome: 'Menina 2', imagem: menina2 }
  ],
  menino: [
    { id: 'menino1', nome: 'Menino 1', imagem: menino1 },
    { id: 'menino2', nome: 'Menino 2', imagem: menino2 }
  ],
  seresMagicos: [
    { id: 'bruxa', nome: 'Bruxa', imagem: bruxa },
    { id: 'bruxo', nome: 'Bruxo', imagem: bruxo },
    { id: 'fada', nome: 'Fada', imagem: fada },
    { id: 'fado', nome: 'Fado', imagem: fado },
    { id: 'heroi', nome: 'Herói', imagem: heroi },
    { id: 'heroina', nome: 'Heroína', imagem: heroina },
    { id: 'pirata', nome: 'Pirata', imagem: pirata },
    { id: 'piratinha', nome: 'Piratinha', imagem: piratinha },
    { id: 'princesa', nome: 'Princesa', imagem: princesa },
    { id: 'principe', nome: 'Príncipe', imagem: principe },
    { id: 'vampira', nome: 'Vampira', imagem: vampira },
    { id: 'vampiro', nome: 'Vampiro', imagem: vampiro },
    { id: 'zumbi', nome: 'Zumbi', imagem: zumbi },
    { id: 'zumbia', nome: 'Zumbia', imagem: zumbia }
  ]
};

const SelecionarAvatar = ({ onSelect, selectedAvatar }) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('animais');

  const categorias = [
    { id: 'animais', nome: 'Animais' },
    { id: 'menina', nome: 'Menina' },
    { id: 'menino', nome: 'Menino' },
    { id: 'seresMagicos', nome: 'Seres Mágicos' }
  ];

  const estiloContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    marginTop: '1rem'
  };

  const estiloCategorias = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const estiloBotaoCategoria = (ativo) => ({
    padding: '0.8rem 1.5rem',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: ativo ? '#FF7F32' : '#f0f0f0',
    color: ativo ? 'white' : '#333',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: ativo ? '0 4px 8px rgba(255, 127, 50, 0.3)' : 'none'
  });

  const estiloGridAvatares = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '1rem',
    width: '100%',
    maxWidth: '600px',
    padding: '1rem'
  };

  const estiloAvatar = (selecionado) => ({
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    cursor: 'pointer',
    border: selecionado ? '4px solid #FF7F32' : '4px solid transparent',
    transition: 'all 0.3s ease',
    boxShadow: selecionado ? '0 4px 8px rgba(255, 127, 50, 0.3)' : 'none',
    objectFit: 'cover'
  });

  const estiloAvatarContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const estiloNomeAvatar = {
    fontSize: '0.8rem',
    color: '#666',
    textAlign: 'center'
  };

  return (
    <div style={estiloContainer}>
      <h3 style={{ color: '#333', textAlign: 'center' }}>Escolha seu avatar:</h3>
      
      <div style={estiloCategorias}>
        {categorias.map(categoria => (
          <button
            key={categoria.id}
            onClick={() => setCategoriaAtiva(categoria.id)}
            style={estiloBotaoCategoria(categoriaAtiva === categoria.id)}
          >
            {categoria.nome}
          </button>
        ))}
      </div>

      <div style={estiloGridAvatares}>
        {avataresPorCategoria[categoriaAtiva].map((avatar) => (
          <div key={avatar.id} style={estiloAvatarContainer}>
            <img
              src={avatar.imagem}
              alt={avatar.nome}
              onClick={() => onSelect(avatar.id)}
              style={estiloAvatar(selectedAvatar === avatar.id)}
            />
            <span style={estiloNomeAvatar}>{avatar.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelecionarAvatar;
