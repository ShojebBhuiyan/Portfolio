import { type NextComponentType } from "next";
import { HeroImage } from "./HeroImage";

export const HeroSection: NextComponentType = () => {
  return (
    <div className="flex h-auto justify-center gap-[10rem] py-20">
      <div className="flex flex-col justify-center gap-10 px-5 text-center text-primary">
        <h1 className="text-3xl">
          Md. Shahriar Islam <br />
          Bhuiyan
        </h1>
        <h2 className="text-xl">
          HI, I&apos;M A FULL-STACK SOFTWARE <br /> ENGINEER. NICE TO MEET YOU.
        </h2>
        <button className="rounded-full bg-secondary py-2 text-2xl text-white">
          View Portfolio
        </button>
      </div>
      <HeroImage />
    </div>
  );
};
