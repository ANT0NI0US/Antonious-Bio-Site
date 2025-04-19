import type { IconType } from "react-icons";

interface IconLinkProps {
  href: string;
  icon: IconType;
  title: string;
  label: string;
}

export default function IconLink({
  href,
  icon: Icon,
  title,
  label,
}: IconLinkProps) {
  return (
    <a
      className="text-3xl hover:text-secondary transition-all"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={label}
    >
      <Icon />
    </a>
  );
}
