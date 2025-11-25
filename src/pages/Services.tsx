// AIRLÉI BIZ™ Services Component v5.0 - Apple Minimalist Style
import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      id: 1,
      icon: 'fas fa-gamepad',
      title: 'AIRLEI PLAY (Beta)',
      description: 'Explore our AI tools and creative platform. Join our Discord community for early access and updates.',
      features: [
        'AI-powered creative tools',
        'Community access',
        'Early feature testing',
        'Feedback opportunities',
        'Free basic access'
      ],
      imageUrl: '/images/visual_play.jpeg'
    },
    {
      id: 2,
      icon: 'fas fa-camera-retro',
      title: 'AIRLEI AI Studio',
      description: 'Get studio-grade AI-powered photography for fashion, product and portrait with 72-hour delivery. We provide high-quality visual content tailored for brands and individuals.',
      features: [
        'Fashion & Product AI Photography (6 shots per SKU)',
        'Portrait/Headshot Creation (10-15 retouched shots)',
        'Multiple styles (Casual/Professional/Street/Retro)',
        'Studio-grade quality with manual retouching',
        '72-hour fast delivery with commercial license'
      ],
      pricingNotes: [
        'Product: RM45-RM75 per SKU | Portrait: RM100 (Promo)/RM180 (Standard)',
        'Monthly packages & bulk discounts available',
        'Add-ons: Custom virtual model, theme scene packs'
      ],
      imageUrl: '/images/visual_studios.png'
    },
    {
      id: 3,
      icon: 'fas fa-palette',
      title: 'AIRLEI Works (AICG)',
      description: 'Design consistent characters and content with our AI tools for your brand or story. Maintain visual consistency across all your content.',
      features: [
        'Consistent character design',
        'Style customization',
        'Pose and expression generation',
        'Outfit variations',
        'Brand-aligned character development'
      ],
      imageUrl: '/images/AICG.png'
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
              Our Services
            </span>
          </motion.div>
          <motion.h1 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-28px font-bold mb-8 text-[#1d1d1f]"
          >
            AI-Powered Solutions
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-[#86868b] max-w-2xl mx-auto"
          >
            We offer a range of AI-powered services to help businesses create stunning visual content efficiently and effectively.
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }
              }}
            >
              <motion.div 
                className="md:w-1/2"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
              >
                <div className="overflow-hidden rounded-xl border border-[#d2d2d7]">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="md:w-1/2"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#6aa3ff] flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">{service.title}</h2>
                <p className="text-[#86868b] mb-8">{service.description}</p>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <i className="fas fa-check-circle text-[#6aa3ff] mr-3"></i>
                      <span className="text-[#1d1d1f]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 新增价格说明板块，仅AI Studio显示 */}
                {service.id === 2 && (
                  <div className="mb-8 p-4 bg-[#f5f7ff] rounded-lg">
                    <h3 className="font-semibold text-[#1d1d1f] mb-3">Pricing Highlights</h3>
                    <div className="space-y-2">
                      {service.pricingNotes.map((note, i) => (
                        <div key={i} className="flex items-start">
                          <i className="fas fa-tag text-[#6aa3ff] mr-3 mt-1"></i>
                          <span className="text-[#515154] text-sm">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <a 
                  href="/contact-us"
                  className="cta-button px-8 py-3 rounded-full text-white font-medium inline-block"
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;