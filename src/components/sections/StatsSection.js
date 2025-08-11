import { motion } from "framer-motion";
import { Users, Globe, Star, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries Served",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime Guarantee",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}
              >
                <stat.icon size={24} className={stat.color} />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
