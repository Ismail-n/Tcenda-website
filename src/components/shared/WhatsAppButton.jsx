import Image from "next/image";
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "966538408310";
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp_float"
    >
      <Image
        src={"/images/icons/whatsApp.svg"}
        width={64}
        height={64}
        alt="whatsapp"
      />
    </a>
  );
};

export default WhatsAppButton;
