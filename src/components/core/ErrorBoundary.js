import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home, Bug, Send } from "lucide-react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    this.setState({
      error: error,
      errorInfo: errorInfo,
      errorId: errorId,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error caught by boundary:", error, errorInfo);
    }

    // Store error in localStorage for debugging
    const errorLog = {
      id: errorId,
      timestamp: new Date().toISOString(),
      error: error.toString(),
      stack: errorInfo.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    try {
      const existingErrors = JSON.parse(
        localStorage.getItem("errorLogs") || "[]"
      );
      existingErrors.push(errorLog);
      localStorage.setItem(
        "errorLogs",
        JSON.stringify(existingErrors.slice(-10))
      ); // Keep last 10 errors
    } catch (e) {
      console.error("Failed to log error:", e);
    }
  }

  handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;

    const errorReport = {
      id: errorId,
      timestamp: new Date().toISOString(),
      error: error?.toString(),
      stack: errorInfo?.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // In a real app, you would send this to your error reporting service
    console.log("Error Report:", errorReport);

    // For demo purposes, we'll just show an alert
    alert(
      `Error reported! ID: ${errorId}\n\nThis would be sent to your error reporting service in production.`
    );
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-6" />
              </motion.div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                We're sorry, but something unexpected happened. Our team has
                been notified.
              </p>
              {this.state.errorId && (
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Error ID: {this.state.errorId}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refresh Page
              </button>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>

                <button
                  onClick={this.handleReportError}
                  className="bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-800 text-yellow-800 dark:text-yellow-200 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Report Issue
                </button>
              </div>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details (Development)
                </summary>
                <div className="mt-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-800 dark:text-gray-200 overflow-auto max-h-64">
                  <div className="mb-3">
                    <strong className="text-red-600">Error:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  <div>
                    <strong className="text-blue-600">Stack Trace:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </div>
              </details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
