import NavBar from "@/Components/NavBar";
import Hero from "@/app/Hero/page";
import About from "@/app/About/page";
import OurGames from "@/app/OurGames/page";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
    <div id='Hero'><Hero /></div>    
    <div id='About'><About /></div>
    <div id='Ourgames'><OurGames /></div>
    <Footer />
    </>
  );
}
