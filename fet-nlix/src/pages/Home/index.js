import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './home.css';
// import api from '../../services/api';

//https://api.themoviedb.org/3/movie/now_playing?api_key=e09576ff057c4366522d6b9d11b37d68

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{

        async function loadFilmes(){
            const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=e09576ff057c4366522d6b9d11b37d68"
            const response = await axios.get(url)
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
        }
        loadFilmes()
    }, [])


    if(loading){
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((f)=>{
                    return(
                        <article key = {f.id}>
                            <strong>{f.title}</strong><br/>
                            <img src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`} alt={f.title}/>
                            <Link to ={`/filme/${f.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;