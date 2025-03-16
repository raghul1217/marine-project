import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RoomIcon from "@mui/icons-material/Room";

const VisionSection = () => {
  return (
    <section className="py-16 contact-bg" style={{ marginTop: "-150px" }}>
  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 contact-bg1">
    <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col items-center border glass-bg1">
        <div className="flex items-center justify-center h-12 w-12 rounded-md  text-white c-btn">
          <PhoneIcon className="w-6 h-6" />
        </div>
        <div className="mt-5 text-center">
          <h3 className="mt-2 text-lg font-medium c-head">Phone</h3>
          <p className="mt-1 text-sm lg:text-base c-label">
            +91-7010534355 <br />
            +91-6369090055
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center border glass-bg1">
        <div className="flex items-center justify-center h-12 w-12 rounded-md  text-white c-btn">
          <MailOutlineIcon className="w-6 h-6" />
        </div>
        <div className="mt-5 text-center">
          <h3 className="mt-2 text-lg font-medium c-head">Email</h3>
          <p className="mt-1 text-sm lg:text-base c-label">
            manikandansns05@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center border glass-bg1">
        <div className="flex items-center justify-center h-12 w-12 rounded-md text-white c-btn">
          <RoomIcon className="w-6 h-6" />
        </div>
        <div className="mt-5 text-center">
          <h3 className="mt-2 text-lg font-medium c-head">Location</h3>
          <p className="mt-1 text-sm lg:text-base c-label">
            <span>Head Office</span> No.42 Boatman Street, Devanampattinam, Cuddalore.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default VisionSection;
