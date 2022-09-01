import './styles.scss'
import Header from "../Header/Header";
import SliderList from '../SliderList/SliderList';
import Footer from '../Footer/Footer';
import { useState } from 'react';

export default function Home(){
    
    const [search, setSearch] = useState('');
    
    return(
        <>
        <Header />
            <div className="container-home">
                <section className='content-home'>
                    <h1>Bem-vindo(a).</h1>
                    <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>

                    <div className="search-home">
                        <input 
                        placeholder='Pesquisar por um filme, uma série televisiva, uma pessoa......' 
                        type="text" 
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        />

                        <button className='search-btn-home'> Search </button>
                    </div>
                </section>
            </div>

        <SliderList title={'Os mais populares'} category={['Streaming', 'Na TV', 'Para Alugar', 'Nos Cinemas']}/>
        <Footer />
        </>
    );
}