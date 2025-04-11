import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Leitura from "./pages/Leitura.jsx";

function App(){
  return (
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Leitura"element={<Leitura/>}/>
    </Routes>
  )
}

export default App