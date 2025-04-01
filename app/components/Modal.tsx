import React from "react";

type ModalProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ message, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <p className="text-lg">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
