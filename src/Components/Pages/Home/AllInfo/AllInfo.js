import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import phone from "../../../../assets/icons/phone.svg";
import location from "../../../../assets/icons/marker.svg";
import Info from "../Info/Info";
const AllInfo = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 md:mx-0 my-16">
        <Info
          title="Opening Hours"
          description="Morning 10 to Evening"
          bgColor=" bg-gradient-to-r from-secondary to-primary"
          img={clock}
          imgWidth="w-[86px]"
          imgHeight="h-[86px]"
        ></Info>
        <Info
          title="Visit our location"
          description="Brooklyn, NY 10036, United States"
          bgColor=" bg-accent"
          img={location}
          imgWidth="w-[62px]"
          imgHeight="h-[86px]"
        ></Info>
        <Info
          title="Contact us now"
          description="+000 123 456789"
          bgColor=" bg-gradient-to-r from-secondary to-primary"
          img={phone}
          imgWidth="w-[77.17px]"
          imgHeight="h-[77.18px]"
        ></Info>
      </div>
    </div>
  );
};

export default AllInfo;
