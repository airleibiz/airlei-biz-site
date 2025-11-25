// AIRLÉI BIZ™ About Page v5.0 - Apple Minimalist Style
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const WhyUs: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Mock data for chart
  const performanceData = [
    { name: 'Traditional', Speed: 30, Cost: 80, Quality: 60 },
    { name: 'AI Method', Speed: 90, Cost: 40, Quality: 85 },
  ];

  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="text-center mb-24"
        >
          <motion.h1 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-28px font-bold mb-8 text-[#1d1d1f]"
          >
            About AIRLÉI
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-[#86868b] text-lg mb-12 max-w-3xl mx-auto"
          >
            We are Malaysia's first AICG commercial studio, bringing Chinese AICG expertise to local businesses.
          </motion.p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-20px font-bold mb-6 text-[#1d1d1f]">Mission</h2>
          <p className="text-[#86868b] text-lg mb-6">
            Our mission is to empower businesses with AI tools that transform the way they create and 
            deliver visual content. We believe in the power of AI to enhance human creativity, not replace it.
          </p>
          <p className="text-[#86868b] text-lg">
            As Malaysia's first commercial AICG studio, we combine Chinese AICG expertise with 
            local insights to deliver innovative solutions for businesses of all sizes.
          </p>
        </motion.div>

        {/* Key Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-20px font-bold mb-12 text-[#1d1d1f]">Our Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fast Delivery',
                description: 'Get your AI-generated content in just 72 hours.',
                icon: 'fas fa-bolt'
              },
              {
                title: 'Style Consistency',
                description: 'Maintain consistent visual style across all your content.',
                icon: 'fas fa-paint-brush'
              },
              {
                title: 'Multilingual Support',
                description: 'Create content in multiple languages with our AI tools.',
                icon: 'fas fa-comments'
              },
              {
                title: 'Expert Team',
                description: 'Our team combines international and local AICG expertise.',
                icon: 'fas fa-users'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                className="p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#6aa3ff] flex items-center justify-center mb-6">
                  <i className={`${advantage.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1d1d1f]">{advantage.title}</h3>
                <p className="text-[#86868b]">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-20px font-bold mb-12 text-[#1d1d1f]">Performance Comparison</h2>
          
          <div className="bg-white p-6 h-[400px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" stroke="#86868b" />
                <YAxis stroke="#86868b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderColor: '#d2d2d7',
                    borderRadius: '8px',
                    color: '#1d1d1f'
                  }} 
                />
                <Bar dataKey="Speed" fill="#6aa3ff" />
                <Bar dataKey="Cost" fill="#ff8a65" />
                <Bar dataKey="Quality" fill="#4caf50" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <p className="text-[#86868b] text-lg">
            Traditional content creation methods are time-consuming, expensive, and often inconsistent. 
            Our AI-powered approach revolutionizes the process, delivering high-quality results faster and more efficiently.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <a 
            href="/contact-us"
            className="cta-button px-8 py-3 rounded-full text-white font-medium inline-block"
          >
            Join Our Journey
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;