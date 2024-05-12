import CardOptions from "./_components/CardOptions";
import Categories from "./_components/Categories";
import Connect from "./_components/Connect";
import Hero from "@/components/Hero";
import Reviews from "./_components/Reviews";
import Steps from "./_components/Steps";

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
    </>
  );
}
