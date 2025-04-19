import IconLink from "./IconLink";
import { socialLinks } from "../_data/links";

export default function Links() {
  return (
    <ul className="w-full flex items-center justify-center gap-2">
      {socialLinks.map((link) => (
        <li key={link.href}>
          <IconLink {...link} />
        </li>
      ))}
    </ul>
  );
}
