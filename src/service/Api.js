// services/apiService.js
import axios from 'axios';

export const getAnimeSeasonData = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    throw error;
  }
};

export const getAnimeSeasonCategories = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/genres/anime');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    throw error;
  }
};

export const getAnimeSeasonId = async (id) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    throw error;
  }
};
export const getAnimeSeasonSearch = async (id, currentPage) => {
 
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?genres=${id}&page=${currentPage}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    throw error;
  }
};


