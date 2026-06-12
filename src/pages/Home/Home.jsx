import bannerImg from "../../assets/background_banner.jpg";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import React from "react";


const Home = () => {
  const [query, setQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]); 

   const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    );
    const data = await response.json();
    console.log(data);

    if (data.Search) {
      setMovies(data.Search.slice(0, 6)); // ✅ saves results to state
    } else {
      setMovies([]);           // ✅ clears results if nothing found
      console.log("No results found");
    }
  };
 
 
  return (
    <main>
      <div className="wrapper">
        <header>
          <div className="banner">
            <img src={bannerImg} alt="" />

            <div className="banner__text">
              <div className="banner__text-wrapper">
                <h1>Find Your Favorite Movies 
                  Without The Hassle.</h1>
              </div>
              <form className="search" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search for a movie..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="submit" type="submit">Search</button>
              </form>
            </div>
          </div>
        </header>
 <div className="movies">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Home;

