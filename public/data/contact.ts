import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  // FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "margensis14@gmail.com"; // Your email for recieving emails using the email service.
// The emails are sent using a personally developed email api: https://github.com/KareemEhab/email-sender
// Feel free to clone the email service as well and deploy your own, you'll find all the steps in the README there.
// Make sure to update /src/utils/sendEmail.ts with your own deployed link.

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+63 912 744 6674",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/jb-gensis",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/john-bhremar-gensis",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "facebook.com/jb-gensis",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "instagram.com/_jhn.gnss",
  },
];
