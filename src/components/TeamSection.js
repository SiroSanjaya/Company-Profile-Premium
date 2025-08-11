import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Award,
  Users,
  Clock,
} from "lucide-react";

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies. Passionate about creating scalable, user-friendly applications.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      experience: "8+ years",
      projects: 50,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#",
        email: "sarah@example.com",
      },
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer focused on user experience and interface design. Specializes in creating intuitive, beautiful, and accessible digital experiences.",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      experience: "6+ years",
      projects: 35,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#",
        email: "michael@example.com",
      },
      featured: false,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic product manager with expertise in agile methodologies and user-centered design. Drives product vision and ensures successful delivery.",
      skills: ["Agile", "Product Strategy", "User Research", "Analytics"],
      experience: "7+ years",
      projects: 25,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#",
        email: "emily@example.com",
      },
      featured: true,
    },
    {
      id: 4,
      name: "David Kim",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "DevOps specialist with deep knowledge of cloud infrastructure, CI/CD pipelines, and system architecture. Ensures reliable and scalable deployments.",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      experience: "5+ years",
      projects: 40,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#",
        email: "david@example.com",
      },
      featured: false,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "Frontend specialist with expertise in modern JavaScript frameworks and performance optimization. Creates fast, responsive, and accessible web applications.",
      skills: ["React", "Vue.js", "CSS3", "Performance"],
      experience: "4+ years",
      projects: 30,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#",
        email: "lisa@example.com",
      },
      featured: false,
    },
    {
      id: 6,
      name: "Alex Morgan",
      role: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Backend developer specializing in scalable APIs and database design. Expert in Python, Java, and microservices architecture.",
      skills: ["Python", "Java", "PostgreSQL", "Microservices"],
      experience: "6+ years",
      projects: 45,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#",
        email: "alex@example.com",
      },
      featured: true,
    },
  ];

  const stats = [
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Meet Our Team
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Our talented team of experts is dedicated to creating exceptional
            digital experiences. Each member brings unique skills and
            perspectives to deliver outstanding results.
          </motion.p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map(member => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {member.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      if (platform === "email") return null;
                      const Icon =
                        platform === "github"
                          ? Github
                          : platform === "linkedin"
                            ? Linkedin
                            : platform === "twitter"
                              ? Twitter
                              : Globe;
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {member.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {member.experience}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {member.projects} projects
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {member.experience} experience
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={member.social.linkedin}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate
              about creating exceptional digital experiences. Check out our
              current openings.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
