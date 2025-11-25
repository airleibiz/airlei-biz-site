// AIRLÉI BIZ™ AICG 101 Page v5.0 - Apple Minimalist Style
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AICG101: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [activeSection, setActiveSection] = useState<string>('introduction');

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction to AICG',
      icon: 'fas fa-robot'
    },
    {
      id: 'technologies',
      title: 'Key Technologies',
      icon: 'fas fa-microchip'
    },
    {
      id: 'benefits',
      title: 'Benefits for Businesses',
      icon: 'fas fa-chart-line'
    },
    {
      id: 'future',
      title: 'Future of AICG',
      icon: 'fas fa-rocket'
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: 'fas fa-question-circle'
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
              AICG Guide
            </span>
          </motion.div>
          <motion.h1 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-28px font-bold mb-8 text-[#1d1d1f]"
          >
            AICG 101
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            transition={{ duration: 0.6 }}
            className="text-[#86868b] max-w-2xl mx-auto"
          >
            Learn everything you need to know about AI-generated content and how it can transform your business.
          </motion.p>
        </motion.div>

        {/* Navigation tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-3 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeSection === section.id 
                    ? 'cta-button text-white' 
                    : 'bg-[#f5f5f7] border border-[#d2d2d7] hover:bg-[#e9e9eb] text-[#1d1d1f]'
                }`}
              >
                <i className={`${section.icon} mr-2`}></i>
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="border border-[#d2d2d7] rounded-xl p-8">
          {activeSection === 'introduction' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">Introduction to AICG</h2>
                <div className="space-y-8 text-[#86868b]">
                  <p>
                    AI-Generated Content (AICG) refers to any content created with the assistance of artificial intelligence. 
                    This includes text, images, videos, audio, and more. AICG is revolutionizing the way businesses create and 
                    distribute content, making the process faster, more efficient, and more accessible.
                  </p>
                  
                  <div className="rounded-xl p-6">
                    <h3 className="text-20px font-bold mb-4 text-[#1d1d1f]">What is AICG?</h3>
                    <p>
                      AICG leverages machine learning algorithms to generate content based on input parameters and training data. 
                      These algorithms can learn patterns, styles, and structures from existing content and use that knowledge to 
                      create new, original content that meets specific requirements.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-[#1d1d1f]">Text Generation</h3>
                      <p>
                        AI systems can generate articles, blog posts, social media content, and more based on prompts and guidelines.
                      </p>
                    </div>
                    <div className="rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-[#1d1d1f]">Image Creation</h3>
                      <p>
                        AI can create images from text descriptions, modify existing images, and generate artwork in various styles.
                      </p>
                    </div>
                    <div className="rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-[#1d1d1f]">Video Production</h3>
                      <p>
                        AI tools can generate video content, including animations, deepfakes, and video editing assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'technologies' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">Key Technologies</h2>
                <div className="space-y-8 text-[#86868b]">
                  <p>
                    Several key technologies power modern AICG systems. Understanding these technologies can help you make 
                    informed decisions about which AI tools to use for your specific needs.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: 'Generative Adversarial Networks (GANs)',
                        description: 'GANs consist of two neural networks that compete with each other to generate realistic content. They are particularly effective for creating images, videos, and audio.',
                        icon: 'fas fa-network-wired'
                      },
                      {
                        title: 'Transformer Models',
                        description: 'Transformer models like GPT-4 and its variants are revolutionizing text generation. They can generate human-like text for a wide range of applications.',
                        icon: 'fas fa-exchange-alt'
                      },
                      {
                        title: 'Diffusion Models',
                        description: 'Diffusion models are becoming increasingly popular for image generation. They work by gradually adding noise to an image and then reversing the process to create new content.',
                        icon: 'fas fa-random'
                      },
                      {
                        title: 'Neural Radiance Fields (NeRFs)',
                        description: 'NeRFs are used to create 3D representations from 2D images, enabling realistic 3D content generation and manipulation.',
                        icon: 'fas fa-cube'
                      },
                      {
                        title: 'Multimodal Models',
                        description: 'These models can process and generate content across multiple modalities, such as text, images, and audio simultaneously.',
                        icon: 'fas fa-project-diagram'
                      }
                    ].map((tech, index) => (
                      <div key={index} className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#6aa3ff] flex items-center justify-center mr-4">
                            <i className={`${tech.icon} text-white text-lg`}></i>
                          </div>
                          <h3 className="text-xl font-bold text-[#1d1d1f]">{tech.title}</h3>
                        </div>
                        <p>{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'benefits' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">Benefits for Businesses</h2>
                <div className="space-y-8 text-[#86868b]">
                  <p>
                    AICG offers numerous benefits for businesses of all sizes. By leveraging AI-powered content creation, 
                    companies can streamline their workflows, reduce costs, and create more engaging content for their audiences.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        title: 'Cost Efficiency',
                        description: 'AICG can significantly reduce the costs associated with content creation by automating repetitive tasks and reducing the need for large creative teams.',
                        icon: 'fas fa-dollar-sign'
                      },
                      {
                        title: 'Time Savings',
                        description: 'AI tools can generate content in minutes that would take humans hours or days to create, allowing businesses to respond to market trends more quickly.',
                        icon: 'fas fa-clock'
                      },
                      {
                        title: 'Scalability',
                        description: 'With AICG, businesses can easily scale their content production to meet growing demand without compromising quality.',
                        icon: 'fas fa-expand-arrows-alt'
                      },
                      {
                        title: 'Consistency',
                        description: 'AI tools can maintain consistent brand voice and visual identity across all content, ensuring a unified brand experience.',
                        icon: 'fas fa-clone'
                      },
                      {
                        title: 'Innovation',
                        description: 'AICG enables businesses to experiment with new content formats and styles that might be difficult or impossible to create manually.',
                        icon: 'fas fa-lightbulb'
                      },
                      {
                        title: 'Personalization',
                        description: 'AI can generate personalized content for different audience segments, improving engagement and conversion rates.',
                        icon: 'fas fa-user'
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#6aa3ff] flex items-center justify-center mr-4">
                            <i className={`${benefit.icon} text-white text-lg`}></i>
                          </div>
                          <h3 className="text-xl font-bold text-[#1d1d1f]">{benefit.title}</h3>
                        </div>
                        <p>{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'future' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">Future of AICG</h2>
                <div className="space-y-8 text-[#86868b]">
                  <p>
                    The field of AI-Generated Content is evolving rapidly, with new technologies and applications emerging regularly. 
                    Understanding the future direction of AICG can help businesses stay ahead of the curve and leverage these 
                    technologies effectively.
                  </p>
                  
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#6aa3ff] opacity-30"></div>
                    
                    <div className="space-y-8 pl-8">
                      {[
                        {
                          year: 'Near Future (1-2 Years)',
                          developments: [
                            'More realistic and sophisticated content generation',
                            'Improved customization and personalization capabilities',
                            'Integration with existing creative tools and workflows'
                          ]
                        },
                        {
                          year: 'Mid Term (3-5 Years)',
                          developments: [
                            'Full multimodal content generation (text, images, audio, video)',
                            'Advanced AI editors that can collaborate with human creators',
                            'Mainstream adoption across industries'
                          ]
                        },
                        {
                          year: 'Long Term (5+ Years)',
                          developments: [
                            'AI systems that can understand and execute complex creative visions',
                            'Complete content creation pipelines automated by AI',
                            'New content formats and experiences we haven\'t yet imagined'
                          ]
                        }
                      ].map((period, index) => (
                        <div key={index} className="relative">
                          {/* Timeline dot */}
                          <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-[#6aa3ff] border-4 border-white"></div>
                          
                          <h3 className="text-xl font-bold mb-4 text-[#1d1d1f]">{period.year}</h3>
                          <ul className="space-y-3">
                            {period.developments.map((development, i) => (
                              <li key={i} className="flex items-start">
                                <i className="fas fa-arrow-right text-[#6aa3ff] mr-3 mt-1"></i>
                                <span>{development}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'faq' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-24px font-bold mb-6 text-[#1d1d1f]">Frequently Asked Questions</h2>
                <div className="space-y-8 text-[#86868b]">
                  {[
                    {
                      question: 'Will AI replace human creators?',
                      answer: 'No, AI is more likely to augment human creativity rather than replace it. AI tools can handle repetitive tasks and generate ideas, but human input is still essential for guiding the creative process, adding emotional depth, and ensuring content aligns with brand values and audience needs.'
                    },
                    {
                      question: 'Is AICG content considered original?',
                      answer: 'AICG content can be considered original if it meets the legal definition of originality in your jurisdiction. However, it\'s important to understand the terms of service of the AI tools you use and ensure you have the rights to use any training data that might influence the generated content.'
                    },
                    {
                      question: 'How can I ensure AI-generated content is high quality?',
                      answer: 'To ensure high quality, provide clear and detailed prompts, use high-quality training data when possible, and always review and edit AI-generated content before publishing. Many AI tools also allow for iterative refinement based on feedback.'
                    },
                    {
                      question: 'What are the ethical considerations with AICG?',
                      answer: 'Key ethical considerations include ensuring proper attribution, avoiding plagiarism, being transparent about AI involvement, and preventing the generation of harmful or misleading content. It\'s also important to consider the potential impact on employment in creative industries.'
                    },
                    {
                      question: 'How do I choose the right AICG tools for my business?',
                      answer: 'When choosing AICG tools, consider your specific content needs, budget, technical requirements, and the level of customization you require. It\'s often helpful to test multiple tools, compare their outputs, and consider how well they integrate with your existing workflows.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-6 border-b border-[#d2d2d7]">
                      <h3 className="text-xl font-bold mb-4 text-[#1d1d1f]">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-[#86868b] mb-8 max-w-2xl mx-auto">
            Ready to learn more about how AICG can transform your business?
          </p>
          <a 
            href="/contact-us"
            className="cta-button px-8 py-3 rounded-full text-white font-medium inline-block"
          >
            Get Expert Advice
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AICG101;