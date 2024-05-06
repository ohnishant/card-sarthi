import CardOptions from "./CardOptions";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CardOptions />
      </main>
    </>
  );
}
