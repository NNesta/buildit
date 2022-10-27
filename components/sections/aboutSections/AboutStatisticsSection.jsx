import React from "react";
import PartnersLogos from "../../generals/PartnersLogos";
import StatisticsComponent from "../../generals/StatisticsComponent";

function AboutStatisticsSection() {
  return (
    <div className="bg-primaryWhiteAccent py-16 px-20 h-fit w-full">
    <div className="container mx-auto ">
      <div className="flex flex-col gap-6 items-center pb-16">
        <h4 className="text-primaryGreenish font-medium">Statistics</h4>
        <h1 className="text-primaryGreenDarkish text-3xl font-bold mb-16">
          Development in numbers
        </h1>
        <StatisticsComponent />
      </div>
      <PartnersLogos />
      </div>
    </div>
  );
}

export default AboutStatisticsSection;
