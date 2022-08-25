import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.scss'
import '../../global.scss';

interface CardProps {
    id: number;
    image: string;
    title: string;
    rate: number;
    created_at: string;
}

export default function Card() {

    const [movies, setMovies] = useState<CardProps[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                setMovies(response.data);
            })
    }, [])

    // 
    return (
        <div className="card-container-scroll">
            {movies.map(movie => {
                return (
                    <div key={movie.id} className="card-content">
                        <img src={movie.image} alt="" />
                        <div className="info">
                            <span>{movie.rate}%</span>
                            <h3>{movie.title}</h3>
                            <p>{movie.created_at}</p>
                        </div>
                    </div>  
                )
            })
            }
        </div>
    );
}