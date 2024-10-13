import Founder from "../assets/img/founder.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-full lg:min-h-screen border-b-2 border-black"
    >
      <div className="m-5 flex">
        <h1 className="text-white text-2xl font-bold uppercase montbold bg-blurb text-center p-3">
          About
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full h-full items-center p-3 lg:p-10 space-y-5 lg:space-y-0 lg:space-x-5 ">
        <img
          src={Founder}
          alt="Founder"
          className="w-6/12 md:4/12 lg:w-2/12 border-4 border-black rounded-3xl p-1"
        />
        <div className="space-y-5 flex flex-col p-1 lg:p-8 items-center">
          <p className="p-3 w-full lg:w-8/12 text-center">
            We trace our roots back to Shri S.N.N. Sankarlinga Iyer, Banker,
            Industrial, Philanthropist, Visionary and Co-founder of The India
            Cements Ltd.
          </p>
          <div className="lg:space-x-10 space-y-5 lg:space-y-0 flex flex-col lg:flex-row">
            <p className="p-3 lg:p-5 w-full lg:w-8/12 indent-10">
              His third son, Shri K.S. Krishnamoorthy, who was involved in
              various pioneering contracts such as the construction of
              Breakwater for Chennai Port Trust and the world famous Jog falls
              contract founded Krishna Mines in the year 1958. Since then, the
              company has grown and diversified its business interests while
              still retaining mining specialization as its core activity.
            </p>
            <p className="p-3 lg:p-5 w-full lg:w-8/12 indent-10">
              It is currently run by the 4th generation of the family who guide
              the company with the same principles of excellence as envisioned
              by its founders. Limestone Mining, Mining Services, Mineral
              Micronization & Processing, Slaked Lime Powder, Skim Coat, Wall
              Primers, Tile Adhesives, Waterproofing compound, Retail Fuel and
              Agriculture are some of the group’s undertaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
