import Image from "next/image";

export const AboutImage = () => {
  return (
    <div className="h-[20rem] w-[20rem] rounded-[2.5rem] border-[0.4rem] bg-primary">
      <div className="-my-10 mx-10 h-[20rem] w-[20rem] overflow-hidden rounded-[2.5rem] bg-red-500">
        <Image
          src={"/images/Main.png"}
          height={320}
          width={320}
          layout={"responsive"}
          alt=""
        />
      </div>
    </div>
  );
};
