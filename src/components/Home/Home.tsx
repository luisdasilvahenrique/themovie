import './styles.scss'
import Header from "../Header/Header";
import SliderList from '../SliderList/SliderList';

export default function Home(){
    return(
        <>
        <Header />

            <div className="container-home">
                <section className='content-home'>
                    <h1>Bem-vindo(a).</h1>
                    <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>

                    <div className="search-home">
                        <input placeholder='Pesquisar por um filme, uma série televisiva, uma pessoa......' type="text" />
                        <button className='search-btn-home'> Search </button>
                    </div>
                </section>
            </div>

        <SliderList />
        </>
    );
}