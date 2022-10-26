import React from "react";
import Image from "next/image";
import ContactForm from "../../generals/ContactForm";

function HomeContactSection() {
  return (
    <div className="h-fit w-full pt-40 pb-16 px-16 bg-primaryWhiteAccent">
      <div className="grid grid-cols-2 gap-4 w-[1240px] max-w-[80%] mx-auto">
        <div className="flex flex-col gap-16 text-primaryGreenDarkish">
          <div className="flex flex-col gap-6">
            <h4 className="text-primaryGreenish font-medium">Contact</h4>
            <h1 className="text-3xl font-bold">Get In Touch</h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primarySkyDry py-2 px-3 self-start rounded-md">
              <Image alt="" src="/assets/phone-icon.svg" width={25} height={25} />
            </div>
            <div className="flex flex-col">
              <h4>Tel</h4>
              <h4 className="font-bold">708-790-0000</h4>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primarySkyDry py-2 px-3 self-start rounded-md">
              <Image alt="" src="/assets/email.svg" width={25} height={25} />
            </div>
            <div className="flex flex-col">
              <h4>Email</h4>
              <h4 className="font-bold">sales@buildit.site</h4>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primarySkyDry py-2 px-3 self-start rounded-md">
              <Image alt="" src="/assets/office-icon.svg" width={25} height={25} />
            </div>
            <div className="flex flex-col">
              <h4>Office</h4>
              <h4 className="font-bold max-w-[60%]">
                60 Manor Station St. Fairport, NY 14450
              </h4>
            </div>
          </div>
        </div>
        <ContactForm />
        <div></div>
      </div>
    </div>
  );
}

export default HomeContactSection;
