import { useState } from 'react';
import { cadastrarAluno } from '../services/alunoService';
import SelecionarAvatar from '../components/SelecionarAvatar';

function CadastrarAluno() {
  const [nome, setNome] = useState('');
  const [avatarSelecionado, setAvatarSelecionado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nome.trim() && avatarSelecionado) {
      const novoAluno = {
        nome,
        avatar: avatarSelecionado
      };

      await cadastrarAluno(novoAluno);
      setNome('');
      setAvatarSelecionado(null);
      alert('Aluno cadastrado com sucesso!');
    } else {
      alert('Por favor, preencha o nome e selecione um avatar.');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Cadastro de Aluno</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do aluno"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            width: '70%',
          }}
        />
        <br />
        <SelecionarAvatar 
          onSelect={setAvatarSelecionado}
          selectedAvatar={avatarSelecionado}
        />
        <br />
        <button 
          type="submit" 
          style={{ 
            padding: '0.5rem 1rem',
            backgroundColor: '#FF7F32',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '1rem'
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastrarAluno;
