import bannerImg from '../../assets/banner.png';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

const Home = () => {
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

export default Home;