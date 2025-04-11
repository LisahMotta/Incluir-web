import CardLetra from '../components/CardLetra';
import bolaImg from '../assets/bola.png';
import bolaAudio from '../assets/bola.mp3';

function Leitura(){
    return(
        <div style={{ padding:'2rem'}}>
        <h2>Atividade de Leitura</h2>
        <CardLetra 
        letra="B" 
        palavra="Bola" 
        imagem={bolaImg}
        som={bolaAudio}
        />
        </div>
    );
}

export default Leitura;
