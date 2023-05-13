import React from "react";
import Contact from "../components/Contact/Contact";
import { Contacts } from "../constants/Contacts";

function ContactPage() {
  return (
    <div>
      <Contact />
      <Contacts/>
    </div>
  );
}

export default ContactPage;
