import Header from "./Header";
import HamburgerNav from "./HamburgerNav";
import MainText from "./Main";
import { Grid } from "./Main";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-img min-h-screen bg-cover bg-no-repeat bg-center">
        <Header />
        <div className="h-screen flex justify-center">
          <button
            onClick={() => navigate("/all-products")}
            href=""
            className="button my-auto text-white border bg-[#1f2021] py-3 px-5 font-medium hover:text-gray-400 hover:opacity-90"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <MainText />
      <Grid />
    </>
  );
};

export default Homepage;
