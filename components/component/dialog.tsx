// components/component/dialog.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{content}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
          Aceptar
        </button>
      </motion.div>
    </div>
  );
};

export default Dialog;

