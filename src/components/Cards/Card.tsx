import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.scss'

interface CardProps {
    id: number;
    image: string
    title: string;
    rate: number;
    created_at: Date;
}

export default function Card() {

    // const [movies, setMovies] = useState<CardProps[]>([]);

    // useEffect(() => {
    //   axios.get('http://localhost:3000/movies')
    //   .then(response => {
    //     setMovies(response.data);
    //   })
    // }, [])

    // key={id}
    return (
        <div className="card-container-scroll">
            <div className="card-content">
                <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/aeJHkkrDvbXPB25NghNbv5kUBVi.jpg' alt="" />
                <div className="info">
                    <span>81</span>
                    <p>05/08/22</p>
                    <h3>Sorte</h3>
                </div>
            </div>
        </div>
    );
}