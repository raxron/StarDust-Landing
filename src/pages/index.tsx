import Image from "next/image";
import Nav from "./components/MyNav";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-beige text-black font-josefine"
    >
      <Nav />
      <div className="flex w-full justify-between">
        <div>
          <h2>Let the Stars Guide You</h2>
        </div>
        <Image src="/assets/blackLogo.png" width={1000} height={1000} alt="logo black" className="w-80 h-auto" />
        <div>
          <p>being one of us</p>
        </div>
      </div>

      <div className="w-full h-32 bg-black text-beige rounded-3xl flex items-center justify-center">
        Let's Find Your Besties!
      </div>
    </main>
  );
}
