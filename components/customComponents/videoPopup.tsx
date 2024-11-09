import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function VideoPopup({ videoUrl, isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-gray-800 bg-white rounded-full p-2"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={videoUrl}
                title="Project Video"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
