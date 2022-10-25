import { useEffect, useState } from 'react';
import api from '../../services/api';

//https://api.themoviedb.org/3/movie/now_playing?api_key=e09576ff057c4366522d6b9d11b37d68

function Home(){
    const [filmes, setFilmes] = useState({});

    useEffect(()=>{
        async function loadFilmes (){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key: 'e09576ff057c4366522d6b9d11b37d68',
                    language:'pt-BR',
                    page:1,
                }
            })
            console.log(response.data.results);
        }
       
        loadFilmes();

    }, [])

    return(
        <div>
            <h1>Bem Vindo a Home</h1>
        </div>
    )
}

export default Home;