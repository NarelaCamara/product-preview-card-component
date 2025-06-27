function App() {
  return (
    <div className="w-full  h-full">
      <div className="bg-[#FFFFFF] w-80 p-8  rounded-lg flex flex-col items-start font-[Montserrat] ">
        <p className="text-[#6C7289]  text-xs">PERFUME</p>
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
        <button className="bg-[#3D8168] text-white text-sm px-8 py-4 rounded-lg font-[Montserrat]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
