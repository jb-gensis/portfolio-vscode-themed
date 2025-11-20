import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "margensis14@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Cebu City, Philippines",
      Link: "https://www.google.com/maps/@10.2617,123.8359381,67m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/@10.2633039,123.8392701,160m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+63 912 744 6674",
      Link: "tel:+639127446674",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Salazar Colleges of Science and Institute of Technology",
      Link: "null",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor of Science Information Technology",
      Link: "null",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/jb-gensis",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/john-bhremar-gensis/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/jb-gensis",
    },
    // {
    //   Icon: FaInstagram,
    //   Label: "Instagram",
    //   Link: "https://www.instagram.com/_jhn.gnss/",
    // },
  ],
};
