import Button from "./Button";

function CallerComponent() {
  return (
    <div className="bg-primarySkyDry h-72 w-full py-8">
      <div className="flex justify-between items-center  border-y-[1px] border-primaryGreenAccent py-16">
        <h1 className="text-primaryGreenDarkish text-2xl font-semibold">
          Call us
        </h1>
        <div className="flex gap-8 items-center">
          <Button name="Call" />
          <Button name="Email" light />
        </div>
      </div>
    </div>
  );
}

export default CallerComponent;
