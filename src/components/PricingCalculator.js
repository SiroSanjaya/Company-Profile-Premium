import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle, XCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const PricingCalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    users: 10,
    features: [],
    plan: "basic",
    billing: "monthly",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const plans = useMemo(
    () => ({
      basic: { price: 29, name: "Basic" },
      pro: { price: 79, name: "Professional" },
      enterprise: { price: 199, name: "Enterprise" },
    }),
    []
  );

  const features = useMemo(
    () => [
      { id: "analytics", name: "Advanced Analytics", price: 15 },
      { id: "api", name: "API Access", price: 25 },
      { id: "support", name: "Priority Support", price: 20 },
      { id: "custom", name: "Custom Branding", price: 30 },
      { id: "integrations", name: "Third-party Integrations", price: 35 },
      { id: "backup", name: "Automated Backups", price: 10 },
    ],
    []
  );

  const calculateTotal = useCallback(() => {
    const basePrice = plans[formData.plan].price;
    const featurePrice = formData.features.reduce((sum, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return sum + (feature ? feature.price : 0);
    }, 0);

    const userMultiplier = Math.ceil(formData.users / 10);
    let total = (basePrice + featurePrice) * userMultiplier;

    if (formData.billing === "yearly") {
      total = total * 10; // 2 months free
    }

    setTotalPrice(total);
  }, [formData, plans, features]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  const handleFeatureToggle = featureId => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Pricing Calculator
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Customize your plan and see real-time pricing. Choose the features
            that matter most to your business.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Calculator Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Configure Your Plan
              </h3>
            </div>

            {/* Plan Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Choose Your Plan
              </label>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(plans).map(([key, plan]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setFormData(prev => ({ ...prev, plan: key }))
                    }
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.plan === key
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-600 hover:border-blue-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {plan.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        ${plan.price}/mo
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Users Slider */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Number of Users: {formData.users}
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={formData.users}
                onChange={e =>
                  setFormData(prev => ({
                    ...prev,
                    users: parseInt(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Billing Toggle */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Billing Cycle
              </label>
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() =>
                    setFormData(prev => ({ ...prev, billing: "monthly" }))
                  }
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    formData.billing === "monthly"
                      ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() =>
                    setFormData(prev => ({ ...prev, billing: "yearly" }))
                  }
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    formData.billing === "yearly"
                      ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Yearly (Save 20%)
                </button>
              </div>
            </div>

            {/* Features Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Additional Features
              </label>
              <div className="space-y-3">
                {features.map(feature => (
                  <motion.div
                    key={feature.id}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() => handleFeatureToggle(feature.id)}
                        className="mr-3"
                      >
                        {formData.features.includes(feature.id) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {feature.name}
                      </span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      +${feature.price}/mo
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="text-center">
              <motion.div
                variants={itemVariants}
                className="text-6xl font-bold mb-2"
              >
                ${totalPrice}
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-xl mb-8 opacity-90"
              >
                per {formData.billing === "yearly" ? "year" : "month"}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span>Base Plan ({plans[formData.plan].name})</span>
                  <span>${plans[formData.plan].price}</span>
                </div>
                {formData.features.map(featureId => {
                  const feature = features.find(f => f.id === featureId);
                  return feature ? (
                    <div
                      key={featureId}
                      className="flex items-center justify-between"
                    >
                      <span>{feature.name}</span>
                      <span>+${feature.price}</span>
                    </div>
                  ) : null;
                })}
                {formData.users > 10 && (
                  <div className="flex items-center justify-between">
                    <span>Additional Users ({formData.users - 10})</span>
                    <span>+${(formData.users - 10) * 2}</span>
                  </div>
                )}
                {formData.billing === "yearly" && (
                  <div className="flex items-center justify-between text-green-300">
                    <span>Yearly Discount (20%)</span>
                    <span>-${Math.round(totalPrice * 0.2)}</span>
                  </div>
                )}
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started Now
              </motion.button>

              <motion.p
                variants={itemVariants}
                className="text-sm opacity-75 mt-4"
              >
                No setup fees • Cancel anytime • 30-day money-back guarantee
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
