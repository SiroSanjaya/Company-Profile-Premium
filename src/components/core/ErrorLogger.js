import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

class ErrorLogger {
  constructor() {
    this.errors = [];
    this.maxErrors = 100;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;

    // Global error handler
    window.addEventListener("error", event => {
      this.logError({
        type: "runtime",
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        stack: event.error?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    });

    // Promise rejection handler
    window.addEventListener("unhandledrejection", event => {
      this.logError({
        type: "promise",
        message: event.reason?.message || "Unhandled Promise Rejection",
        reason: event.reason,
        stack: event.reason?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    });

    // React error boundary errors
    window.addEventListener("react-error", event => {
      this.logError({
        type: "react",
        message: event.detail?.message || "React Error",
        componentStack: event.detail?.componentStack,
        error: event.detail?.error,
        stack: event.detail?.error?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    });

    this.isInitialized = true;
  }

  logError(errorData) {
    this.errors.push(errorData);

    // Keep only the latest errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error logged:", errorData);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === "production") {
      this.sendToExternalService(errorData);
    }

    // Store in localStorage for persistence
    this.persistErrors();
  }

  sendToExternalService(errorData) {
    // Example: Send to your error tracking service
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData),
    // }).catch(console.error);
  }

  persistErrors() {
    try {
      localStorage.setItem("errorLog", JSON.stringify(this.errors));
    } catch (error) {
      console.warn("Could not persist errors to localStorage:", error);
    }
  }

  loadPersistedErrors() {
    try {
      const stored = localStorage.getItem("errorLog");
      if (stored) {
        this.errors = JSON.parse(stored);
      }
    } catch (error) {
      console.warn("Could not load errors from localStorage:", error);
    }
  }

  getErrors() {
    return [...this.errors];
  }

  clearErrors() {
    this.errors = [];
    this.persistErrors();
  }

  getErrorStats() {
    const total = this.errors.length;
    const byType = this.errors.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {});

    const recent = this.errors.filter(error => {
      const errorTime = new Date(error.timestamp);
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      return errorTime > oneHourAgo;
    }).length;

    return { total, byType, recent };
  }
}

// Global error logger instance
export const errorLogger = new ErrorLogger();

const ErrorLoggerUI = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState([]);
  const [stats, setStats] = useState({ total: 0, byType: {}, recent: 0 });

  useEffect(() => {
    errorLogger.init();
    errorLogger.loadPersistedErrors();

    const updateData = () => {
      setErrors(errorLogger.getErrors());
      setStats(errorLogger.getErrorStats());
    };

    updateData();

    // Update every 5 seconds
    const interval = setInterval(updateData, 5000);

    return () => clearInterval(interval);
  }, []);

  const clearErrors = () => {
    errorLogger.clearErrors();
    setErrors([]);
    setStats({ total: 0, byType: {}, recent: 0 });
  };

  const exportErrors = () => {
    const dataStr = JSON.stringify(errors, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `error-log-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (errors.length === 0) return null;

  return (
    <>
      {/* Error indicator button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-lg">⚠️</span>
        {stats.recent > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {stats.recent}
          </span>
        )}
      </motion.button>

      {/* Error panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed bottom-4 right-20 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 w-96 max-h-96 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Error Monitor
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>

              <div className="mt-2 flex space-x-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Total: {stats.total}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Recent: {stats.recent}
                </span>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex space-x-2">
                <button
                  onClick={clearErrors}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Clear All
                </button>
                <button
                  onClick={exportErrors}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                >
                  Export
                </button>
              </div>

              <div className="max-h-64 overflow-y-auto space-y-2">
                {errors
                  .slice(-10)
                  .reverse()
                  .map((error, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 dark:bg-gray-700 rounded border-l-4 border-red-500"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {error.type.toUpperCase()}: {error.message}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {error.filename}:{error.lineno}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(error.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ErrorLoggerUI;
