import './favoritos.css'
import {  useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const  minhaLista = localStorage.getItem("@fletNix")
        setFilmes(JSON.parse(minhaLista) || []);

    },[])

    function excluirFilmes(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@fletNix", JSON.stringify(filtroFilmes))

    }

    return(
        <div className='meus-filmes'>
            <h1 >Meus filmes</h1>

            <ul>
                {filmes.map((filme)=>{
                    return(
                       <li key ={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={()=>excluirFilmes(filme.id)}>Excluir</button>
                            </div>

                       </li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos