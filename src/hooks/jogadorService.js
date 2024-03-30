import axios from 'axios';

export async function fetchAtletaData(idClube) {
    try {
        console.log(idClube)
      const response = await axios.get(`https://api.cartola.globo.com/atletas/mercado/${idClube}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar atletas:', error);
      return [];
    }
  };