import CardOptions from "./_components/CardOptions";
import Categories from "./_components/Categories";
import Connect from "./_components/Connect";
import Hero from "./_components/Hero";
import Reviews from "./_components/Reviews";
import Steps from "./_components/Steps";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
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
