import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import './filme-info.css';

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilmes] = useState({});
    const [loading, setLoadings] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            const url = `https://api.themoviedb.org/3/movie/${id}now_playing?api_key=e09576ff057c4366522d6b9d11b37d68`
            await axios.get(url)
                .then((response)=>{
                    setFilmes(response.data);
                    setLoadings(false)
                })
                .catch(()=>{
                    navigate("/", { replace: true });
                    console.log("Filme nao encontrado");
                });
        }
        loadFilme();

        return() =>{
        }

    },[id,navigate])

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-button">
                <button>Salvar</button>
                <button>
                    <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;