import React from 'react';
import { motion } from 'framer-motion';

interface DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-gray-300 mt-2">{content}</p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={onClose}
        >
          Aceptar
        </button>
      </motion.div>
    </div>
  );
};

export default Dialog;
