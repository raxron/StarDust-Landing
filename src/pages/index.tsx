import Image from "next/image";
import Nav from "./components/MyNav";
import MagicBall from "./components/magicBall";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-beige text-black font-josefine"
    >
      <Nav />
      <div className="flex w-full justify-center flex-col items-center">

        <Image src="/assets/blackLogo.png" width={1000} height={1000} alt="logo black" className="w-80 h-auto" />
        <MagicBall />
      </div>

      <div className="w-full h-24 bg-black text-beige rounded-3xl flex items-center justify-center gap-2">
        <p>Let the Starts Guide You</p>
        <div className="w-4 h-4"
          style={{
            "borderLeft": "12px solid transparent",
            "borderRight": "12px solid transparent",
            "borderTop": "12px solid beige",
            "borderRadius": "10px",
          }}>
          <span></span>
        </div>
      </div>
    </main>
  );
}
