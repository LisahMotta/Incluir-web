import {useState} from 'react';
import {cadastrarAluno} from '../services/alunoService';

function CadastrarAluno() {
    const [nome,setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nome.trim()) {
            await cadastrarAluno(nome);
            setNome('');
        }
    }
    return (
        <div style={{padding:'2rem',textAlign: 'center'}}>
            <h2> Cadastro de Aluno</h2>
            <form onSubmit={handleSubmit}>
                <imput
                type="text"
                placeholder=" Digite o nome do aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{
                    padding: '0.5rem',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    marginButtom: '1rem',
                    width: '70%',
                }}
                />
                <br/>
                <button type="submit" style={{padding: '0.5rem 1rem'}}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default CadastrarAluno;