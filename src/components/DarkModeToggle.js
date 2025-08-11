import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const DarkModeToggle = ({ position = "bottom-right" }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`fixed ${positionClasses[position]} z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? (
          <Sun
            size={20}
            className="text-yellow-500 group-hover:text-yellow-400"
          />
        ) : (
          <Moon size={20} className="text-gray-600 group-hover:text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
