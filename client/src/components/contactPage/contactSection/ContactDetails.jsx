import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../../app.css";

const ContactDetails = () => {
  return (
    <div className="w-full md:w-7/12 lg:pl-12 ">
  <h2 className="mb-6 text-xl md:text-2xl font-bold">Contact Details</h2>
  <p className="mb-4 text-sm md:text-base text-gray-700">
    Feel free to get in touch with us. We are available to assist you with
    any inquiries or concerns you may have.
  </p>
  <div className="mb-4">
    <h3 className="mb-2 text-base md:text-lg font-semibold">
      <EmailIcon className="inline-block mr-2" />
      Email
    </h3>
    <p className="text-gray-700 text-sm md:text-base">manikandansns05@gmail.com</p>
  </div>
  <div className="mb-4">
    <h3 className="mb-2 text-base md:text-lg font-semibold">
      <PhoneIcon className="inline-block mr-2" />
      Phone
    </h3>
    <p className="text-gray-700 text-sm md:text-base">+91 70105 34355</p>
  </div>
  <div className="mb-4">
    <h3 className="mb-2 text-base md:text-lg font-semibold">
      <LocationOnIcon className="inline-block mr-2" />
      Address
    </h3>
    <p className="text-gray-700 text-sm md:text-base">
    Head Office No.42 Boatman Street, Devanampattinam, Cuddalore.
    </p>
  </div>
  <div className="mb-4">
    <div className="flex items-center space-x-4">
      <a
        href="https://www.facebook.com/people/Vanmoh-Chit-Funds/pfbid0KWuqR1gT6tYgQHUwtJMYgHNCZMRCDy7zEVCQMRWjn42PZraVDp8uVCEYM4ER5PgMl/?mibextid=LQQJ4d"
        className="mb-2 text-base md:text-lg font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className="inline-block mr-2" />
      </a>
      <a
        href="https://in.linkedin.com/in/kannan-mohan-0216ba214"
        className="mb-2 text-base md:text-lg font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="inline-block mr-2" />
      </a>
      <a
        href="https://instagram.com/vanmoh_chit_funds?igshid=bnVhYjh1MmV2b3Fj"
        className="mb-2 text-base md:text-lg font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="inline-block mr-2" />
      </a>
    </div>
  </div>
</div>


  );
};

export default ContactDetails;
