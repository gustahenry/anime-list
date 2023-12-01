import { useState, useEffect} from "react";
import Logo from "../assets/AnimeList.png";
import { getAnimeData } from '../service/Api';
import { Link } from "react-router-dom";

const Nav = () => {
  
    const [toggle, setToggle] = useState(false);
    const [animeCategories, setAnimeCategories] = useState(null);

    useEffect(() => {
        const fetchAnimeCategories = async () => {
            const path = "genres/anime";
            const data = await getAnimeData(path);
            setAnimeCategories(data);
        };
    
        fetchAnimeCategories();
      }, []);

  return (
    <nav className="bg-[#35799F] w-full h-20 px-5 flex items-center justify-between">
        <Link to="/" className="w-44 h-12 flex items-center">
            <img src={Logo} alt=""/>
        </Link>
        <ul className="text-white font-semibold text-lg flex space-x-8">
            <Link to={`/temporada/2023/winter`}><li>Inverno</li></Link>
            <Link to={`/temporada/2023/spring`}><li>Primavera</li></Link>
            <Link to={`/temporada/2023/summer`}><li>Verão</li></Link>
            <Link to={`/temporada/2023/fall`}><li>Outono</li></Link>
        </ul>
        <button className="text-white font-semibold text-lg" onClick={()=>{setToggle(!toggle)}}>Categorias</button>
        {toggle && (
            <div className="absolute top-20 right-0 bg-slate-400 w-full">
                <ul className="flex flex-col flex-wrap h-80">
                    {animeCategories.data.map((anime) => (<li className="m-2" onClick={()=>{setToggle(!toggle)}}><Link to={`/categoria/${anime.mal_id}/${anime.name}`}>{anime.name}</Link></li>))}
                </ul>
            </div>
        )}
        
    </nav>
  );
};

export default Nav;
