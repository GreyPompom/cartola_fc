import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchAtletaData } from '../hooks/jogadorService';
import Atleta from './atleta/atleta'
import './geral.css'

function ClubDetail() {
  const { id } = useParams(); //pega o id que ta sendo passado na url
  const [atletas, setAtletas] = useState([]);
  const [clube, setClube] = useState(null); //para acessar informações do clube é preciso passar o id tipo: {clube[id].nome}
 
  useEffect(() => {
    const fetchAtletas = async () => {
      try {
        const Objeto = await fetchAtletaData(id); //passando id para a requesição dos atletas
        console.log(Objeto)
        setAtletas(Object.values(Objeto.atletas));
        setClube(Objeto.clubes[id])
        
        console.log(atletas)

      } catch (error) {
        console.error('Erro ao buscar atletas:', error);
        setAtletas([]);
      }
    };

    fetchAtletas();
  }, [id]);//só ai rodar caso o id seja alterado


  const clubeNome = clube ? clube.nome : '';
  return (
    <div>
      <h1>Jogadores do {clubeNome}</h1>    
      <ul className='atletas'>
        {atletas.map(atleta => (
            <Atleta
            foto = {(atleta.foto).replace('FORMATO', '220x220')}
            nome = {atleta.apelido}
            posicao= {atleta.posicao}
            />
        ))}
      </ul>
    </div>
  );
}

export default ClubDetail;
