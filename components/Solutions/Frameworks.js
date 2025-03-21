import Image from "next/image";
import React from "react";

const Frameworks = () => {
  return (
    <>
      <div className="container mx-auto text-center">
        <h3>Frameworks We Align With</h3>
        <div className="flex">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/logo-01.png"
            width={150}
            height={150}
            alt="amazonaws"
          />
        </div>
      </div>
    </>
  );
};

export default Frameworks;
