import { useState } from "react";
import { products } from "../data";

const Product = () => {
  const [modal, setmodal] = useState("Aglime");
  const pro = [
    "Aglime",
    "Aquaproof",
    "Floorfixer",
    "Slakedlimepowder",
    "Wallprimer",
    "Wallputty",
    "Waterproofwallputty",
  ];
  return (
    <div id="product" className="w-full h-auto border-b-2 border-black">
      <div className="m-5 flex">
        <h1 className="text-white text-2xl font-bold uppercase montbold bg-blurb text-center p-3">
          Product & Services
        </h1>
      </div>
      <div className="p-5 flex flex-col justify-between items-center space-y-5">
        <div
          className="bg-blurw w-10/12 p-2 space-y-2 text-center flex flex-col items-center"
          onClick={() => setmodal("LimeStone")}
        >
          <h1 className="montbold border-b-2 border-black w-10/12 p-2">
            Mineral Assets
          </h1>
          <div className="flex flex-row p-5 space-x-4">
            <img
              src={products.LimeStone}
              alt="LimeStone plain"
              className="w-4/12 rounded-xl"
            />
            <div>
              <h1 className="ubuntubold">LimeStone</h1>
              <p className="p-2 m-2 indent-10 text-sm">
                Limestone is one of the most versatile Minerals found on earth
                due to its application in a variety of Industries. Renowned for
                its use since ancient times for its various properties, it has
                been a constant presence in human pursuit of civilization as far
                as 14,000 years ago. Ancient civilizations both big and small
                from around the world have relied on the versatile properties of
                limestone for several millennia to build houses and monuments,
                laying of roads, walls and dams, production of cosmetics and
                paints, manufacturing soaps and medicines.
              </p>
              <p className="p-2 m-2 indent-10 text-sm">
                This relationship between Humans and Limestone still continue to
                this day where it finds its use in various industries such as{" "}
                <span>
                  Paper, Food, Steel, Effluent & Sewage Treatment, Cement,
                  Glass, Pharmaceuticals, Detergents, Building & Construction
                  materials, Aluminium, Agriculture, Chemicals and many more.
                </span>{" "}
                <br />
                We operate multiple mineral assets both within and outside of
                the Indian Sub-continent that offers limestone with multiple
                chemical specification.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-5 items-center">
          <div className="w-4/12 h-[500px] overflow-auto bg-blurw py-3 flex flex-wrap justify-evenly items-center">
            {pro.map((key, index) => (
              <div
                key={index}
                className="flex flex-col bg-blurw w-5/12 m-2 p-3 cursor-pointer"
                onClick={() => setmodal(key)}
              >
                <h1 className="font-bold ubuntubold text-center">
                  Alpine{" "}
                  {key === "Slakedlimepowder"
                    ? "Slaked Lime Powder"
                    : key === "Waterproofwallputty"
                    ? "Water Proof Wallputty"
                    : key}
                </h1>
                <img
                  src={products[`${key}1`]}
                  alt={`Alpine ${key}`}
                  className="rounded-xl border-2 border-black mt-2"
                />
              </div>
            ))}
          </div>
          <div className="w-8/12 bg-blurw">
            <h1 className="flex-1 p-3 text-center font-bold ubuntubold uppercase border-b-2 border-black">
              Alpine{" "}
              {modal === "Slakedlimepowder"
                ? "Slaked Lime Powder"
                : modal === "Waterproofwallputty"
                ? "Water Proof Wallputty"
                : modal === "LimeStone"
                ? "LimeStone"
                : modal}
            </h1>
            <img
              src={
                modal !== "LimeStone"
                  ? products[`${modal}2`]
                  : products.LimeStone2
              }
              alt={`Alpine ${modal}`}
              className="w-full rounded-3xl p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
