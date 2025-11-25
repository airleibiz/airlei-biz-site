// AIRLÉI BIZ™ Pricing Page v5.0 - Apple Minimalist Style
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Pricing data
  const pricingCategories = [
    {
      id: 'ai-studios',
      title: 'AI Studios',
      description: 'Professional AI-generated video clips for your marketing needs',
      plans: [
        {
          name: 'Short Clip',
          price: 'RM100+',
          duration: '≤10s',
          features: [
            'Full HD resolution',
            '1 revision',
            '72-hour delivery',
            'Basic editing'
          ]
        },
        {
          name: 'Standard Clip',
          price: 'RM250+',
          duration: '10–20s',
          features: [
            'Full HD resolution',
            '2 revisions',
            '48-hour delivery',
            'Advanced editing',
            'Custom background music'
          ],
          popular: true
        },
        {
          name: 'Extended Clip',
          price: 'RM500+',
          duration: '20s+',
          features: [
            '4K resolution',
            'Unlimited revisions',
            '24-hour delivery',
            'Premium editing',
            'Custom music & voiceover',
            'Commercial license'
          ]
        }
      ]
    },
    {
      id: 'aicg-production',
      title: 'AICG Production',
      description: 'Full-scale AI-powered content production solutions',
      plans: [
        {
          name: 'Basic',
          price: 'RM50+',
          duration: 'per second',
          features: [
            'HD resolution',
            'Basic animation',
            '3 revisions',
            '5-day delivery'
          ]
        },
        {
          name: 'Plus',
          price: 'RM120+',
          duration: 'per second',
          features: [
            '4K resolution',
            'Advanced animation',
            '5 revisions',
            '3-day delivery',
            'Custom character design'
          ],
          popular: true
        },
        {
          name: 'Pro',
          price: 'RM200+',
          duration: 'per second',
          features: [
            '8K resolution',
            'Complex animation',
            'Unlimited revisions',
            'Next-day delivery',
            'Custom characters & environments',
            'Full commercial rights'
          ]
        }
      ]
    },
    {
      id: 'play',
      title: 'PLAY (Beta)',
      description: 'Explore our AI tools and creative platform',
      isFree: true,
      plans: [
        {
          name: 'Basic Access',
          price: 'Free',
          duration: 'Lifetime',
          features: [
            'Limited access to AI tools',
            'Community Discord access',
            'Basic templates',
            'Limited exports',
            'Watermarked content'
          ]
        }
      ]
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
          <motion.h1 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-28px font-bold mb-8 text-[#1d1d1f]"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-[#86868b] max-w-2xl mx-auto"
          >
            Choose the right plan for your project needs with clear, upfront pricing.
          </motion.p>
        </motion.div>

        {/* Pricing Categories */}
        <div className="space-y-24">
          {pricingCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              id={category.id}
            >
              <h2 className="text-20px font-bold mb-8">{category.title}</h2>
              <p className="text-[#86868b] mb-12 max-w-3xl">{category.description}</p>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.plans.map((plan, planIndex) => (
                  <motion.div
                    key={planIndex}
                    className={`border border-[#d2d2d7] p-8 rounded-xl ${
                      plan.popular ? 'relative' : ''
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    custom={planIndex}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#6aa3ff] text-white text-xs font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-lg font-medium mb-2 text-[#1d1d1f]">{plan.name}</h3>
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.duration && (
                          <span className="text-[#86868b] ml-2">{plan.duration}</span>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <i className="fas fa-check text-[#6aa3ff] mr-3 mt-1 w-4 text-center"></i>
                          <span className="text-[#86868b]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {category.isFree ? (
                    // 跳转到Discord的外部链接
                    <a
                      href="https://discord.gg/X3xYB9qs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-3 rounded-full font-medium inline-block bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#e9e9eb] transition-colors"
                    >
                      Join Discord
                    </a>
                  ) : (
                    // 原来的“Get Started”按钮（跳转到Contact页面）
                    <Link
                      to="/contact-us"
                      className={`w-full text-center py-3 rounded-full font-medium inline-block ${
                        plan.popular 
                          ? 'cta-button text-white' 
                          : 'bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#e9e9eb] transition-colors'
                      }`}
                    >
                      Get Started
                    </Link>
                  )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-20px font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-8">
            {[
              {
                question: 'How do I determine which plan is right for my project?',
                answer: 'Our team can help you assess your specific needs and recommend the best plan. Contact us with details about your project, including length, complexity, and required turnaround time.'
              },
              {
                question: 'Are there any hidden costs?',
                answer: 'No, we believe in transparent pricing. All our costs are clearly outlined, and we will discuss any additional requirements or costs upfront before starting your project.'
              },
              {
                question: 'Can I upgrade my plan after starting a project?',
                answer: 'Yes, you can upgrade your plan at any time. We will adjust the pricing accordingly based on the work completed and remaining.'
              },
              {
                question: 'What is the typical turnaround time for projects?',
                answer: 'Turnaround time depends on the plan you choose. Basic plans typically take 3-5 days, while premium plans offer faster delivery options, including 24-hour rush service.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="border-b border-[#d2d2d7] pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-3 text-[#1d1d1f]">{item.question}</h3>
                <p className="text-[#86868b]">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-[#86868b] mb-8 max-w-2xl mx-auto">
            Ready to start your project with transparent pricing and exceptional quality?
          </p>
          <Link
            to="/contact-us"
            className="cta-button px-8 py-3 rounded-full text-white font-medium inline-block"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;