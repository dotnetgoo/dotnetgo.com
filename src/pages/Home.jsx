import React from "react";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Companies from "../components/Companies";
import Teachers from "../components/Teachers";
import Footer from "../components/Footer";
import Interviews from "../components/Interviews";
import Recommendations from "../components/Recommendations";
import Results from "../components/Results";
export default function Home() {
  const { name } = useSelector(selectData);
  React.useEffect(
    function () {
      document.title = `Mukhammadkarim Tukhtaboyev | dotnetgo.com`;
    },
    [name]
  );
  return (
    <>
      <Element name={"Home"} id="home">
        <NavBar />
        <Hero />
      </Element>
      <main>
        <AboutMe />
        <Interviews />
        <Companies />
        <Teachers />
        <Recommendations />
        <Results />
      </main>
      <Footer />
    </>
  );
}
