import  '../Header/styles.scss';
import logoImg from '../../assets/logo.svg';
import plusImg from '../../assets/plus.svg';
import searchImg from '../../assets/search.svg';

export default function Header() {
    return (
        <>
            <header className='container'>

                <div className='content'>
                    <img className='logo' src={logoImg} alt="logo" />

                    <ul>
                        <li>Filmes</li>
                        <li>Séries</li>
                        <li>Pessoas</li>
                        <li>Mais</li>
                    </ul>
                </div>

                <div className='primary'>
                    <span>
                        <img className="plus" src={plusImg} alt="plus" />
                    </span>

                    <div className="language">
                       <a href="#">PT</a> 
                    </div>
                    <a href="#">Inicial Sessão</a>
                    <a href="#">Aderir ao TMDB</a>
                    
                    <img className='search' src={searchImg} alt="search"/>

                </div>
            </header>

        </>
    );
}