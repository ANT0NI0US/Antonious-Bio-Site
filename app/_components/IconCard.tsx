import type { IconType } from "react-icons";

interface IconCardProps {
  href: string;
  icon: IconType;
  text: string;
  label: string;
  animation: string;
}

export default function IconCard({
  href,
  icon: Icon,
  text,
  label,
}: IconCardProps) {
  return (
    <a
      className="shadow-md border border-secondary rounded-md py-4 px-2 flex flex-col items-center gap-3 hover:bg-secondary hover:text-text transition-all duration-500 hover:border-text group"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
    >
      <span className="text-5xl text-secondary group-hover:text-text transition-all">
        <Icon />
      </span>
      <span className="text-2xl">{text}</span>
    </a>
  );
}
