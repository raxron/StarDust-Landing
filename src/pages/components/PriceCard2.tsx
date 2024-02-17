import Image from "next/image";
import { motion } from "framer-motion";

interface PriceCard2Props {
    title: string;
    price: number;
    feature1: string;
    feature2: string;
    feature3: string;
}

const PriceCard2: React.FC<PriceCard2Props> = ({ title, price, feature1, feature2, feature3 }) => {
    return (
        <div className="relative w-80 h-auto flex items-center justify-center text-xs lg:text-md">
            <div className="text-black absolute h-3/4 flex flex-col items-center justify-between" >
                <h3 className="text-2xl font-bold">{title}</h3>

                <div className="flex items-center">
                    <p className="text-5xl">${price}.</p><p>99</p>
                </div>
                <ul>
                    <li className="flex gap-2 items-center">
                        <Image src="/assets/star-black.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>{feature1}</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image src="/assets/star-black.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>{feature2}</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image src="/assets/star-black.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>{feature3}</p>
                    </li>
                </ul>
                <div>
                    <motion.button
                        whileHover={{ backgroundColor: "#3b3170", color: "#cdcbc0" }}
                        transition={{ duration: 0.3 }}
                        className="flex bg-black px-4 py-1 text-beige rounded-full items-center gap-2"
                    >
                        <Image src="/assets/star.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                        <p>Subscribe</p>
                        <Image src="/assets/star.png" alt="star icon" width={500} height={500} className="w-4 h-auto" />
                    </motion.button>
                </div>

            </div>

            <Image src="/assets/card-2.png" alt="price card background" width={1000} height={1000} className="w-72 h-auto" />


        </div>
    );
}

export default PriceCard2