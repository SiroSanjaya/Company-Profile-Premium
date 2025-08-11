import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/core/ErrorBoundary";
import ScrollToTop from "./components/core/ScrollToTop";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Documentation = lazy(() => import("./pages/Documentation"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const Features = lazy(() => import("./pages/Features"));
const ApiReference = lazy(() => import("./pages/ApiReference"));
const Status = lazy(() => import("./pages/Status"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <HelmetProvider>
      <DarkModeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <div className="pt-16 lg:pt-20 min-h-[60vh] flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-300">
                          Loading...
                        </p>
                      </div>
                    </div>
                  }
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route
                      path="/service/:serviceId"
                      element={<ServiceDetail />}
                    />
                    <Route path="/help-center" element={<HelpCenter />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/api-reference" element={<ApiReference />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            <Footer />
            <DarkModeToggle position="bottom-right" />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
              }}
            />
          </div>
        </Router>
      </DarkModeProvider>
    </HelmetProvider>
  );
}

export default App;
