import bannerImg from "../../assets/background_banner.jpg";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import React from "react";
const Home = () => {
  const [query, setQuery] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", query);
  };
  return (
    <main>
      <div className="wrapper">
        <header>
          <div className="banner">
            <img src={bannerImg} alt="" />

            <div className="banner__text">
              <div className="banner__text-wrapper">
                <h1>Find Your Favorite Movies Without The Hassle.</h1>
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
      </div>
    </main>
  );
};

export default Home;

