import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function SocialIcons() {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/marius-tanase",
      icon: <FaLinkedinIn />,
      label: "LinkedIn Profile",
    },
    {
      href: "https://github.com/MariusTanase",
      icon: <FaGithub />,
      label: "Github profile",
    },
    {
      href: "https://twitter.com/Marius1n",
      icon: <FaTwitter />,
      label: "Twitter profile",
    },
    {
      href: "https://www.facebook.com/tanaseMariux/",
      icon: <FaFacebookF />,
      label: "Facebook profile",
    },
  ];

  return (
    <div
      className="
        absolute left-0 top-1/2 -translate-y-1/2 ml-8 space-y-6 z-1
        md:block hidden
      "
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-white hover:text-primary transition-colors block text-2xl"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
