import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Zap, Clock, Target } from "lucide-react";

const PerformanceMonitor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });
  const [scores, setScores] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        setScores(prev => ({ ...prev, fcp: getScore(fcp.startTime, "fcp") }));
      });
      fcpObserver.observe({ entryTypes: ["paint"] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        setScores(prev => ({ ...prev, lcp: getScore(lcp.startTime, "lcp") }));
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // First Input Delay
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        setMetrics(prev => ({
          ...prev,
          fid: fid.processingStart - fid.startTime,
        }));
        setScores(prev => ({
          ...prev,
          fid: getScore(fid.processingStart - fid.startTime, "fid"),
        }));
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver(list => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        setScores(prev => ({ ...prev, cls: getScore(clsValue, "cls") }));
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType("navigation")[0];
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart }));
        setScores(prev => ({
          ...prev,
          ttfb: getScore(navigationEntry.responseStart, "ttfb"),
        }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  const getScore = (value, metric) => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[metric];
    if (value <= threshold.good) return "good";
    if (value <= threshold.poor) return "needs-improvement";
    return "poor";
  };

  const getScoreColor = score => {
    switch (score) {
      case "good":
        return "text-green-500";
      case "needs-improvement":
        return "text-yellow-500";
      case "poor":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const formatMetric = (value, metric) => {
    if (!value) return "N/A";

    switch (metric) {
      case "fcp":
      case "lcp":
      case "ttfb":
        return `${(value / 1000).toFixed(2)}s`;
      case "fid":
        return `${value.toFixed(0)}ms`;
      case "cls":
        return value.toFixed(3);
      default:
        return value;
    }
  };

  const metricLabels = {
    fcp: "First Contentful Paint",
    lcp: "Largest Contentful Paint",
    fid: "First Input Delay",
    cls: "Cumulative Layout Shift",
    ttfb: "Time to First Byte",
  };

  return (
    <>
      {/* Performance indicator button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed bottom-4 left-20 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 w-80 max-h-96 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
              {Object.entries(metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {metricLabels[key]}
                    </span>
                    <span
                      className={`text-sm font-bold ${getScoreColor(scores[key])}`}
                    >
                      {scores[key]?.toUpperCase() || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {formatMetric(value, key)}
                    </span>
                    <div className="flex items-center space-x-1">
                      {scores[key] === "good" && (
                        <Target className="w-3 h-3 text-green-500" />
                      )}
                      {scores[key] === "needs-improvement" && (
                        <Clock className="w-3 h-3 text-yellow-500" />
                      )}
                      {scores[key] === "poor" && (
                        <Zap className="w-3 h-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;
