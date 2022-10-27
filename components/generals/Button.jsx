import React from "react";

function Button(props) {
  const { name, small, light } = props;
  return (
    <button
      className={`${
        !light
          ? "callButtonGradient text-primaryWhiteAccent"
          : "bg-primarySky text-primaryGreenDarkish"
      }  py-2 ${!small ? "px-16" : "px-4"} font-semibold rounded-md`}
    >
      {name}
    </button>
  );
}

export default Button;
