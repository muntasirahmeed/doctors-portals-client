import React, { useState } from "react";
import Footers from "../../Shared/Footers/Footers";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Apointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="mx-0 md:mx-10">
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments date={date}></AvailableAppointments>
    
    </div>
  );
};

export default Apointment;
