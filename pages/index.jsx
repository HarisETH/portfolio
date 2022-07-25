import Head from "next/head";
import { useState, useEffect } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Stack from "../components/Stack";
import Connect from "../components/Connect";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  const [isActive, toggler] = useState(true);

  const player = () => {
    const nameAudio = document.getElementById("nameAudio");
    nameAudio.play();
  };

  const isToggle = () => {
    toggler(!isActive);
  };
  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  });

  return (
    <section
      className={`${
        isActive ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col`}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Haris Kumar - Portfolio</title>
        <meta name="title" content="Haris Kumar - Portfolio" />
        <meta
          name="description"
          content="I'm Haris Kumar , Founder of Four39 . I'm a Web Developer, UG in Physics, Crypto Enthusiast, Educational Content Creator, Indie Maker This is the Portfolio of Haris Kumar . haris.one"
        />
        <meta
          name="keywords"
          content="four39, four39codes, four39 codes, four39 instagram, four39 twitter,Haris.one, Haris one, four39 web, four39.one, four39 web development, four39 haris, haris, frontend web developer, #four39, @four39Codes, haris one, haris kumar, haris kumar portfolio , Haris_ETH "
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en-us" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haris.one/" />
        <meta property="og:title" content="Haris Kumar - Portfolio" />
        <meta
          property="og:description"
          content="I'm Haris Kumar , Founder of Four39 . I'm a Web Developer, UG in Physics, Crypto Enthusiast, Educational Content Creator, Indie Maker This is the Portfolio of Haris Kumar . haris.one"
        />
        <meta property="og:image" content="https://raw.githubusercontent.com/HarisETH/portfolio/main/public/meta-img.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://haris.one/" />
        <meta property="twitter:title" content="Haris Kumar - Portfolio" />
        <meta
          property="twitter:description"
          content="I'm Haris Kumar , Founder of Four39 . I'm a Web Developer, UG in Physics, Crypto Enthusiast, Educational Content Creator, Indie Maker This is the Portfolio of Haris Kumar . haris.one"
        />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/HarisETH/portfolio/main/public/meta-img.png" />
      </Head>

      <Nav isActive={isActive} scroll={scroll}></Nav>
      <div
        className={` flex flex-col gap-6 min-h-screen w-full tracking tight px-4 md:pl-10 md:pr-26 pb-12 pt-12 md:pt-24`}
      >
        <header className="flex justify-between ">
          <div className="flex flex-col">
            <div className="text-2xl md:text-3xl font-bold tracking-tight flex gap-3 md:gap-4 items-center">
              <h1>Haris Kumar</h1>
              <audio id="nameAudio" src="/nm.ogg"></audio>
              <button
                onClick={player}
                className={`p-1 mt-0.5 rounded-full flex justify-center ${
                  isActive ? "bg-white" : "bg-black"
                } items-center grid place-items-center opacity-70 hover:opacity-90`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isActive ? "black" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-medium tracking-tight">
              Physicist who builds blazing websites
            </h2>
          </div>

          <button
            onClick={isToggle}
            className={`md:h-8 md:mr-10 md:w-8 w-6 h-6 bg-gray-600 outline-none rounded-full flex border-4 ${
              isActive ? "border-white" : "border-gray-300"
            } lg:mr-20`}
          >
            <div
              className={`${
                isActive ? "bg-white" : "bg-black"
              } w-1/2 rounded-l-full h-full`}
            ></div>

            <div
              className={`${
                isActive ? "bg-black" : "bg-white"
              } w-1/2 rounded-r-full h-full`}
            ></div>
          </button>
        </header>

        <hr
          className={`w-full md:w-1/2 ${
            isActive ? "opacity-25" : "opacity-100"
          }`}
        />

        <About></About>
        <hr className={`w-full ${isActive ? "opacity-25" : "opacity-100"}`} />

        <Skills></Skills>
        <hr className={`w-full ${isActive ? "opacity-25" : "opacity-100"}`} />

        <Stack isActive={isActive}></Stack>
        <hr className={`w-full ${isActive ? "opacity-25" : "opacity-100"}`} />

        <Connect></Connect>
      </div>
      <hr className={`w-full ${isActive ? "opacity-25" : "opacity-100"}`} />

      <Footer></Footer>
    </section>
  );
}
