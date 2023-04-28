import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AboutSection } from "~/components/AboutSection";
import { HeroSection } from "~/components/HeroSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shojeb Bhuiyan</title>
        <meta name="description" content="Personal Portfolio of Md. Shahriar Islam Bhuiyan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-auto w-auto flex flex-col">
        <HeroSection />
        <hr className="border-t border-gray-400 my-8 w-4/5 self-center"/>
        <AboutSection />
        <hr className="border-t border-gray-400 my-8 w-4/5 self-center"/>
      </main>
    </>
  );
};

export default Home;
