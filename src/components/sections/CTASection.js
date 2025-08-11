import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {" "}
      {/* Background Elements */}{" "}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"> </div>{" "}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full filter blur-xl">
          {" "}
        </div>{" "}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full filter blur-xl">
          {" "}
        </div>{" "}
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star size={16} className="fill-current" />
              <span> Limited Time Offer </span>{" "}
            </div>{" "}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Transform{" "}
            <span className="block"> Your Business ? </span>{" "}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of successful businesses using our premium React
            templates.Start your journey today and see the difference.{" "}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/pricing"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group"
            >
              Get Started Free{" "}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>{" "}
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Contact Sales{" "}
            </Link>{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>{" "}
              <h3 className="text-white font-semibold mb-2"> No Setup Fees </h3>{" "}
              <p className="text-primary-100 text-sm">
                {" "}
                Start immediately with zero upfront costs{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>{" "}
              <h3 className="text-white font-semibold mb-2">
                {" "}
                14 - Day Free Trial{" "}
              </h3>{" "}
              <p className="text-primary-100 text-sm">
                {" "}
                Test everything before you commit{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
                <CheckCircle size={24} className="text-white" />
              </div>{" "}
              <h3 className="text-white font-semibold mb-2">
                {" "}
                24 / 7 Support{" "}
              </h3>{" "}
              <p className="text-primary-100 text-sm">
                {" "}
                Expert help whenever you need it{" "}
              </p>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default CTASection;
