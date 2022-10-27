import Image from "next/image";

function WorkerCard(props) {
  const { name, position, image } = props;
  return (
    <div className="flex flex-col teamCardDropShadow">
      <Image alt="" src={image} width={328 * 1} height={278 * 1} />
      <div className="flex flex-col teamGradient px-4 py-2">
        <p className="font-semibold text-primaryGreenDarkish">{name}</p>
        <p className=" text-primaryGreenDarkish">{position}</p>
      </div>
    </div>
  );
}

export default WorkerCard;
