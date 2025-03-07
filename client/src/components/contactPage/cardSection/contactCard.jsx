import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RoomIcon from "@mui/icons-material/Room";

const VisionSection = () => {
  return (
    <section className="py-16" style={{ marginTop: "-100px" }}>
  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col items-center p-4 border">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4a91a0] text-white">
          <PhoneIcon className="w-6 h-6" />
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-lg font-medium text-gray-900">Phone</h3>
          <p className="mt-2 text-sm lg:text-base text-gray-500">
            +91-7010534355 <br />
            +91-6369090055
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 border">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4a91a0] text-white">
          <MailOutlineIcon className="w-6 h-6" />
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <p className="mt-2 text-sm lg:text-base text-gray-500">
            manikandansns05@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 border">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#4a91a0] text-white">
          <RoomIcon className="w-6 h-6" />
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-lg font-medium text-gray-900">Location</h3>
          <p className="mt-2 text-sm lg:text-base text-gray-500">
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
