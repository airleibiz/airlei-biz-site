// AIRLÉI BIZ™ Home Page v5.0 - Apple Minimalist Style
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="text-center"
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1 rounded-full bg-[#6aa3ff]/10 text-[#6aa3ff] text-sm font-medium mb-6">
                Malaysia's First AICG Commercial Studio
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn} 
              transition={{ duration: 0.6 }}
              className="text-28px font-bold mb-8 text-[#1d1d1f]"
            >
              Transforming Ideas with AI-Generated Content
            </motion.h1>
            
            <motion.p 
              variants={fadeIn} 
              transition={{ duration: 0.6 }}
              className="text-[#86868b] text-lg mb-12 max-w-3xl mx-auto"
            >
              We combine Chinese AICG expertise with local insights to deliver high-quality, 
              AI-powered visual content in just 72 hours.
            </motion.p>
            
            <motion.div 
              variants={fadeIn} 
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/services"
                className="cta-button px-8 py-3 rounded-full text-white font-medium"
              >
                Our Services
              </Link>
              <Link 
                to="/portfolio"
                className="px-8 py-3 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] font-medium hover:bg-[#f5f5f7] transition-colors"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#86868b]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <i className="fas fa-chevron-down text-xl animate-bounce"></i>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">What We Do</h2>
            <p className="text-[#86868b] max-w-2xl mx-auto">
              Our AI-powered services help businesses create stunning visual content 
              efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-video',
                title: 'AI Video Production',
                description: 'Create professional videos in minutes using our AI-powered platform.'
              },
              {
                icon: 'fas fa-user',
                title: 'AI Character Design',
                description: 'Design consistent characters with our AI tools for your brand or story.'
              },
              {
                icon: 'fas fa-image',
                title: 'AI Content Creation',
                description: 'Generate images, animations, and other visual content at scale.'
              },
              {
                icon: 'fas fa-language',
                title: 'Real-time Translation',
                description: 'Break language barriers with our Whisper+TTS multilingual solution.'
              },
              {
                icon: 'fas fa-file-alt',
                title: 'AI Report Generation',
                description: 'Generate detailed reports from Discord data with PDF export.'
              },
              {
                icon: 'fas fa-brain',
                title: 'Custom AI Solutions',
                description: 'Tailored AI solutions to meet your specific business requirements.'
              }
            ].map((service, index) => (
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
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1d1d1f]">{service.title}</h3>
                <p className="text-[#86868b] mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-[#6aa3ff] font-medium"
                >
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">Why Choose AIRLÉI</h2>
            <p className="text-[#86868b] max-w-2xl mx-auto">
              We are Malaysia's first AICG commercial studio, bringing Chinese AICG expertise to local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              {[
                {
                  icon: 'fas fa-bolt',
                  title: 'Fast Delivery',
                  description: 'Get your AI-generated content in just 72 hours.'
                },
                {
                  icon: 'fas fa-paint-brush',
                  title: 'Style Consistency',
                  description: 'Maintain consistent visual style across all your content.'
                },
                {
                  icon: 'fas fa-comments',
                  title: 'Multilingual Support',
                  description: 'Create content in multiple languages with our AI tools.'
                },
                {
                  icon: 'fas fa-users',
                  title: 'Expert Team',
                  description: 'Our team combines international and local AICG expertise.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#6aa3ff] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className={`${item.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#1d1d1f]">{item.title}</h3>
                    <p className="text-[#86868b]">{item.description}</p>
                  </div>
                </div>
              ))}

              <Link 
                to="/why-us"
                className="cta-button px-8 py-3 rounded-full text-white font-medium inline-block"
              >
                Discover More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-[#d2d2d7]">
                  {/* Mock video thumbnail */}
                  <div className="w-full aspect-video bg-white flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#6aa3ff] flex items-center justify-center cursor-pointer group">
                      <i className="fas fa-play text-white text-2xl ml-1 group-hover:scale-110 transition-transform"></i>
                    </div>
                  </div>
                </div>
                
                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4 -mt-16 ml-16">
                  <div className="bg-white p-6 rounded-xl border border-[#d2d2d7]">
                    <p className="text-4xl font-bold text-[#6aa3ff] mb-2">50+</p>
                    <p className="text-[#86868b]">Projects Completed</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-[#d2d2d7]">
                    <p className="text-4xl font-bold text-[#6aa3ff] mb-2">95%</p>
                    <p className="text-[#86868b]">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[24px] font-bold mb-6 text-[#1d1d1f]">Featured Portfolio</h2>
            <p className="text-[#86868b] max-w-2xl mx-auto mb-12">
              Explore our collection of AI-generated content projects across various industries.
            </p>
          </div>

          {/* 预览视频数据：改成缩略图，不再用 <video src="YouTube 链接"> */}
          {(() => {
            const featuredVideos = [
              {
                title: 'FIRE 公益片',
                category: '公益视频',
                thumbnail: '/images/FIRE.png',
                orientation: 'landscape' as const,
              },
              {
                title: 'NamasStay',
                category: '旅游宣传',
                thumbnail: '/images/NamasStay.png',
                orientation: 'portrait' as const,
              },
              {
                title: 'TOYOTA DREAM',
                category: '汽车广告',
                thumbnail: '/images/TOYOTA COROLLA SUV DREAM.jpg',
                orientation: 'landscape' as const,
              },
              {
                title: '衣服广告',
                category: '时尚宣传',
                thumbnail: '/images/衣服广告.png',
                orientation: 'portrait' as const,
              },
              {
                title: '赛博-先导苏醒',
                category: '概念短片',
                thumbnail: '/images/赛博-先导苏醒.png',
                orientation: 'landscape' as const,
              },
              {
                title: '转绘',
                category: '艺术创作',
                thumbnail: '/images/转绘.png',
                orientation: 'portrait' as const,
              },
            ];

            // 预览卡片：用图片做封面，点击跳到 /portfolio
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredVideos.map((v, idx) => (
                  <motion.div
                    key={idx}
                    className="relative overflow-hidden rounded-xl group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onClick={() => { window.location.href = '/portfolio'; }}
                  >
                    <div
                      className={[
                        'bg-white border border-[#d2d2d7] overflow-hidden',
                        v.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video',
                      ].join(' ')}
                    >
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* 渐变与文案 */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
                    <div className="pointer-events-none absolute bottom-0 left-0 p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#6aa3ff]/20 text-white text-xs font-medium mb-2">
                        {v.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{v.title}</h3>
                    </div>

                    {/* 悬停播放指示（play icon） */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-white/85 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M8 5v14l11-7L8 5z" fill="#6aa3ff" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })()}

          <div className="text-center mt-12">
            <Link to="/portfolio" className="cta-button px-8 py-3 rounded-full text-white font-medium">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">
                Ready to Transform Your Ideas with AI?
              </h2>
              <p className="text-[#86868b] mb-10">
                Join us in the future of content creation. Our AI-powered tools help you create stunning visual content faster and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact-us"
                  className="cta-button px-8 py-3 rounded-full text-white font-medium"
                >
                  Get Started
                </Link>
                <Link 
                  to="/play"
                  className="px-8 py-3 rounded-full bg-white border border-[#d2d2d7] text-[#1d1d1f] font-medium hover:bg-[#f5f5f7] transition-colors"
                >
                  Explore AI Tools
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
