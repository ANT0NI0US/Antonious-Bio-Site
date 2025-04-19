import { CgWebsite } from "react-icons/cg";
import { PiReadCvLogoLight } from "react-icons/pi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const cards = [
  {
    href: "https://antonious-portfolio.netlify.app/",
    label: "Portfolio",
    icon: CgWebsite,
    text: "Explore My Portfolio",
  },
  {
    href: "https://drive.google.com/file/d/1BAKOvH7MpM1FsE_V4vtagWrbzhPxi34k/view",
    label: "CV",
    icon: PiReadCvLogoLight,
    text: "Explore My CV",
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr/",
    label: "LinkedIn Profile",
    icon: FaLinkedinIn,
    title: "Visit my LinkedIn profile",
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    icon: FaGithub,
    title: "Check out my GitHub profile",
  },
  {
    href: "http://wa.me/+201285551479",
    label: "Whatsapp",
    icon: FaWhatsapp,
    title: "Send me a message on WhatsApp",
  },
  {
    href: "mailto:antoniousnasr3@gmail.com",
    label: "Gmail",
    icon: SiGmail,
    title: "Email me at antoniousnasr3@gmail.com",
  },
];
