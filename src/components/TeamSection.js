import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Globe,
  Award,
  Users,
  Clock,
  Star,
} from 'lucide-react';

const TeamMemberCard = ({ member, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Member Image */}
      <div className="relative">
        <img
          src={imageError ? member.fallbackImage || member.image : member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-primary-200">{member.position}</p>
        </div>
      </div>

      {/* Member Info */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {member.experience}
            </div>
            <div className="text-xs text-gray-600">Experience</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">
              {member.projects}
            </div>
            <div className="text-xs text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary-600">
              {member.rating}
            </div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Achievements
          </h4>
          <ul className="space-y-1">
            {member.achievements.map(achievement => (
              <li
                key={achievement}
                className="text-sm text-gray-600 flex items-center"
              >
                <Award size={14} className="text-primary-600 mr-2" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <Twitter size={18} />
            </a>
          )}
          {member.social.website && (
            <a
              href={member.social.website}
              className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <Globe size={18} />
            </a>
          )}
          <a
            href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@company.com`}
            className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Lead Developer & CTO',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      fallbackImage:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer with 8+ years of experience in React, Node.js, and cloud architecture. Passionate about creating scalable, user-centric solutions.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'Python'],
      experience: '8+ years',
      projects: '50+',
      rating: '4.9/5',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        website: '#',
      },
      achievements: [
        'AWS Certified Solutions Architect',
        'React Advanced Conference Speaker',
        'Open Source Contributor',
      ],
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'UI/UX Design Lead',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      fallbackImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative designer with expertise in user experience, interface design, and design systems. Focused on creating intuitive and beautiful digital experiences.',
      skills: [
        'Figma',
        'Adobe Creative Suite',
        'Prototyping',
        'Design Systems',
        'User Research',
      ],
      experience: '6+ years',
      projects: '35+',
      rating: '4.8/5',
      social: {
        linkedin: '#',
        behance: '#',
        dribbble: '#',
        website: '#',
      },
      achievements: [
        'Adobe Certified Expert',
        'Design Award Winner',
        'UX Conference Speaker',
      ],
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Senior Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      fallbackImage:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Frontend specialist with deep knowledge of modern JavaScript frameworks and performance optimization. Committed to writing clean, maintainable code.',
      skills: ['React', 'Vue.js', 'TypeScript', 'Performance', 'Testing'],
      experience: '5+ years',
      projects: '40+',
      rating: '4.9/5',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        website: '#',
      },
      achievements: [
        'Google Developer Expert',
        'Performance Optimization Specialist',
        'Tech Community Leader',
      ],
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Backend & DevOps Engineer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      fallbackImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Backend developer and DevOps engineer with expertise in scalable architecture, cloud infrastructure, and system optimization.',
      skills: ['Python', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'],
      experience: '7+ years',
      projects: '45+',
      rating: '4.8/5',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        website: '#',
      },
      achievements: [
        'Kubernetes Certified Administrator',
        'AWS Solutions Architect',
        'DevOps Conference Speaker',
      ],
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7dc3764c712?w=400&h=400&fit=crop&crop=face',
      fallbackImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Experienced project manager with a track record of delivering complex projects on time and within budget. Expert in agile methodologies.',
      skills: [
        'Agile',
        'Scrum',
        'Risk Management',
        'Client Relations',
        'Team Leadership',
      ],
      experience: '9+ years',
      projects: '60+',
      rating: '4.9/5',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
      },
      achievements: [
        'PMP Certified',
        'Scrum Master Certified',
        'Project Management Award',
      ],
    },
    {
      id: 6,
      name: 'Alex Thompson',
      position: 'SEO & Digital Marketing Specialist',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      fallbackImage:
        'https://images.unsplash.com/photo-1487412720507-e7dc3764c712?w=400&h=400&fit=crop&crop=face',
      bio: 'Digital marketing expert specializing in SEO, content strategy, and growth hacking. Helps businesses increase their online visibility and conversions.',
      skills: [
        'SEO',
        'Content Strategy',
        'Google Analytics',
        'Growth Hacking',
        'PPC',
      ],
      experience: '4+ years',
      projects: '30+',
      rating: '4.7/5',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
      },
      achievements: [
        'Google Analytics Certified',
        'SEO Expert Certification',
        'Digital Marketing Award',
      ],
    },
  ];

  const stats = [
    { icon: Users, label: 'Team Members', value: '6' },
    { icon: Clock, label: 'Combined Experience', value: '39+ years' },
    { icon: Star, label: 'Average Rating', value: '4.8/5' },
    { icon: Award, label: 'Projects Completed', value: '260+' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of developers, designers, and strategists work
            together to deliver exceptional digital solutions.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <stat.icon size={32} className="text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our expert team can help
              you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Meet the Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;
