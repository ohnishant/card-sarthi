import CardOptions from "./CardOptions";
import Categories from "./Categories";
import Connect from "./Connect";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reviews from "./Reviews";
import Steps from "./Steps";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CardOptions />
        <Categories />
        <Steps />
        <Reviews />
        <Connect />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
