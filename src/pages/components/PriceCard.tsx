import Image from "next/image";
import { motion } from "framer-motion";

export default function PriceCard() {
    return (
        <div className="relative w-80 h-auto flex items-center justify-center text-xs lg:text-base">
            <div className="text-beige absolute h-3/4 flex flex-col items-center justify-between" >
                <h3 className="text-2xl font-bold">Standard</h3>

                <div className="flex items-center">
                    <p className="text-5xl">$0.</p><p>00</p>
                </div>
                <ul>
                    <li className="flex gap-2 items-center">
                        <Image src="/assets/star.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>Find Your Zodiac</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image src="/assets/star.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>Daily Horoscope</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image src="/assets/star.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>Compatibility Chart</p>
                    </li>
                </ul>
                <div>
                    <motion.button
                        whileHover={{ backgroundColor: "#f5df60", color: "#231F20", }}
                        transition={{ duration: 0.3 }}
                        className="flex bg-beige px-4 py-1 text-black rounded-full items-center gap-2 "
                    >
                        <Image src="/assets/star-black.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>Subscribe</p>
                        <Image src="/assets/star-black.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                    </motion.button>
                </div>

            </div>

            <Image
                src="/assets/card-1.png" alt="price card background"
                width={1000} height={1000} className="w-80 h-auto" />


        </div>
    );
}
