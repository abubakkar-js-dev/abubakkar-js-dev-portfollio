"use client";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

const Toast = ({ id, message, type, onClose }) => {
  const icons = {
    success: <FaCheckCircle className="text-green-400" size={20} />,
    error: <FaExclamationCircle className="text-red-400" size={20} />,
    info: <FaInfoCircle className="text-blue-400" size={20} />,
  };

  const colors = {
    success: "border-green-400/30 bg-green-400/10",
    error: "border-red-400/30 bg-red-400/10",
    info: "border-blue-400/30 bg-blue-400/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      className={`flex items-center gap-3 p-4 rounded-lg border backdrop-blur-md shadow-lg ${colors[type]} min-w-[300px] max-w-md`}
    >
      {icons[type]}
      <p className="flex-1 text-white text-sm font-medium">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <FaTimes size={16} />
      </button>
    </motion.div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toast = {
    success: (message, duration) => addToast(message, "success", duration),
    error: (message, duration) => addToast(message, "error", duration),
    info: (message, duration) => addToast(message, "info", duration),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              id={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={removeToast}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
