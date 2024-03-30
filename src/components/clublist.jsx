
import React, { useState, useEffect } from 'react';
import { fetchClubData } from '../hooks/clubService';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import Clube from './clube/clube';
import './geral.css'

function ClubList() {
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    const fetchClubes = async () => {
      const clubData = await fetchClubData();
      setClubes(Object.values(clubData));
    };

    fetchClubes();
  }, []);

  return (
    <div>
      <h1>Lista de Clubes do Cartola</h1>
      <ul>
        {clubes.map(clube => (
          clube.id !== 1 ? (
            <li key={clube.id}>
              {/* pega o id do clube clicado e manda como parametro para a url, na qual ai chamar a tela do jogador */}
              <Link to={`/club/${clube.id}`}> 
              <Clube
              logo={clube.escudos['60x60']}
              nome={clube.nome}
              apelido={clube.apelido}
             
            />
              </Link>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
}

export default ClubList;
