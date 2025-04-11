import {Link} from 'react-router-dom';

function Home(){
    return (
        <div style={{textAlign:'center',marginTop:'2rem'}}>
            <h1>IncluirMaisWeb</h1>
            <p>Bem-vindo! Escolha uma atividade:</p>
            <Link to="/leitura"> Ir para atividade de leitura</Link>
        </div>
    ); 
} 

export default Home;