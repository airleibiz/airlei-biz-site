// AIRLÉI BIZ™ Contact Page v5.0 - Apple Minimalist Style
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // 提交表单 → 调用 /api/contact
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Failed to send, please try again.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Network error, please try later.');
    }
  };

  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto">
        {/* 标题 */}
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
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-[#86868b] max-w-2xl mx-auto"
          >
            Have questions or ready to start your project? Reach out to us today.
          </motion.p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {[
            {
              icon: 'fas fa-envelope',
              title: 'Email',
              content: 'airleibiz@gmail.com',
              link: 'mailto:airleibiz@gmail.com'
            },
            {
              icon: 'fab fa-whatsapp',
              title: 'WhatsApp',
              content: '+60 16 674 1389',
              link: 'https://wa.me/+60166741389'
            },
            {
              icon: 'fas fa-map-marker-alt',
              title: 'Location',
              content: 'Selangor, Malaysia',
              link: 'https://maps.google.com/?q=Selangor,Malaysia'
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 border border-[#d2d2d7] rounded-xl hover:border-[#6aa3ff] transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-full bg-[#f5f5f7] flex items-center justify-center mb-6">
                <i className={`${item.icon} text-[#6aa3ff] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-medium mb-2 text-[#1d1d1f]">{item.title}</h3>
              <p className="text-[#86868b]">{item.content}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-24"
        >
          <h2 className="text-20px font-bold mb-12 text-center">Send us a message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#86868b] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:border-[#6aa3ff] focus:outline-none text-[#1d1d1f]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#86868b] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:border-[#6aa3ff] focus:outline-none text-[#1d1d1f]"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#86868b] mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:border-[#6aa3ff] focus:outline-none text-[#1d1d1f]"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#86868b] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:border-[#6aa3ff] focus:outline-none text-[#1d1d1f] resize-none"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full cta-button px-8 py-3 rounded-full text-white font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-20px font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer:
                  'Our standard turnaround time is 72 hours for most projects, though complex projects may require more time.'
              },
              {
                question: 'What information do you need to start a project?',
                answer:
                  'We typically need a detailed brief, any reference materials, brand guidelines, and your specific requirements for the project.'
              },
              {
                question: 'Do you offer revisions?',
                answer:
                  'Yes, we offer revisions based on your feedback. The number of revisions depends on the package you choose.'
              },
              {
                question: 'What file formats do you provide?',
                answer:
                  'We provide content in various formats including MP4, JPEG, PNG, PDF, and more depending on your needs.'
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-[#d2d2d7] pb-8">
                <h3 className="text-lg font-medium mb-3 text-[#1d1d1f]">
                  {item.question}
                </h3>
                <p className="text-[#86868b]">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
