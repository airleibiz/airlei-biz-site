// AIRLÉI BIZ™ What Makes Us Special Page v5.0 - Apple Minimalist Style
import React from 'react';
import { motion } from 'framer-motion';

const WhatMakesUsSpecial: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specialFeatures = [
    {
      title: '72-Hour Delivery',
      description: 'Our AI-powered platform enables us to deliver high-quality content in just 72 hours, much faster than traditional methods.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Style Consistency',
      description: 'We ensure your brand maintains a consistent visual identity across all content with our advanced AI tools.',
      icon: 'fas fa-paint-roller'
    },
    {
      title: 'Malaysia First',
      description: 'As Malaysia\'s first AICG commercial studio, we bring pioneering technology and expertise to the local market.',
      icon: 'fas fa-award'
    },
    {
      title: 'Chinese AICG Experience',
      description: 'We combine cutting-edge Chinese AICG technology and experience with local market insights.',
      icon: 'fas fa-globe-asia'
    },
    {
      title: 'Custom Solutions',
      description: 'We provide tailored AI solutions to meet the specific needs of your business or project.',
      icon: 'fas fa-cogs'
    },
    {
      title: 'AI + Human Expertise',
      description: 'Our team of experts oversees the AI generation process to ensure the highest quality results.',
      icon: 'fas fa-user-graduate'
    }
  ];

  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="text-center mb-24"
        >
          <motion.div variants={fadeIn} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#6aa3ff]/10 text-[#6aa3ff] text-sm font-medium mb-6">
              Our Difference
            </span>
          </motion.div>
          <motion.h1 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-28px font-bold mb-8 text-[#1d1d1f]"
          >
            What Makes Us Special
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-[#86868b] max-w-2xl mx-auto"
          >
            Discover the unique advantages that set Airlei AI Studio apart from the competition.
          </motion.p>
        </motion.div>

        {/* Special features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {specialFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              custom={index}
            >
              <div className="w-14 h-14 rounded-full bg-[#6aa3ff] flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1d1d1f]">{feature.title}</h3>
              <p className="text-[#86868b]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-20px font-bold mb-12 text-center">Our Process</h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#6aa3ff] opacity-30"></div>
            
            {/* Process steps */}
            <div className="space-y-16 relative">
              {[
                {
                  title: 'Consultation',
                  description: 'We start with a detailed consultation to understand your requirements and goals.',
                  icon: 'fas fa-comments'
                },
                {
                  title: 'Concept Development',
                  description: 'Our team develops concepts and storyboards based on your input.',
                  icon: 'fas fa-lightbulb'
                },
                {
                  title: 'AI Generation',
                  description: 'We use advanced AI tools to generate the initial content based on your specifications.',
                  icon: 'fas fa-robot'
                },
                {
                  title: 'Human Refinement',
                  description: 'Our team of experts reviews and refines the AI-generated content to ensure quality.',
                  icon: 'fas fa-user-edit'
                },
                {
                  title: 'Delivery & Feedback',
                  description: 'We deliver the final product and incorporate your feedback as needed.',
                  icon: 'fas fa-paper-plane'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="md:w-1/2 md:text-right">
                    <h3 className="text-xl font-bold mb-2 text-[#1d1d1f]">{step.title}</h3>
                    <p className="text-[#86868b]">{step.description}</p>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-[#6aa3ff] flex items-center justify-center">
                      <i className={`${step.icon} text-[#6aa3ff] text-2xl`}></i>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-20px font-bold mb-12 text-center">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Airlei AI Studio transformed our marketing strategy with their AI-powered content. The speed and quality are incredible!',
                author: 'Xenia Fung',
                position: 'FOUNDER . AICG PRODUCER',
                avatar: "/images/xenia profile.png"
              },
              {
                quote: 'As Malaysia\'s first AICG studio, they bring cutting-edge technology and expertise that has helped our brand stand out.',
                author: 'Gary Lai',
                position: 'CROSS-BORDER DIRECTOR',
                avatar: "/images/gray profile.jpg"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 border border-[#d2d2d7] rounded-xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                custom={index}
              >
                <div className="text-4xl text-[#6aa3ff] mb-6">"</div>
                <p className="text-[#86868b] mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#1d1d1f]">{testimonial.author}</h4>
                    <p className="text-[#86868b] text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatMakesUsSpecial;
