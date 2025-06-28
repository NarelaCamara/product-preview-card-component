import iconCart from "./assets/icon-cart.svg";
import imageMobile from "./assets/image-product-mobile.jpg";
import imageDesktop from "./assets/image-product-desktop.jpg";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-80 md:w-[37.5rem]  md:flex flex-row ">
        <img
          src={imageMobile}
          className="rounded-t-lg md:hidden"
          alt="image mobile"
        />

        <img
          src={imageDesktop}
          className="rounded-l-lg max-md:hidden md:w-80"
          alt="image desktop"
        />

        <div className="bg-[#FFFFFF]  p-8  flex flex-col items-start font-[Montserrat] rounded-b-lg md:rounded-r-lg">
          <p className="text-[#6C7289]  text-xs tracking-[0.5rem]">PERFUME</p>
          <h2 className="text-[#1C232B] text-4xl font-[Fraunces] font-extrabold py-6">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="text-[#6C7289] text-sm font-[Montserrat] ">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className=" flex flex-row py-6">
            <h3 className="text-[#3D8168] text-4xl font-[Fraunces] font-extrabold pr-4">
              $149.99
            </h3>
            <span className="text-[#6C7289] text-xs line-through font-[Montserrat]">
              $169.99
            </span>
          </div>
          <button className="bg-[#3D8168] w-full text-white text-sm font-bold px-8 py-4 rounded-lg font-[Montserrat] flex flex-row align-middle">
            <img
              src={iconCart}
              className=" h-[1.1rem]   pr-2"
              alt="image cart"
            />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
