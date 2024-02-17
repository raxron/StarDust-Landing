import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { motion } from "framer-motion";

interface MessageState {
  [key: number]: boolean;
}
export default function MagicBall() {
  const [msg, setMsg] = useState<MessageState>({
    1: false,
    2: false,
    3: false
  });

  const messages = [
    { key: 1, text: 'Your Lucky Number is 8 today!' },
    { key: 2, text: 'A good day for self-care!' },
    { key: 3, text: 'Today is a day for adventure!' }
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageKey = messages[randomIndex].key;

    const updatedMsg: MessageState = { ...msg };
    Object.keys(msg).forEach(key => {
      updatedMsg[parseInt(key)] = false;
    });

    updatedMsg[messageKey] = true;
    setMsg(updatedMsg);
  };
  const variants = {
    hidden: { opacity: 0, y:-50},
    visible: { opacity: 1, y:0 }
  };
  return (
    <div onClick={handleClick} className='absolute text-black font-bold text-lg flex flex-col justify-center items-center gap-8 cursor-pointer'>
      {messages.map(m => (
        <motion.p key={m.key}
          className='absolute font-newYork text-5xl text-center'
          variants={variants}
          initial="hidden"
          transition={{duration:1.5}}
          animate={msg[m.key] ? "visible" : "hidden"}
          style={{ marginTop: '-2em', display: msg[m.key] ? 'block' : 'none' }}>
          {m.text}
        </motion.p>
      ))}
      <Spline scene="https://prod.spline.design/1ykB1Qj592euA5nQ/scene.splinecode" />
      <p>Click on the Magic Ball!</p>
    </div>
  );
}
