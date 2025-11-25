// AIRLÉI BIZ™ Portfolio Component - Apple Minimalist Style


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type VideoItem = {
  id: number;
  title: string;
  thumbnail: string;
  video: string; // Google Drive直链（已encode）
};

// 动画
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Portfolio: React.FC = () => {
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  // 横屏
  const landscapeVideos: VideoItem[] = [
  {
      id: 1,
      title: 'FIRE CHARITY',
      thumbnail: "/images/FIRE.png",
      video: "https://youtu.be/embed/uEMyvax1kAw"
    },
    {
      id: 2,
      title: 'TOYOTA COROLLA SUV DREAM',
      thumbnail: "/images/TOYOTA COROLLA SUV DREAM.jpg",
      video: "https://www.youtube.com/embed/zNCGtxbey50"
    },
    {
      id: 3,
      title: 'TOYOTA COROLLA SUV WITH THE SPECIAL MOM',
      thumbnail: "/images/TOYOTA WITH THE SPECIAL MOM.png",
      video: "https://www.youtube.com/embed/nPCBLkoECc0"
    },
    {
      id: 4,
      title: '先导片',
      thumbnail: "/images/previsual.jpg",
      video: "https://www.youtube.com/embed/AkAzFS6kx2A"
    },
    {
      id: 5,
      title: '咚咚秒送',
      thumbnail: "/images/dongdong.png",
      video: "https://www.youtube.com/embed/rkncE0zcIWo"
    },
    {
      id: 6,
      title: '宣传片 international ver',
      thumbnail: "/images/international.png",
      video: "https://www.youtube.com/embed/liaRdhyO_qI"
    },
    {
      id: 7,
      title: '油炸桧',
      thumbnail: "/images/油炸桧.png",
      video: "https://www.youtube.com/embed/7cIkdwcjq4U"
    }
  ];

  // 竖屏
  const portraitVideos: VideoItem[] = [
    {
    id: 1,
    title: 'AIRLEI AI STUDIO',
    thumbnail: "/images/AIRLEI AI STUDIO.png",
    video: "https://www.youtube.com/embed/JqpQLN-eWiQ"
    },
    {
      id: 2,
      title: 'NamasStay',
      thumbnail: "/images/NamasStay.png",
      video: "https://www.youtube.com/embed/uezxnGCS7kI"
    },
    {
      id: 3,
      title: '衣服广告',
      thumbnail: "/images/衣服广告.png",
      video: "https://www.youtube.com/embed/SgPVO0YB8_4"
    },
    {
      id: 4,
      title: '裤子B',
      thumbnail: "/images/裤子B.png",
      video: encodeURI('https://drive.google.com/uc?export=download&id=1c9pT1wHnjgzKtuAgX0u7PMShbM8PhqVU')
    },
    {
      id: 5,
      title: '转绘',
      thumbnail: "/images/转绘.png",
      video: encodeURI('https://drive.google.com/uc?export=download&id=1tsLY1Iyb6KF-RbOL9qJseyS7N2IP2XLs')
    }
  ];

  // 点击缩略图 → 打开播放器
  const openPlayer = (src: string) => setActiveSrc(src);
  const closePlayer = () => setActiveSrc(null);

  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto">
        {/* 标题 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="text-center mb-24"
        >
          <motion.h1
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-[28px] font-bold mb-8 text-[#1d1d1f]"
          >
            Portfolio
          </motion.h1>
          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-[#86868b] max-w-2xl mx-auto"
          >
            Explore our collection of AI-generated content projects across various industries and formats.
          </motion.p>
        </motion.div>

        {/* 横屏 */}
        <div className="mb-24">
          <h2 className="text-[20px] font-bold mb-12">Landscape Videos</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {landscapeVideos.map((v) => (
              <motion.div key={v.id} className="relative" variants={fadeIn} transition={{ duration: 0.5 }}>
                <button
                  type="button"
                  onClick={() => openPlayer(v.video)}
                  className="w-full aspect-video overflow-hidden border border-[#d2d2d7] rounded-xl relative group"
                  aria-label={`Play ${v.title}`}
                >
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-16 h-16 rounded-full bg-white/85 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="#6aa3ff" />
                      </svg>
                    </div>
                  </div>
                </button>
                <h3 className="text-lg font-medium mt-4 text-[#1d1d1f]">{v.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 竖屏 */}
        <div className="mb-24">
          <h2 className="text-[20px] font-bold mb-12">Portrait Videos</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {portraitVideos.map((v) => (
              <motion.div key={v.id} className="relative" variants={fadeIn} transition={{ duration: 0.5 }}>
                <button
                  type="button"
                  onClick={() => openPlayer(v.video)}
                  className="aspect-[9/16] w-full overflow-hidden border border-[#d2d2d7] rounded-xl relative group"
                  aria-label={`Play ${v.title}`}
                >
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 rounded-full bg-white/85 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="#6aa3ff" />
                      </svg>
                    </div>
                  </div>
                </button>
                <h3 className="text-base font-medium mt-4 text-[#1d1d1f]">{v.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[#86868b] mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life with our AI-powered content creation?
          </p>
          <a
            href="/contact"
            className="px-8 py-3 rounded-full text-white font-medium inline-block bg-[#6aa3ff] hover:opacity-90 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* 简洁播放器 Modal */}
      <AnimatePresence>
        {activeSrc && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePlayer}
          >
            <motion.div
              className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.98, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-2">
                <button
                  className="h-9 w-9 rounded-full hover:bg-black/5 flex items-center justify-center"
                  onClick={closePlayer}
                  aria-label="Close video"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <video
                src={activeSrc}
                controls
                autoPlay
                className="w-full h-[60vh] object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
