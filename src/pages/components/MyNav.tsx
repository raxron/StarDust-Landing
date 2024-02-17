import { motion } from "framer-motion";
import Image from "next/image";

export default function MyNav() {
    return (
        <div className="flex justify-between items-center w-full">
            <h1 className="font-newYork text-2xl font-black">StarDust</h1>
            <motion.button
               whileHover={{ backgroundColor: "#cdcbc0", borderColor: "#231F20", color:"#231F20", border:"2px solid black"}}
               transition={{ duration: 0.3 }}
                className="w-32 h-12 bg-black text-beige rounded-full font-medium flex justify-center items-center gap-1">
                Subscribe
            </motion.button>
        </div>
    );
}
