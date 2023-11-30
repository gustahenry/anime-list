import Nav from "../Nav";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getAnimeSeasonId } from '../../service/Api'
import InfoCard from "./InfoCard";
import InfoHead from "./InfoHead";

const AnimeDetail = () => {

    const {id} = useParams();
    const [animeData, setAnimeData] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const data = await getAnimeSeasonId(id);
        setAnimeData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, [id]);

  const pathAnime = animeData ? animeData.data : null; 

    return(
        <>
        <Nav/>
        {loading ? (
            <p>Carregando...</p>
          ) : (
          <div className="p-10 w-full">
            <h2 className="text-3xl text-white mb-11">{pathAnime.title}</h2>
            <div className="flex space-x-11 w-full">
                <div className="w-96 flex flex-col items-center p-2 border border-[#A2C1D3]">
                    <img src={pathAnime.images.webp.large_image_url} alt="" />
                    <div className="mt-5 w-full flex flex-col text-left">

                        <div className="flex flex-col space-y-3 mb-4 font-semibold">
                          <h3 className="font-semibold text-xl">Informações</h3>
                          <InfoCard tipo={"Tipo"} valor={pathAnime.type}/>
                          <InfoCard tipo={"Tipo"} valor={pathAnime.type}/>
                          <InfoCard tipo={"Episodios"} valor={pathAnime.type}/>
                          <InfoCard tipo={"Status"} valor={pathAnime.status}/>
                          <InfoCard tipo={"Exibido"} valor={pathAnime.aired.string}/>
                          <InfoCard tipo={"Temporada"} valor={pathAnime.season}/>
                          <InfoCard tipo={"Lançamento"} valor={pathAnime.broadcast.string}/>
                          <InfoCard tipo={"Produtores"} valor={pathAnime.producers}/>
                          <InfoCard tipo={"Estudio"} valor={pathAnime.studios}/>
                          <InfoCard tipo={"Genero"} valor={pathAnime.genres}/>
                          <InfoCard tipo={"Demographic"} valor={pathAnime.demographics}/>
                          <InfoCard tipo={"Duração"} valor={pathAnime.duration}/>
                          <InfoCard tipo={"Classificação"} valor={pathAnime.rating}/>
                          <InfoCard tipo={"Fonte"} valor={pathAnime.source}/>
                        </div>

                        <div className="flex flex-col space-y-3 mb-4">
                          <p className="font-semibold  text-xl">Estatisticas</p>
                          <InfoCard tipo={"Score"} valor={pathAnime.score}/>
                          <InfoCard tipo={"Rank"} valor={pathAnime.rank}/>
                          <InfoCard tipo={"Popularidade"} valor={pathAnime.popularity}/>
                        </div>

                        <div  className="flex flex-col space-y-3 mb-4">
                          <p className="font-semibold">Plataforma de Streaming</p>
                          {pathAnime.streaming.map((stream)=>(
                              <a href={stream.url} target="_blank"><span className="px-1">{stream.name}</span></a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex space-x-10 w-full  h-24 bg-[#A2C1D3] justify-between items-center px-16 mb-10">
                        <InfoHead tipo={"SCORE"} valor={pathAnime.score}/>
                        <InfoHead tipo={"RANKED"} valor={pathAnime.rank}/>
                        <InfoHead tipo={"POPULARITY"} valor={pathAnime.popularity}/>
                        <InfoHead tipo={pathAnime.season} valor={pathAnime.year}/>
                        <div className="text-center mx-5">
                           <p  className="text-xl font-semibold">
                           {pathAnime.studios.map((studio)=>(
                              <span className="px-1">{studio.name}</span>
                            ))}
                           </p>
                        </div>
                    </div>
                    
                    <div className="mb-10">
                        <h3 className="text-2xl mb-10">Sinopse</h3>
                        <p>{pathAnime.synopsis}</p>
                    </div>
                    <div>
                    <iframe
                        className="w-full h-[30rem]"
                        src={pathAnime.trailer.embed_url}
                        title="Vídeo do YouTube"
                        frameBorder="0"
                        allowFullScreen
                    />
                    </div>
                </div>
            </div>
          </div> 
          )}
        </>
    )
};

export default AnimeDetail;
