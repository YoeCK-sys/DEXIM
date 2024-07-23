import React from 'react';

interface DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default Dialog;
