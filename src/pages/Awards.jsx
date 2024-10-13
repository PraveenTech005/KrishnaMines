import Award from "../assets/img/awards.png";

const Awards = () => {
  return (
    <div id="recognition" className="w-full h-auto border-b-2 border-black">
      <div className="m-5 flex">
        <h1 className="text-white text-2xl font-bold uppercase montbold bg-blurb text-center p-3">
          Awards and Recognition
        </h1>
      </div>
      <div className=" flex items-center justify-center p-5 lg:p-10">
        <div className="p-5 border-2 border-black rounded-3xl">
          <img
            src={Award}
            alt="Award and Recognition"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
