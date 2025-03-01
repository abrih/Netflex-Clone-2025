import axios from "../../Utils/axios";
import requested from "../../Utils/requested";
import { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  //https://api.themoviedb.org/3/discover/tv?api_key=ce50326fcd3b02eee9033b487d9589ea&with_networks=123

useEffect(() => {
  (async () => {
    try {
      const request = await axios.get(requested.fetchNetflixOrginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    } catch (error) {
      console.log("error", error);
    }
  })();
}, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
        height: "90vh",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
