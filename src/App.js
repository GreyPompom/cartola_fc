import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ClubList from './components/clublist';
import ClubDetail from './components/clubAtletas'; 
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <a href="/">
          <img width="100px" className="logo"src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"/> 
        </a>
        
      </nav>
      <section className='box'>
      <Router>
        <Routes>
      {/* <Switch> ver com o paulinho pq não é possiel usar esse switch aqui, react-router-som atualizado e sem erros mas diz q o switch nao importa, o switch serve para renderizar apenas uma rota por vez*/} 
            <Route path="/" element={<ClubList />} /> {/* Use 'element' para renderizar o componente */}
            <Route path="/club/:id" element={<ClubDetail />} /> {/* Use 'element' para renderizar o componente */}
      {/* </Switch> */}
        </Routes>
      
    </Router>
      </section>
      
    </div>
  );
}

export default App;
