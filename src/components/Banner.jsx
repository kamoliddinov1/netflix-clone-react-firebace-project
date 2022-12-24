import React, { useState, useEffect } from "react";
import axios from "../server/axios";
import sorov from "../server";
import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  console.log(movie);

  useEffect(() => {
    const fetchMovie = async () => {
      const responseData = await axios.get(sorov.fetchNetflixOriginals);
      setMovie(
        responseData.data.results[
          Math.floor(Math.random() * responseData.data.results.length)
        ]
      );
    };
    fetchMovie();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "inherit",
          background: "linear-gradient(90deg, #070707f7 50%, transparent 75%)",
          padding: "0 35px",
        }}
      >
        <Box sx={{}}>
          <Typography sx={{ fontSize: "50px", color: "white" }}>
            {movie.original_name}
          </Typography>
          <Box sx={{p:4}}>
            <Button variant="contained" color="inherit">Play</Button>
            <Button color="error">My List</Button>
          </Box>
          <Typography sx={{ color: "white", width:{xs:'70%', sm:'60%', md:'50%', lg:'50%'}}}>{movie.overview}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
