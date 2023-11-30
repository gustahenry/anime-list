import React, { useState, useEffect } from 'react';
import { getAnimeSeasonData } from '../service/Api'
import Nav from "../components/Nav";
import AnimeCard from './AnimeCard';
import BeatLoader  from "react-spinners/BeatLoader";


const AnimeSeason = () => {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const data = await getAnimeSeasonData();
        setAnimeData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, []);
 
  return (
    <>
    <Nav/>
    <div className='mx-5 my-10 h-96'>
      <h2 className='text-2xl font-bold mb-8'>Mais Assistidos</h2>
      {loading ? (
        <div className='flex h-full justify-center items-center'>
          <BeatLoader color="#35799F" size="50"/>
        </div> 
      ) : (
        <div className='flex flex-wrap justify-between'>
            {animeData.data.map((anime) => (
              <AnimeCard anime={anime}></AnimeCard>
            ))}
        </div>
      )}
    </div>
    </>
  );
};

export default AnimeSeason;
