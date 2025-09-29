'use client'

import { motion } from "framer-motion"

export default function StackCard({ nom, link }: { nom: string; link: string }) {
    const floatDuration = 6 + Math.random() * 3 // variation pour désynchroniser

    return (
        <motion.div
            className="flex flex-col items-center p-4 bg-cyan-500/40 backdrop-blur-md rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
            animate={{
                y: [0, -10, 0, 10, 0],
                x: [0, 2, -2, 1, 0],
                rotate: [0, 2, -2, 1, 0],
                scale: [1, 1.05, 1, 0.98, 1],
            }}
            transition={{
                duration: floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <img
                src={`/icons/${link}.svg`}
                alt={`Logo ${nom}`}
                className="w-12 h-12 mb-2 drop-shadow-md transition-transform duration-300"
            />
            <span className="text-white/90">{nom}</span>
        </motion.div>
    )
}
