import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Users, Target, Award, Heart } from "lucide-react";
import PortfolioShowcase from "../components/PortfolioShowcase";
import TeamSection from "../components/TeamSection";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge solutions.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and shared knowledge.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every line of code we write.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about creating amazing user experiences.",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg",
      bio: "Former Google engineer with 10+ years of experience in web development.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in React and modern web technologies with a focus on performance.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer with expertise in user experience and interface design.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer specializing in React, Node.js, and cloud architecture.",
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>About – Premium React Template</title>
        <meta
          name="description"
          content="We create beautiful, functional React.js templates with a focus on performance and customization."
        />
      </Helmet>
      {/* Hero Section */}{" "}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About{" "}
              <span className="block gradient-text">
                {" "}
                Premium Template{" "}
              </span>{" "}
            </h1>{" "}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We 're a team of passionate developers and designers dedicated to
              creating the most beautiful and functional React.js templates in
              the market.{" "}
            </p>{" "}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {" "}
                  5 +{" "}
                </div>{" "}
                <div className="text-gray-600 dark:text-gray-400">
                  {" "}
                  Years Experience{" "}
                </div>{" "}
              </div>{" "}
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {" "}
                  50 +{" "}
                </div>{" "}
                <div className="text-gray-600 dark:text-gray-400">
                  {" "}
                  Templates Created{" "}
                </div>{" "}
              </div>{" "}
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {" "}
                  10 k +{" "}
                </div>{" "}
                <div className="text-gray-600 dark:text-gray-400">
                  {" "}
                  Happy Customers{" "}
                </div>{" "}
              </div>{" "}
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {" "}
                  24 / 7{" "}
                </div>{" "}
                <div className="text-gray-600 dark:text-gray-400">
                  {" "}
                  Support Available{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>
      {/* Story Section */}{" "}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story{" "}
              </h2>{" "}
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2019, Premium Template started as a small team of
                developers who were frustrated with the lack of quality React
                templates in the market.{" "}
              </p>{" "}
              <p className="text-lg text-gray-600 mb-6">
                We set out to create templates that not only look beautiful but
                also follow best practices, are fully responsive, and are easy
                to customize for any business need.{" "}
              </p>{" "}
              <p className="text-lg text-gray-600">
                Today, we 're proud to serve thousands of developers and
                businesses worldwide, helping them create stunning websites that
                drive results.{" "}
              </p>{" "}
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4"> Our Mission </h3>{" "}
                <p className="text-lg mb-6">
                  To empower developers and businesses with the tools they need
                  to create exceptional digital experiences.{" "}
                </p>{" "}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold"> 10, 000 + </div>{" "}
                    <div className="text-sm opacity-90">
                      {" "}
                      Happy Customers{" "}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    <div className="text-2xl font-bold"> 150 + </div>{" "}
                    <div className="text-sm opacity-90">
                      {" "}
                      Countries Served{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Values Section */}{" "}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values{" "}
            </h2>{" "}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>{" "}
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {" "}
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${value.bgColor} mb-6`}
                >
                  <value.icon size={28} className={value.color} />{" "}
                </div>{" "}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {" "}
                  {value.title}{" "}
                </h3>{" "}
                <p className="text-gray-600"> {value.description} </p>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Team Section */}{" "}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team{" "}
            </h2>{" "}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented people behind our premium templates{" "}
            </p>{" "}
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {" "}
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {" "}
                  {member.name}{" "}
                </h3>{" "}
                <div className="text-primary-600 font-medium mb-4">
                  {" "}
                  {member.role}{" "}
                </div>{" "}
                <p className="text-gray-600 text-sm"> {member.bio} </p>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Portfolio Showcase */}
      <PortfolioShowcase />
      {/* Enhanced Team Section */}
      <TeamSection />
    </div>
  );
};

export default About;
