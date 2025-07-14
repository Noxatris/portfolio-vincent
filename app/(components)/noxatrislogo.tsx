'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedNoxatrisLogo() {
    const [hovered, setHovered] = useState(false);

    const letters = "oxatris".split("");

    return (
        <div
            className="relative w-fit h-[500px] cursor-pointer hover:mr-110 transition-all duration-500 ease-in-out"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* N majuscule */}
            <motion.div
                className="absolute left-0 top-0 font-[imprintMT] text-[10em] text-neutral-800 select-none leading-none"
                animate={{
                    color: hovered ? `oklch(54.1% 0.281 293.009)` : "#343434",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                N
            </motion.div>

            {/* .dev : commence sous le N, glisse à droite à la fin */}
            <motion.div
                className="absolute left-[2em] top-[4.4em] font-[imprintMT] text-2xl text-neutral-600"
                animate={{
                    x: hovered ? "15.6em" : 0,
                    y: hovered ? "-.61em" : 0, // position initiale sous le N
                    scale: hovered ? 3 : 1,
                    color: hovered ? `#ffffff` : "#343434",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                .dev
            </motion.div>

            {/* Lettres o x a t r i s : partent de colonne et glissent en bas */}
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    className="absolute font-[imprintMT] text-xl text-neutral-800 top-[1em] left-[5.7em]"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        x: hovered ? `${i * 2 + .5}em` : 0,
                        y: hovered ? `3.6em` : `${i * 0.8}em`,  // position initiale verticale → finale alignée à la base
                        scale: hovered ? 4 : 1,
                        color: hovered ? `hsl(${i * 10}, 20%, 50%)` : "#343434",
                    }}
                    transition={{
                        delay: i * 0.05,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    );
}
