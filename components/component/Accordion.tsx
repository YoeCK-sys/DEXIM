"use client";

import * as React from "react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  i: number;
  expanded: number | false;
  setExpanded: (i: number | false) => void;
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = useCallback(() => {
    if (isAnimating) return; // Prevent interaction during animation
    setIsAnimating(true);
    setExpanded(isOpen ? false : i);
  }, [isOpen, i, expanded, setExpanded, isAnimating]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-opacity-70 backdrop-blur-lg">
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#2c2c2c" : "#2c2c2c" }}
        className={`cursor-pointer p-4 text-white ${isOpen ? 'bg-gray-700' : 'bg-gray-600'}`}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${i}`}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={`accordion-content-${i}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", padding: "1rem" },
              collapsed: { opacity: 0, height: 0, padding: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-opacity-70 backdrop-blur-lg"
            id={`accordion-content-${i}`}
            onAnimationComplete={handleAnimationComplete} // Reset animation state after complete
          >
            {content}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;


