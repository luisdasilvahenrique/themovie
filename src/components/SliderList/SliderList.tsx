import './styles.scss'


export default function SliderList(){
    return(
        <div className="container-slider">
            <div className="header-slider">
                <h1>Os Mais Populares</h1>

                <ul className="wrap-slider">
                    <li> <a href="#">Streaming</a></li>
                    <li> <a href="#">Na TV</a></li>
                    <li> <a href="#">Para Alugar</a></li>
                    <li> <a href="#">Nos Cinemas</a></li>
                </ul>
            </div>
        </div>
    );
}