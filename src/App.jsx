import react from "react";
import bannerImg from "./assets/background_banner.jpg";

const App = () => {
  return (
    <main>
      <div className="wrapper">
        <header>
          <img src={bannerImg} alt="" />
          <h1>Find Your Favorite Movies Without The Hassle.</h1>
        </header>
        <p>Search</p>
      </div>
    </main>
  );
};

export default App;
