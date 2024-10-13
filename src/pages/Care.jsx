import { wecare } from "../data";

const Care = () => {
  return (
    <div id="care" className="w-full h-auto border-b-2 border-black">
      <div className="m-5 flex">
        <h1 className="text-white text-2xl font-bold uppercase montbold bg-blurb text-center p-3">
          We Care
        </h1>
      </div>
      <div className="p-5">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-5">
            <div className="flex">
              <h1 className="font-bold ubuntubold uppercase bg-blurb text-white p-2">
                Environment
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center">
              <img
                src={wecare.Environment}
                alt="Environment"
                className="sm:w-10/12 lg:w-4/12 rounded-2xl"
              />
              <div className="flex flex-col space-y-5">
                <p className="p-2 indent-10">
                  Our long-term commitment is to create a sustainable
                  environment where organizational growth and biodiversity can
                  co-exist side by side. We make this happen by “Mining with a
                  Conscience”; It is this ideology that we at Krishna Mines
                  Group, stand for as an organization and as individuals.
                  <br />
                  <br />
                  Respect for the environment is central in our approach and is
                  the fundamental idea that influences every operation carried
                  out by Krishna Mines Group. We recognize the undeniable fact
                  that efficient and responsible use of natural resources is
                  vital for the sustainability of our environment.
                </p>
                <p className="p-2 indent-10">
                  To reduce the impact of mining on the surrounding environment,
                  we employ the latest technologies and developments that have
                  resulted in reduced carbon emissions, better fuel efficiency,
                  use of eco-friendly materials, improved ambient air and water
                  quality, efficient noise suppression and various other
                  protocols.
                </p>
                <div className="flex">
                  <h1 className="font-bold ubuntubold uppercase bg-blurb text-white p-2">
                    Environmental Management
                  </h1>
                </div>
                <p className="p-2 indent-10">
                  Our aﬀorestation program plants over 10,000 saplings annually
                  at various colleges, universities, schools and public areas.
                  <br />
                  <br />
                  Our company utilizes a stringent system that ensures that
                  eﬃcient and effective land and water management is the norm.
                  <br />
                  <br />
                  Zero Waste Policy’ implementation for better utilization of
                  mineral resources.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex">
              <h1 className="font-bold ubuntubold uppercase bg-blurb text-white p-2">
                Air Management
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-center">
              <div className="flex flex-col space-y-5">
                <p className="p-2 indent-10">
                  Various dust suppression systems such as dry fog, periodical
                  water sprinkling are implemented to ensure that the atmosphere
                  is kept as pristine as possible.
                </p>
                <p className="p-2 indent-10">
                  We constantly monitor the ambient air quality in house and
                  also consult prominent government and private departments to
                  keep the environment healthy.
                </p>
              </div>
              <img
                src={wecare.Air}
                alt="Air Scene"
                className="sm:w-10/12 lg:w-4/12 rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex">
              <h1 className="font-bold ubuntubold uppercase bg-blurb text-white p-2">
                WorkForce
              </h1>
            </div>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 items-center">
              <img
                src={wecare.Workforce}
                alt="WorksMan"
                className="sm:w-10/12 lg:w-4/12 rounded-2xl"
              />
              <p className="p-2 indent-10">
                We understand that mining; an essential part of development can
                upset the fragile ecological balance of the environment.
                <br />
                <br />
                Our long-term commitment is to create a sustainable environment
                where organizational growth and bio-diversity can co-exist side
                by side. We make this happen by “Mining with a Conscience”; it
                is this ideology that we at Krishna Mines, stand for as an
                organization.
                <br />
                <br />
                To reduce the impact of mining on the surrounding environment,
                we employ the latest technologies and developments that have
                resulted in reduced carbon emissions, better fuel efficiency,
                use of eco-friendly materials etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex">
              <h1 className="font-bold ubuntubold uppercase bg-blurb text-white p-2">
                Community
              </h1>
            </div>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 items-center">
              <p className="p-2 indent-10">
                Our primary goal here at Krishna Mines Group is to produce
                local, regional and global prosperity for the construction of a
                safer, positive and greener tomorrow. All our actions are
                directed towards development with respect, dignity and
                accountability.
                <br />
                <br />
                We are a company that is environmentally responsible and
                supports the local communities in areas where we operate.
                <br />
                <br />
                To minimize any ecological disturbances, we continually focus on
                eliminating energy wastage, improving efficient use of water and
                land resources.
                <br />
                <br />
                We strongly believe that the strength and success of a company
                is intimately entwined with the growth of local communities. We
                have worked with various local bodies and panchayats over the
                years to make a positive difference for a better tomorrow to the
                individuals of the regions and the communities we operate in.
              </p>
              <img
                src={wecare.Community}
                alt="Environment"
                className="sm:w-10/12 lg:w-4/12 rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 w-full justify-evenly items-center">
            <div className="flex flex-col space-y-5">
              <div className="flex">
                <h1 className="font-bold ubuntubold uppercase bg-blurb text-white p-2">
                  Education
                </h1>
              </div>
              <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 items-center">
                <img
                  src={wecare.Education}
                  alt="Environment"
                  className="sm:w-10/12 lg:w-4/12 h-60 rounded-2xl"
                />
                <div className="bg-blurb text-white hover-w p-3">
                  <li>Providing Uniforms, Books and Stationeries</li>
                  <li>Provision of Furniture & Fixtures</li>
                  <li>Ensuring clean Drinking Water at Schools</li>
                  <li>Provision of Toilets at Schools</li>
                  <li>Fortification of School Buildings and Compound Walls</li>
                  <li>Provision of sporting equipments</li>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex">
                <h1 className="font-bold ubuntubold uppercase bg-blurb text-white p-2">
                  Health & Community
                </h1>
              </div>
              <div className="bg-blurb text-white hover-w p-3">
                <li>Plantation in local colleges, universities and schools</li>
                <li>Free Medical Aids.</li>
                <li>Deepening of Water Channels</li>
                <li>Cleaning of Water bodies.</li>
                <li>Fortification of Water tanks</li>
                <li>Construction of Toilets</li>
                <li>
                  Construction and Rehabilitation of public amenities such as
                  bus stop.
                </li>
              </div>
            </div>
          </div>
          <div>
            <p className="p-3">
              Forest Conservation programs with the Forest Departments Flora &
              Fauna Conservation programs with the Forest Departments Supply of
              Megaphones, Sleeping bags, Hiking shoes and other amenities to the
              Forest Department Provision of computers and other amenities to
              the Police Departments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care; //222 lines before mobile view with extra formt line
