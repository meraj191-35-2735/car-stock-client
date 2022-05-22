import "./Home.css";
import Cars from "../Cars/Cars";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import BlogPost from "../BlogPost/BlogPost";

const Home = () => {
  return (
    <div className="container">
      <Banner></Banner>
      <div className="d-flex justify-content-center">
        <h3 className="my-5">Stock Details</h3>
      </div>
      <Cars></Cars>
      <Feature></Feature>
      <BlogPost></BlogPost>
    </div>
  );
};

export default Home;
