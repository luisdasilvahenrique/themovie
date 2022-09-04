import axios from "axios";
import { format } from 'date-fns'
import pt from "date-fns/locale/pt-BR";

import { useEffect, useState } from "react";
import "./styles.scss";
import "../../global.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CardProps {
  id: number;
  image: string;
  title: string;
  rate: number;
  created_at: string;
}

interface Props {
  search?: string;
}

export default function Cards({ search }: Props) {
  const [movies, setMovies] = useState<CardProps[]>([]);
  let filteredMovies = movies;

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/movies");
      setMovies(response.data);
    })();
  }, []);


    if (search) {
      filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search?.toLowerCase() || "");
      });
    }

  return (
    <div className="card-container-scroll">
      {filteredMovies.map((movie) => {
        return (
          <div key={movie.id} className="card-content">
            <img src={movie.image} alt="" />
            <div className="info">
              <span>
                <CircularProgressbar
                  className="progressbar"
                  value={movie.rate}
                  text={`${movie.rate}`}
                  background={true}
                  styles={{
                    text: {
                      fill: "#fff",
                      fontSize: "48px",
                      fontWeight: "400",
                    },
                    background: {
                      fill: "rgb(3,37,65)",
                    },
                    path: {
                      // Path color
                      stroke: `rgb(1,198,172)`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",
                      // Customize transition animation
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      // Rotate the path
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                  }}
                />
              </span>

              <div className="peba">
                <h3>{movie.title}</h3>
                <p>
                  {format(new Date(movie["created_at"]), "dd 'de' MMM 'de' yyyy",
                    { locale: pt }
                  )}
                </p>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
