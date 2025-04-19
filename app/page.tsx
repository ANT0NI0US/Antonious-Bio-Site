import Banner from "./_components/Banner";
import Links from "./_components/Links";
import Cards from "./_components/Cards";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mt-12 flex items-center justify-center flex-col p-4 gap-4 text-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-secondary">
            Antonious Nasr Kamel
          </h1>
          <h2 className="text-lg text-muted">
            Frontend Developer ( React + Next )
          </h2>
        </div>
        <Links />
        <p className="w-full sm:w-2/3 2xl:w-[40%] text-lg">
          I&apos;m a Frontend Developer passionate about crafting responsive,
          high-performance web applications using React, Next.js, and modern UI
          frameworks. I turn design ideas into interactive, accessible, and
          scalable user interfaces. Let&apos;s build something amazing.
        </p>
        <Cards />
      </div>
    </>
  );
}
