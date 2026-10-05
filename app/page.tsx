'use client';

import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AppStoreBadge = () => (
  <Link href="https://apps.apple.com/app/id6758370961" target="_blank" rel="noopener noreferrer">
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-black text-white flex items-center px-6 py-3 rounded-2xl hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all border border-white/10"
    >
      <svg viewBox="0 0 384 512" width="24" height="24" className="mr-3 fill-white">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <div className="text-left">
        <div className="text-[11px] leading-none uppercase font-inter font-bold opacity-70 tracking-wider">Download on the</div>
        <div className="text-xl leading-none font-bold font-inter mt-1">App Store</div>
      </div>
    </motion.button>
  </Link>
);

export default function Home() {
  const [scene1, setScene1] = useState(null);
  const [scene2, setScene2] = useState(null);
  const [scene3, setScene3] = useState(null);

  useEffect(() => {
    fetch('/animations/scene1.json').then(res => res.json()).then(data => setScene1(data));
    fetch('/animations/scene2.json').then(res => res.json()).then(data => setScene2(data));
    fetch('/animations/Notification-remix.json').then(res => res.json()).then(data => setScene3(data));
  }, []);

  return (
    <div className="flex flex-col font-sans selection:bg-fridge-peach selection:text-white relative">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center p-6 sm:p-8 pt-32 sm:pt-48 pb-20 sm:pb-32 text-center overflow-hidden min-h-[90vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl w-full z-10"
        >
          <div className="mb-8 sm:mb-12 flex justify-center">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 drop-shadow-[0_35px_35px_rgba(107,75,62,0.25)]"
            >
              <img 
                src="/fridge_hi.png" 
                alt="Our Fridge" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 sm:mb-8 tracking-[calc(-0.05em)] text-fridge-brown font-poppins leading-[0.85]"
          >
            Our Fridge
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl opacity-70 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-medium font-inter"
          >
            A shared fridge. 
          <br/>
          Track groceries, share notes, and draw together in real-time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            id="download" 
            className="flex justify-center items-center scroll-mt-32"
          >
            <AppStoreBadge />
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Features Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full"
          >
            {/* Main Feature - Track Together */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-8 lg:row-span-1 glass rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center overflow-hidden group shadow-2xl shadow-fridge-brown/5"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-black mb-4 font-poppins text-fridge-brown">Track Together</h3>
                <p className="text-lg sm:text-xl opacity-70 font-medium font-inter leading-relaxed">
                  Maintain a shared grocery list and notes. Everyone in the house knows exactly what's needed, live and in real-time.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-square flex justify-center items-center">
                <div className="w-full max-w-[240px] sm:max-w-[280px]">
                  {scene1 && <Lottie animationData={scene1} loop={true} />}
                </div>
              </div>
            </motion.div>

            {/* Feature 2 - Widgets */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-4 lg:row-span-2 glass rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl shadow-fridge-brown/5"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-black mb-4 font-poppins text-fridge-brown">Live Widgets</h3>
                <p className="text-lg sm:text-xl opacity-70 font-medium font-inter leading-relaxed">
                  Share notes and drawings instantly from your home screen.
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <div className="w-full max-w-[200px] sm:max-w-[250px] animate-float">
                  {scene2 && <Lottie animationData={scene2} loop={true} />}
                </div>
              </div>
            </motion.div>

            {/* Feature 3 - Notifications */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-8 lg:row-span-1 glass rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 flex flex-col md:flex-row-reverse gap-8 items-center overflow-hidden shadow-2xl shadow-fridge-brown/5"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-black mb-4 font-poppins text-fridge-brown">Smart Alerts</h3>
                <p className="text-lg sm:text-xl opacity-70 font-medium font-inter leading-relaxed">
                  Get notified when items are added or when you're near the store. Reminders that actually help.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-square flex justify-center items-center">
                <div className="w-full max-w-[240px] sm:max-w-[280px]">
                  {scene3 && <Lottie animationData={scene3} loop={true} />}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark max-w-4xl mx-auto rounded-[32px] sm:rounded-[48px] p-10 sm:p-16 md:p-24 shadow-inner"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 font-poppins text-fridge-brown leading-tight">
            Ready to stock your fridge?
          </h2>
          <div className="flex justify-center">
            <AppStoreBadge />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
