import Image from "next/image";

function HomeHeroSection() {
  return (
    <div className="headerGradient py-20 h-fit relative w-full z-10 overflow-hidden">
      <img
        className="absolute top-0 bottom-0 right-0 h-[120%] object-fill "
        src="/assets/Figure.svg"
        alt=""
      />

      <div className="grid grid-cols-7 mt-16 px-20 relative z-50 container mx-auto">
        <div className="col-span-3 my-auto flex flex-col gap-8">
          <h1 className="text-6xl text-primaryGreenDarkish font-bold ">
            Development company
          </h1>
          <p className="text-primaryGreenLight text-xl">
            Forward-thinking real estate developer, owner and investor with a
            reputation
          </p>
          <div className="flex gap-8">
            <button className="bg-primaryGreen text-primaryWhiteAccent px-4 py-2 rounded-md font-semibold">
              Services
            </button>
            <button className="bg-primarySky text-primaryGreenDarkish px-4 py-2 rounded-md font-semibold">
              About the company
            </button>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-4 items-center">
          <ul className="flex  items-end gap-4 pl-8">
            <li>
              <Image
                alt=""
                src="/assets/house-1.png"
                width={160 * 1}
                height={160 * 1}
              />
            </li>
            <li>
              <Image
                alt=""
                src="/assets/house-2.png"
                width={250 * 1}
                height={250 * 1}
              />
            </li>
            <li>
              <Image
                alt=""
                src="/assets/house-3.png"
                width={150 * 1}
                height={150 * 1}
              />
            </li>
          </ul>
          <ul className=" flex gap-8 pr-8">
            <li>
              <Image
                alt=""
                src="/assets/house-4.png"
                width={340 * 1}
                height={340 * 1}
              />
            </li>
            <li className="">
              <Image
                alt=""
                src="/assets/house-5.png"
                width={210 * 1}
                height={210 * 1}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
