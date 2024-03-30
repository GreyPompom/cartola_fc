import axios from 'axios';

export async function fetchClubData() {
  try {
    const response = await axios.get('https://api.cartola.globo.com/clubes');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clubes:', error);
    return [];
  }
}