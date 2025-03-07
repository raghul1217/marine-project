import React from "react";
import MapComponent from "./MapComponent";
import EmailForms from "./EmailForm";
import ContactDetails from "./ContactDetails";
import VisionSection from "../cardSection/contactCard";

const ContactPage = () => {
  return (
    <section className="mb-32 contact-bg">
      <MapComponent />
      <div data-aos="zoom-out" className=" container px-6 md:px-12">
        <div className="block rounded-lg glass-bg px-6 py-12 -mt-[100px]  border ">
          <div className="flex flex-wrap">
            <EmailForms />
            <ContactDetails />
          </div>
        </div>
      </div>
      <VisionSection/>
    </section>
  );
};

export default ContactPage;
