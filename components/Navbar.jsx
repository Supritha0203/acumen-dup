/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 relative`}
  >
    {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
    <div className={`${styles.flexCenter} mx-auto flex gap-4`} style={{"marginTop": "-40px"}}>
        <img 
          src='/stamp.png'
          alt='clglogo'
          className='w-[64px] h-[64px] object-contain'
          
        />
        <h2 className="font-extrabold text-[28px] lg:text-[28px] md:text-[20px] sm:text-[10px] leading-[25px] text-white sm:my-2 lg:my-5">
           VASAVI COLLEGE OF ENGINEERING
        </h2>
      </div>
      
  </motion.nav>
);

export default Navbar;