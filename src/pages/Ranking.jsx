import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function Ranking() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function buscarAlunos() {
      const { data, error } = await supabase
        .from('alunos')
        .select('*')
        .order('pontos', { ascending: false });

      if (error) {
        console.error('Erro ao buscar alunos:', error.message);
      } else {
        setAlunos(data);
      }
    }

    buscarAlunos();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Ranking de Alunos</h2>
      {alunos.map((aluno, index) => (
        <div key={aluno.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <img src={aluno.avatar} alt={aluno.nome} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <div>
            <strong>{index + 1}. {aluno.nome}</strong>
            <p>Pontos: {aluno.pontos}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ranking;
