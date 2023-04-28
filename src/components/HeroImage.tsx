import { type NextComponentType } from "next";
import Image from "next/image";

export const HeroImage: NextComponentType = () => {
  return (
    <div className="h-[20rem] w-[20rem] rounded-full border-[0.4rem] bg-secondary-bg">
      <div className="-mx-12 -my-5 h-[20rem] w-[20rem] overflow-hidden rounded-full">
        <Image
          src={"/images/Main.png"}
          height={320}
          width={320}
          layout={"responsive"}
          className="rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};
