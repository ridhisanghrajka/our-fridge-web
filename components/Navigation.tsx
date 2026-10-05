'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Header = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass py-3 px-4 sm:px-6 md:px-8 rounded-[28px] shadow-2xl shadow-fridge-brown/10 flex justify-between items-center w-full max-w-4xl"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src="/fridge_hi.png" 
            alt="Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:rotate-12 transition-transform duration-300" 
          />
          <span className="text-base md:text-xl font-black text-fridge-brown font-poppins tracking-tighter">Our Fridge</span>
        </Link>
        <nav className="flex gap-3 sm:gap-6 md:gap-8 items-center">
          <Link href="/#download" className="text-sm font-bold text-fridge-brown/70 hover:text-fridge-brown transition-colors hidden sm:block">Download</Link>
          <Link href="/support" className="text-sm font-bold text-fridge-brown/70 hover:text-fridge-brown transition-colors hidden sm:block">Support</Link>
          <Link href="https://apps.apple.com/app/id6758370961" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-fridge-brown text-white px-4 sm:px-5 py-2 rounded-xl shadow-lg text-sm font-bold whitespace-nowrap"
            >
              Get App
            </motion.button>
          </Link>
        </nav>
      </motion.header>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 px-6 sm:px-8 flex flex-col items-center border-t border-fridge-brown/5 bg-white/10 backdrop-blur-xl relative z-10">
      <div className="flex flex-row justify-center gap-4 sm:gap-12 mb-8 sm:mb-12 font-bold text-xs sm:text-lg text-fridge-brown/40 whitespace-nowrap">
        <Link 
          href="/privacy" 
          onClick={() => window.scrollTo(0, 0)}
          className="hover:text-fridge-brown transition-all hover:scale-105"
        >
          Privacy Policy
        </Link>
        <Link 
          href="/terms" 
          onClick={() => window.scrollTo(0, 0)}
          className="hover:text-fridge-brown transition-all hover:scale-105"
        >
          Terms & Conditions
        </Link>
        <Link 
          href="/support" 
          onClick={() => window.scrollTo(0, 0)}
          className="hover:text-fridge-brown transition-all hover:scale-105"
        >
          Support
        </Link>
      </div>
      <div className="w-full max-w-7xl h-px bg-fridge-brown/5 mb-12" />
      <div className="flex flex-row justify-between w-full max-w-7xl items-center gap-4 opacity-40 font-bold">
        <p className="text-[10px] sm:text-sm font-inter tracking-widest uppercase">
          © {new Date().getFullYear()} Our Fridge
        </p>
        <div className="flex gap-6">
          <span className="text-[10px] sm:text-sm whitespace-nowrap">Made with 🤍 for cozy kitchens</span>
        </div>
      </div>
    </footer>
  );
};
