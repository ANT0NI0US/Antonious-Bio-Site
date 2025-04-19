import { cards } from "../_data/links";
import IconCard from "./IconCard";

export default function Cards() {
  return (
    <ul className="flex flex-col gap-3 max-w-md w-full">
      {cards.map((card) => (
        <li key={card.href}>
          <IconCard {...card} />
        </li>
      ))}
    </ul>
  );
}
