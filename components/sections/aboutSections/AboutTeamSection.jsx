import CallerComponent from "../../generals/CallerComponent";
import WorkerCard from "../../generals/WorkerCard";

function AboutTeamSection() {
  const teamMembers = [
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-1.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-2.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-3.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-4.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-5.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-6.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-7.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-8.png",
    },
    {
      name: "Name Surname",
      position: "Worker",
      image: "/assets/team-9.png",
    },
  ];
  return (
    <div className="w-full h-fit bg-primarySkyDry">
      <div className="container mx-auto px-20">
        <div className="flex flex-col gap-6 items-center pt-16 pb-8">
          <h4 className="text-primaryGreenish font-medium">Our team</h4>
          <h1 className="text-primaryGreenDarkish text-3xl font-bold">
            Let’s meet
          </h1>
          <div className="grid grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <WorkerCard
                name={member.name}
                position={member.position}
                image={member.image}
                key={index}
              />
            ))}
          </div>
        </div>
        <CallerComponent />
      </div>
    </div>
  );
}

export default AboutTeamSection;
