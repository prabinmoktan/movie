import { movie } from "../interface/global.interafce";

import { useNavigate } from "react-router-dom";
import Card from "./card/Card";

const MovieCard: React.FC<movie> = ({ movie }) => {
  const navigate = useNavigate();

  const viewDetailHandler = (id: number | undefined) => {
    {
      movie?.media_type === "movie" && id && navigate(`/trendingMovies/${id}`);
    }
    {
      movie?.media_type === "tv" && id && navigate(`/tvShows/${id}`);
    }
    {
      !movie?.media_type &&
        id &&
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
        title={movie?.title || movie?.name}
        onClick={() => viewDetailHandler(movie.id)}
      />
    </>
  );
};

export default MovieCard;
