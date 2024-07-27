import { movie } from "../interface/global.interafce";

import { useNavigate } from "react-router-dom";
import Card from "./card/Card";

const MovieCard: React.FC<movie> = ({ movie }) => {
  const navigate = useNavigate();

  const viewDetailHandler = (id: number | undefined) => {
    if (id) {
      navigate(`/trendingMovies/${id}`);
    }
    
  };
  return (
    <>
      <Card
        image={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original" + movie?.poster_path
            : ""
        }
        title={movie?.title || ""}
        onClick={() => viewDetailHandler(movie.id)}
      />
    </>
  );
};

export default MovieCard;
