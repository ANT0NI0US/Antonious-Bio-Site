import { CgWebsite } from "react-icons/cg";
import { PiReadCvLogoLight } from "react-icons/pi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const cards = [
  {
    href: "https://antonious-portfolio.netlify.app/",
    label: "Portfolio",
    icon: CgWebsite,
    text: "Explore My Portfolio",
    animation: "animate-right-to-left",
  },
  {
    href: "https://drive.google.com/file/d/1DP_0LX4_9VBgV5IE-mKRGZPTVQWQnNyr/view",
    label: "CV",
    icon: PiReadCvLogoLight,
    text: "Explore My CV",
    animation: "animate-left-to-right",
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
  {
    href: "https://www.facebook.com/AntoniousNasrKamel/",
    label: "Facebook",
    icon: FaFacebookF,
    title: "Check out my Facebook profile",
  },
  {
    href: "https://www.instagram.com/antonious_nasr/",
    label: "Gmail",
    icon: FaInstagram,
    title: "Check out my Instagram profile",
  },
  {
    href: "https://x.com/T0T0SNasr",
    label: "Twitter",
    icon: FaXTwitter,
    title: "Check out my Instagram Twitter",
  },
];
