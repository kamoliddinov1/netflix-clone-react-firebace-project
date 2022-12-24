import React, { useState, useEffect } from "react";
import axios from "../server/axios";
import sorov from "../server";
import YouTube from "react-youtube";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const Films = ({ title, movie_request, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchDatas = async () => {
      const responseData = await axios.get(movie_request);
      setMovies(responseData.data.results.slice(0, 6));
    };
    fetchDatas();
  }, [movie_request]);

  const fetchMovieTrailer = async (movie) => {
    await axios
      .get("/movie/" + movie?.id.toString() + sorov.trailerQuery)
      .then((responseData) => {
        setTrailerUrl(responseData.data.results[0]?.key);
      })
      .catch((error) => console.error(error));
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      fetchMovieTrailer(movie);
    }
  };

  const options = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="filmsCategory">
      <h3>{title}</h3>
      <div className="films">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {movies.map((movie) => (
            <Grid item xs={6} sm={4} md={4} lg={2}  key={movie.id}>
              <Tooltip
                title={movie?.original_name || movie?.original_title}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.original_title}
                  onClick={() => handleClick(movie)}
                  loading="lazy"
                  className={`film ${isLargeRow && "filmPosterLarge"}`}
                />
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </div>
      <Box sx={{maxWidth:'50px'}}>
      {trailerUrl && (
        <YouTube style={{maxWidth:'50px'}} videoId={trailerUrl} options={options} />
      )}
      </Box>
    </div>
  );
};

export default Films;
