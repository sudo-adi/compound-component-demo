// compound-modal-example/src/components/Modal.js
import React, { createContext, useContext } from "react";

const ModalContext = createContext();

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className="fixed inset-0 bg-black
       bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = ({ children }) => (
  <div className="mb-4 border-b pb-2">{children}</div>
);

Modal.Title = ({ children }) => (
  <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
);

Modal.Subtitle = ({ children }) => (
  <p className="text-sm text-gray-500 mt-1">{children}</p>
);

Modal.Body = ({ children }) => (
  <div className="text-gray-800 my-4">{children}</div>
);

Modal.Footer = ({ children }) => (
  <div className="mt-4 flex justify-end space-x-2">{children}</div>
);

Modal.CloseButton = () => {
  const { onClose } = useContext(ModalContext);
  return (
    <button
      onClick={onClose}
      className="px-4 py-2 bg-gray-200 text-gray-700
       rounded-md hover:bg-gray-300"
    >
      Close
    </button>
  );
};
