import Image from "next/image";

function PartnersLogos() {
  const images = [
    { link: "/assets/vector-1.svg", height: 43.17, width: 51.06 },
    { link: "/assets/Vector-2.svg", height: 40, width: 60 },
    { link: "/assets/Vector-3.svg", height: 40, width: 217.17 },
    { link: "/assets/Vector-4.svg", height: 30, width: 78 },
    { link: "/assets/Vector-5.svg", height: 45, width: 94.61 },
  ];
  return (
    <div className="flex items-center bg-transparent border-y-[1px] border-primaryGreenAccent justify-center py-4 gap-16 w-full  mx-auto">
      {images.map((image, index) => (
        <Image
          key={index}
          alt={"image" + index}
          src={image.link}
          height={image.height}
          width={image.width}
        />
      ))}
    </div>
  );
}

export default PartnersLogos;
