import { useTrendingAllQuery } from "../trendingMovies/redux/trending.api";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import "./trendingAll.css";
import { useNavigate } from "react-router-dom";

const TrendingAll = ({ limit }: any) => {
  const { data, isLoading } = useTrendingAllQuery();
  const navigate = useNavigate();

  const trendingAllMovies = limit
    ? data?.results.slice(0, limit)
    : data?.results;

  const handleClick = (id: number, media_type: string) => {
    media_type === "tv"
      ? navigate(`/tvShows/${id}`)
      : navigate(`/trendingMovies/${id}`);
  };
  return (
    <>
      <Grid
        container
        flexDirection={"column"}
        border={"2px solid grey"}
        p={2}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="h6">Trending</Typography>
        {isLoading
          ? Array.from({ length: limit }).map((_, index) => (
              <Box key={index} display={"flex"} justifyContent={"space-between"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Skeleton
                    width={100}
                    animation={"wave"}
                    sx={{ background: "grey" }}
                  />
                  <Skeleton
                    width={30}
                    animation={"wave"}
                    sx={{ background: "grey" }}
                  />
                </Box>
                <Box>
                  <Skeleton
                    width={50}
                    height={100}
                    animation={"wave"}
                    sx={{ background: "grey" }}
                  />
                </Box>
              </Box>
            ))
          : trendingAllMovies?.map((item, index) => (
              <div
                key={index}
                className="board"
                // @ts-ignore
                onClick={() => handleClick(item.id, item.media_type)}
              >
                <div>
                  <Typography variant="body2">
                    {item.name || item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ background: "grey", borderRadius: "5px", px: 2 }}
                  >
                    {item.media_type}
                  </Typography>
                </div>
                <div>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" + item.poster_path
                    }
                    alt="..."
                    height={60}
                  />
                </div>
              </div>
            ))}
      </Grid>
    </>
  );
};

export default TrendingAll;
