import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-56 w-full">
      <div
        className="w-full h-full bg-cover bg-center clip-curve"
        style={{ backgroundImage: "url('/coverV1.jpg')" }}
      />

      <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 shadow-md rounded-full border-[20px] border-primary overflow-hidden">
        <Image
          className="border-4 border-text rounded-full"
          src="https://i.ibb.co/1GLrWXN/antonious-Nasr-Kamel.webp"
          alt="profile"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
