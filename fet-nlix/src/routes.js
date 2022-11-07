import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Filme from './pages/Filmes';
import Home from './pages/Home';
import Erro from './pages/Erro'
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element= { <Home/> }/>
                <Route path="/filme/:id" element= { <Filme/> }/>
                
                <Route path="*" element={ <Erro/> }/>

            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp