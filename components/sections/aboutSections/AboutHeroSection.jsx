import Image from "next/image";

function AboutHeroSection() {
  return (
    <div className="aboutHeroGradient h-fit w-full pt-32">
      <div className="grid grid-cols-2 justify-end container mx-auto  mt-12 px-20 ">
        <div className="w-full h-full">
          {/* <Image className='object-contain' src="/assets/about-1.png" width={324} height={420} />
            <Image className='absolute top-0 bg-red-500 right-0'  src="/assets/about-2.png" width={220} height={285} /> */}
          <div className="object-cover  my-auto ">
            <Image src="/assets/about-1.png" width={324} height={420} />
          </div>
          <div className="object-cover  relative bottom-44 -right-60  my-auto ">
            <Image src="/assets/about-2.png" width={220} height={285} />
          </div>

          {/* <Image className='mx-auto'  src='/assets/ownerProfile.png' width={500*0.65} height={375*0.8} /> */}
        </div>
        <div className="flex flex-col gap-4 max-w-[90%] ">
          <h4 className="text-base text-primaryGreenish font-mediun">
            About us
          </h4>
          <h1 className="text-4xl text-primaryGreenDarkish font-bold">
            Owner and investor with a reputation
          </h1>
          <p className="text-primaryGreenAccent max-w-[82%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
