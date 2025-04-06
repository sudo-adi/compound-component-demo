"use client";
import { useState } from "react";
import { Modal } from "./components/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>Delete Account</Modal.Title>
          <Modal.Subtitle>This action cannot be undone.</Modal.Subtitle>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete your account? This will remove all
          your data permanently.
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Deleted!");
              setIsOpen(false);
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
