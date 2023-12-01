import React, { useState, useEffect } from 'react';
import { getAnimeSeason } from '../service/Api'
import { useParams } from 'react-router-dom';
import Nav from "../components/Nav";
import AnimeCard from './AnimeCard';
import BeatLoader  from "react-spinners/BeatLoader";

const AnimeTemporada = () => {
  const {year, season} = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await getAnimeSeason(year,season, currentPage);
        const { data, pagination } = response;

        setAnimeData(data);
        setTotalPages(pagination.last_visible_page);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Erro ao buscar dados do anime:', error);
      }
    };

    fetchAnimeData();
  }, [year,season, currentPage]);
 
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };  
  return (
    <>
      <Nav/>
      <div className='mx-5 my-10'>
        <h2 className='text-2xl font-bold mb-8'>{season}</h2>
        {loading ? (
          <div className='flex h-full justify-center items-center'>
            <BeatLoader color="#35799F" size="50"/>
          </div> 
        ) : (
          <>
          <div className='flex flex-wrap justify-between'>
              {animeData && animeData.map((anime) => (
                <AnimeCard key={anime.id} anime={anime}></AnimeCard>
              ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300"
            >
              Página Anterior
            </button>
            <span>{`Página ${currentPage} de ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300"
            >
              Próxima Página
            </button>
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default AnimeTemporada;
