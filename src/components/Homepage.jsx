
import Header from "./Header";
import HamburgerNav from "./HamburgerNav";



const Homepage = () => {
  return (
    <>
      <div className="hero-img min-h-screen bg-cover bg-no-repeat bg-center">
        <Header />
        <div className="h-screen flex justify-center">
          <button
            href=""
            className="button my-auto text-white border bg-[#1f2021] py-3 px-5 font-medium hover:text-gray-400 hover:opacity-90"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
