// AIRLÉI BIZ™ Contact Page v5.0 - Apple Minimalist Style
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

// TS 写法：React.FormEvent<HTMLFormElement>
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
        {/* 上面标题那块不变 */}

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
                <label htmlFor="name" className="block text-sm font-medium text-[#86868b] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"  // 👈 一定要有 name
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:border-[#6aa3ff] focus:outline-none text-[#1d1d1f]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#86868b] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" // 👈
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:border-[#6aa3ff] focus:outline-none text-[#1d1d1f]"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#86868b] mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject" // 👈
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:border-[#6aa3ff] focus:outline-none text-[#1d1d1f]"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#86868b] mb-2">Message</label>
              <textarea
                id="message"
                name="message" // 👈
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
          <h2 className="text-20px font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Our standard turnaround time is 72 hours for most projects, though complex projects may require more time.'
              },
              {
                question: 'What information do you need to start a project?',
                answer: 'We typically need a detailed brief, any reference materials, brand guidelines, and your specific requirements for the project.'
              },
              {
                question: 'Do you offer revisions?',
                answer: 'Yes, we offer revisions based on your feedback. The number of revisions depends on the package you choose.'
              },
              {
                question: 'What file formats do you provide?',
                answer: 'We provide content in various formats including MP4, JPEG, PNG, PDF, and more depending on your needs.'
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-[#d2d2d7] pb-8">
                <h3 className="text-lg font-medium mb-3 text-[#1d1d1f]">{item.question}</h3>
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
