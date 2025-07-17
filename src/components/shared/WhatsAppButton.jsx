import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "966538408310";
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp_float"
      animate={{
        y: [0, -10, 0], // move up and down
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Image
        src={"/images/icons/whatsApp.svg"}
        width={64}
        height={64}
        alt="whatsapp"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
