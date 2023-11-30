import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeSeason from "../components/AnimeNow";
import AnimeDetail from "../components/Detail/AnimeDetail";
import AnimeCategoria from "../components/AnimeCategoria";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AnimeSeason/>}/>
                <Route path="/anime/:id" element={<AnimeDetail/>}/>
                <Route path="/categoria/:id/:name" element={<AnimeCategoria/>}/>
            </Routes>
        </BrowserRouter>   
    )
}