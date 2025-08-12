import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import PricingCalculator from "../components/PricingCalculator";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and personal use",
      price: isAnnual ? 9 : 12,
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      popular: false,
      features: [
        "Up to 5 projects",
        "Basic templates",
        "Email support",
        "1GB storage",
        "Basic analytics",
        "Mobile responsive",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      price: isAnnual ? 29 : 39,
      icon: Zap,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      popular: true,
      features: [
        "Unlimited projects",
        "Premium templates",
        "Priority support",
        "10GB storage",
        "Advanced analytics",
        "Custom domain",
        "Team collaboration",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: isAnnual ? 99 : 129,
      icon: Crown,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Phone support",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager",
        "SLA guarantee",
        "On-premise deployment",
      ],
    },
  ];

  // Handle billing toggle
  const handleBillingToggle = () => {
    setIsAnnual(!isAnnual);
  };

  // Handle plan selection
  const handlePlanSelect = plan => {
    alert(
      `Selected plan: ${plan.name}\nPrice: $${plan.price}/month\n\nThis would redirect to the checkout page.`
    );
  };

  // Handle start free trial
  const handleStartFreeTrial = () => {
    alert("Starting free trial...\n\nThis would redirect to the signup page.");
  };

  // Handle contact sales
  const handleContactSales = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>Pricing – Flexible Plans</title>
        <meta
          name="description"
          content="Simple, transparent pricing with monthly and annual billing. 14-day free trial included."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Transparent{" "}
              <span className="block gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Choose the perfect plan for your needs. All plans include a 14-day
              free trial.
            </p>
            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <span
                className={`text-sm font-medium ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
              >
                Monthly
              </span>
              <button
                onClick={handleBillingToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  isAnnual ? "bg-primary-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
              >
                Annual
                <span className="ml-1 text-primary-600 font-bold">
                  (Save 25%)
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? "lg:-mt-8 lg:mb-8" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`card p-8 h-full dark:bg-gray-800 ${plan.popular ? "border-2 border-primary-500 shadow-2xl" : ""}`}
                >
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${plan.bgColor} mb-6`}
                    >
                      <plan.icon size={32} className={plan.color} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check
                          size={20}
                          className="text-green-500 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg transform hover:scale-105"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {plan.popular ? "Get Started" : "Choose Plan"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes, we offer a 14-day free trial on all plans with no credit card required.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee if you're not satisfied.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Absolutely! You can cancel your subscription at any time with no penalties.",
              },
              {
                question: "Is support included?",
                answer:
                  "Yes, all plans include support. Higher plans include priority support and phone support.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses using our premium
              templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleStartFreeTrial}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={handleContactSales}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />
    </div>
  );
};

export default Pricing;
