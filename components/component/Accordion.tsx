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

export const Accordion: React.FC<AccordionProps> = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h2>{title}</h2>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {content}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const AccordionExample: React.FC = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return accordionData.map((item, index) => (
    <Accordion
      key={index}
      i={index}
      expanded={expanded}
      setExpanded={setExpanded}
      title={item.title}
      content={item.content}
    />
  ));
};

const accordionData = [
  {
    title: "Accordion 1",
    content: <div>Content for Accordion 1</div>
  },
  {
    title: "Accordion 2",
    content: <div>Content for Accordion 2</div>
  },
  {
    title: "Accordion 3",
    content: <div>Content for Accordion 3</div>
  }
];
