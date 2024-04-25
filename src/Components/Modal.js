import React, { useRef } from "react";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Attach click event listener to handle clicks outside the modal
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className="w-[50%] h-[60vh] absolute bg-white rounded-lg max-[1603px]:w-[70%] max-[1300px]:h-[65vh] max-[1400px]:h-[65vh] max-[986px]:w-[80%] max-[986px]:h-[50vh] max-[829px]:h-[40vh] max-[600px]:w-[90%] max-[521px]:h-[30vh]"
        ref={modalRef}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JnWrQxdGsYU"
          title="#RunTheJules Jule Token"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default Modal;
