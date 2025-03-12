'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative w-[160px] h-[40px]">
            <Image
              src="/images/tradient mono.svg"
              alt="Tradient"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <div className="flex gap-3">
            <motion.button 
              onClick={scrollToContact}
              className="btn-primary text-sm"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Join waitlist
            </motion.button>
            <motion.a 
              href="https://cal.com/sanket-ind/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Book a demo
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  )
}
