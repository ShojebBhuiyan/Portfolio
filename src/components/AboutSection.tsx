import { type NextComponentType } from "next";
import { AboutImage } from "./AboutImage";

export const AboutSection: NextComponentType = () => {
  return (
    <div className="flex h-auto justify-center gap-[10rem] py-20">
      <AboutImage />
      <div className="flex flex-col justify-center gap-10 px-5 text-primary">
        <h1 className="text-3xl">ABOUT ME</h1>
        <h1 className="text-xl">
          I&apos;m a Full Stack Engineer specializing in web application
          development. <br /> I&apos;m also researching on Quantum Computers and <br />
          extending their application to various domains such as Machine
          Learning and Networking.
        </h1>
        <button className="rounded-full  bg-secondary py-2 text-2xl text-white">
          View CV
        </button>
      </div>
    </div>
  );
};
