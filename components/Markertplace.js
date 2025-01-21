import Footer from "./Footer";
import SimpleBanner from "./Banner";
import Timer from "./Countdown";

const Markertplace = () => {
  const products = [
    {
      titre: "The Iconic",
      img: "/1.jpg",
      dispo: "soldout",
      price: "100,944dt",
    },
    {
      titre: "The Brother",
      img: "/2.jpg",
      dispo: "100 left",
      price: "249,000dt",
    },
    {
      titre: "The Evolution",
      img: "/3.jpg",
      dispo: "soldout",
      price: "89,000dt",
    },
    {
      titre: "Times has come",
      img: "/4.jpg",
      dispo: "1 left",
      price: "89,000dt",
    },
  ];

  return (
    <div className="text-white">
      <header className="flex flex-col  text-center items-center justify-center">
        <SimpleBanner />
      </header>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://w.wallhaven.cc/full/6d/wallhaven-6dvd2q.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">sawerni</h1>
            <p className="mb-5">
            behind every scan there is a story
            </p>
            <button className="btn btn-primary">ORDER NOW</button>
          </div>
        </div>
      </div>
      <Timer />

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {products.map((product, index) => (
    <div
      key={index}
      className="relative border-2 border-black p-6 flex flex-col items-center"
    >
      {/* Label SOLD OUT en haut à gauche */}
      {product.dispo === "soldout" && (
        <div className="absolute top-2 left-2 bg-black text-red-600 px-2 py-1 text-sm">
          SOLD OUT
        </div>
      )}

      {/* Badge de disponibilité ou autre info en haut à droite */}
      {product.dispo !== "soldout" && (
        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-sm font-bold">
          {product.dispo}
        </div>
      )}

      {/* Image du produit */}
      <img
        src={product.img}
        alt={product.titre}
        className="h-[236px] mt-4 object-cover"
      />

      {/* Infos du produit */}
      <div className="text-center mt-4">
        <h2 className="text-lg  text-black">{product.titre}</h2>
        <p className="text-black text-sm">{product.price}</p>

        {/* Indication "Sold Out" ou dispo */}
        {product.dispo === "soldout" ? (
          <div className="text-red-500 text-sm mt-2">
            Épuisé
          </div>
        ) : (
          <div className="text-green-500 text-sm mt-2">
            Disponible
          </div>
        )}
      </div>
    </div>
  ))}
</main>

      <Footer />
    </div>
  );
};

export default Markertplace;
