/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About1 = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Acumen Poster" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Attention all tech enthusiasts! The moment you've been waiting for has arrived. The highly-anticipated poster for the upcoming <span className="font-extrabold text-white">Acumen!</span> has been officially released! With its vibrant colors and eye-catching design, the poster captures the essence of the event and promises an experience like no other. Get ready to immerse yourself in the world of technology and innovation, with new characteristics, events, and competitions designed to inspire and educate. So mark your calendars and get ready to embark on an exciting journey that will take you to the cutting-edge of the tech industry. The countdown to the <span className="font-extrabold text-white">Acumen!</span> has begun, and we can't wait to see you there!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About1;
