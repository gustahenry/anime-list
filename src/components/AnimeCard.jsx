import React from 'react';
import Star from "../assets/Star.png"
import { Link } from "react-router-dom";

const AnimeCard = (props) => {

    const {anime} = props;

  const limitarSinopse = (sinopse, limite) => {
    if (sinopse && sinopse.length > limite) {
      return sinopse.substring(0, limite) + '...';
    }
    return sinopse;
  };

  return (
        <Link to={`/anime/${anime.mal_id}`} className='lg:w-[26.5rem] md:w-[26.5rem] w-full mb-4'>
        <div className='bg-[#35799F]'>
            <p className='text-center text-white font-normal text-xl truncate py-1'>{anime.title}</p>
        </div>
        <div className='flex bg-[#EDEDED]'>
            <div className='w-1/2'>
            <img className='' src={anime.images.webp.image_url} alt=""/>
            </div>
            <div className='w-1/2'>
            <p className='text-justify mx-1 text-black'>{limitarSinopse(anime.synopsis, 280)}</p>
            </div>
        </div>
        <div className='flex justify-around bg-[#888787] text-white items-center py-1'>
            <div className='flex space-x-2 h-5 items-center'>
                <img src={Star} alt="Estrela" />
                <p>{anime.score}</p>
            </div>
            <p>EP: {anime.episodes}</p>
        </div>
        </Link>
  );
};

export default AnimeCard;