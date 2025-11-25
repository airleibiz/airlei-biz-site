// AIRLÉI BIZ™ Play Page v5.0 - Apple Minimalist Style
import React from 'react';
import { motion } from 'framer-motion';

const Play: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
              AI Tools
            </span>
          </motion.div>
          <motion.h1 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-28px font-bold mb-8 text-[#1d1d1f]"
          >
            PLAY
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-[#86868b] max-w-2xl mx-auto"
          >
            Explore our AI-powered tools and unleash your creativity. Coming soon!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Real-time Translation */}
          <motion.div
            className="border border-[#d2d2d7] rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-14 h-14 rounded-full bg-[#6aa3ff] flex items-center justify-center mb-6">
              <i className="fas fa-language text-white text-2xl"></i>
            </div>
            <h2 className="text-24px font-bold mb-4 text-[#1d1d1f]">Real-time Translation</h2>
            <p className="text-[#86868b] mb-6">
              Break language barriers with our Whisper+TTS multilingual solution. Translate content in real-time across multiple languages.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'English',
                'Chinese',
                'Malay (BM)',
                'Japanese',
                'Korean',
                'Cantonese'
              ].map((language, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-[#6aa3ff] mr-3"></i>
                  <span className="text-[#1d1d1f]">{language}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#"
              className="block text-center w-full py-3 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-medium hover:bg-[#e9e9eb] transition-colors"
            >
              Coming Soon
            </a>
          </motion.div>

          {/* AI Report Generation */}
          <motion.div
            className="border border-[#d2d2d7] rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-14 h-14 rounded-full bg-[#ff8a65] flex items-center justify-center mb-6">
              <i className="fas fa-file-alt text-white text-2xl"></i>
            </div>
            <h2 className="text-24px font-bold mb-4 text-[#1d1d1f]">AI Report Generation</h2>
            <p className="text-[#86868b] mb-6">
              Generate detailed reports from Discord data with PDF export. Turn your community interactions into actionable insights.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Data analysis',
                'PDF report generation',
                'Customizable templates',
                'Visual data representation',
                'Trend analysis'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-[#ff8a65] mr-3"></i>
                  <span className="text-[#1d1d1f]">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#"
              className="block text-center w-full py-3 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-medium hover:bg-[#e9e9eb] transition-colors"
            >
              Coming Soon
            </a>
          </motion.div>
        </div>

        {/* Discord Invite */}
        <motion.div
          className="bg-[#f9f9f9] rounded-xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <i className="fab fa-discord text-6xl text-[#6aa3ff] mb-6"></i>
          <h2 className="text-24px font-bold mb-4 text-[#1d1d1f]">Join Our Discord Community</h2>
          <p className="text-[#86868b] mb-8 max-w-2xl mx-auto">
            Be the first to access our AI tools and connect with other creators. Our Discord channel is already live!
          </p>
          <a 
            href="https://discord.gg/X3xYB9qs"
            className="cta-button px-8 py-3 rounded-full text-white font-medium inline-block"
          >
            <i className="fab fa-discord mr-2"></i> Join Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Play;
