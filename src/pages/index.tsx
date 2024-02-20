import Image from "next/image";
import Nav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MagicBall from "./components/MagicBall";
import PriceCard from "./components/PriceCard";
import PriceCard2 from "./components/PriceCard2";
import Star from "./components/Star";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {

  const magicBallRef = useRef<HTMLDivElement>(null);

  const scrollToMagicBall = () => {
    magicBallRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main
      className="flex flex-col items-center justify-between px-4 py-8 sm:px-24 sm:py-16 bg-beige text-black font-josefine"
    >
      <Nav />

      <div className=" flex w-full justify-between items-center flex-col my-16"
        style={{
          minHeight: "72vh"
        }}
      >
        <div className="text-6xl font-black font-newYork text-center">
          <h1>Let the Stars Guide You</h1>
        </div>
        <div className="flex items-center justify-center">
          <Star />
          <Image
            src="/assets/blackLogo.png" width={1000} height={1000} alt="logo black" className="w-96 h-auto" />

        </div>
      <div
        onClick={scrollToMagicBall}
        className="w-full h-24 bg-black text-beige rounded-3xl flex items-center justify-center gap-2 cursor-pointer px-8">
        <p className="text-lg">Experience the power of astrology with our horoscope insights</p>
        <motion.div className="w-4 h-4"
          animate={{ y: [4, 0] }}
          transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
          style={{
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "12px solid beige",
            borderRadius: "10px",
          }}>
          <span></span>
        </motion.div>
      </div>
      </div>
     

      <div ref={magicBallRef}
        className="flex text-beige items-center w-full xl:w-3/4 flex-col
      items-center justify-center py-16 rounded-3xl gap-8"
        style={{ minHeight: '35em' }}
      >
        <Image src="/assets/border.png" alt="border" width={1000} height={1000} className="w-full h-auto rounded-3xl opacity-0 lg:opacity-100" />
        <MagicBall />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8 mb-16 w-full item-center justify-center">
        <PriceCard2 title="Premium" price={19} feature1="All Standard Features" feature2="Customized Horoscope" feature3="Compatibility Analysis" />
        <PriceCard />
        <PriceCard2 title="Luxury" price={29} feature1="All Premium Features" feature2="Personalized Profiles" feature3="Tarot Card Readings" />
      </div>

      <div className="bg-black rounded-3xl text-beige w-full mb-16 h-72 sm:h-60 flex flex-col justify-center items-center px-4 gap-8">
        <h3 className="font-newYork font-black text-2xl text-center">Sign Up for Our Newsletter and Stay Updated</h3>
        <div className="flex items-center gap-2  flex-col sm:flex-row">
          <input type="text" required className="bg-beige rounded-3xl h-8 w-24 text-black px-2" placeholder="your name" />
          <Image src="/assets/star.png" alt="star icon" width={500} height={500} className="w-4 h-auto cursor-pointer" />
          <input type="text" required className="bg-beige rounded-3xl h-8 w-52 text-black px-2" placeholder="your email address" />
        </div>

      </div>

      <MyFooter />
    </main>
  );
}
