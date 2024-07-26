"use client";

import * as React from "react";
import { useState } from "react";
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

  return (
    <div className="border rounded-lg overflow-hidden">
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#56d504" : "#56d504" }}
        className={`cursor-pointer p-4 text-white ${isOpen ? 'bg-green-600' : 'bg-green-400'}`}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", padding: "1rem" },
              collapsed: { opacity: 0, height: 0, padding: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gray-700"
          >
            {content}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
