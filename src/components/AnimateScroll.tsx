import { motion } from 'framer-motion';

export default function AnimateScroll({ children, delayMs }: { children: React.ReactNode; delayMs?: number }) {

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 75
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true,
                amount: 'some'
            }}
            transition={{
                duration: 1,
                delay: (delayMs ?? 0) / 1000,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
}