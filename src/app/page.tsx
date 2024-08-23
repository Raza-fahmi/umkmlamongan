import Image from "next/image";
import Navbar from "./component/layout/Navbar";
import Hero from "./component/layout/Hero";
import Produc from "./component/layout/Produc";
import Footer from "./component/layout/Footer";
import Testimoni from "./component/layout/Testimoni";
import About from "./component/layout/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Produc />
      <About />
      <Testimoni />
    </>
  );
}
