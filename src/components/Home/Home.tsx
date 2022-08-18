import './styles.scss'
import Header from "../Header/Header";

export default function Home(){
    return(
        <>
        <Header />

            <div className="container-home">
                <section className='content-home'>
                    <h1>Bem-vindo(a).</h1>
                    <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>

                    <div className="search-home">
                        <input type="text" />
                        <button className='search-btn-home'> Search </button>
                    </div>
                </section>
            </div>
        </>
    );
}