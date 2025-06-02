import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full py-3 shadow-md shadow-secondary">
      <Image
        src="https://i.ibb.co/6RKTZfXd/icon.webp"
        alt="Antonious Nasr Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
