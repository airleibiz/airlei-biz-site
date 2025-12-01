// AIRLÉI BIZ™ Portfolio Component - Apple Minimalist Style
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type VideoItem = {
  id: number;
  title: string;
  thumbnail: string;
  video: string; // 现在直接存 iframe 可用的链接（YouTube embed / Drive 预览 / 其它外链）
  type?: 'youtube' | 'drive';
};

// 动画
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// 工具函数：判断链接类型
const getVideoType = (url: string): 'youtube' | 'drive' | 'unknown' => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  if (url.includes('drive.google.com')) {
    return 'drive';
  }
  return 'unknown';
};

const Portfolio: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    type: 'youtube';
  } | null>(null);

  // 横屏（全部用 /embed/）
  const landscapeVideos: VideoItem[] = [
    {
      id: 1,
      title: 'FIRE PUBLICITY FILM',
      thumbnail: "/images/FIRE.png",
      video: "https://www.youtube.com/embed/uEMyvax1kAw",
      type: 'youtube'
    },
    {
      id: 2,
      title: 'TOYOTA COROLLA SUV DREAM',
      thumbnail: "/images/TOYOTA COROLLA SUV DREAM.jpg",
      video: "https://www.youtube.com/embed/zNCGtxbey50",
      type: 'youtube'
    },
    {
      id: 3,
      title: 'TOYOTA COROLLA SUV WITH THE SPECIAL MOM',
      thumbnail: "/images/TOYOTA WITH THE SPECIAL MOM.png",
      video: "https://www.youtube.com/embed/nPCBLkoECc0",
      type: 'youtube'
    },
    {
      id: 4,
      title: 'PRE-VISUALISATION FILM',
      thumbnail: "/images/previsual.jpg",
      video: "https://www.youtube.com/embed/AkAzFS6kx2A",
      type: 'youtube'
    },
    {
      id: 5,
      title: '咚咚秒送',
      thumbnail: "/images/dongdong.png",
      video: "https://www.youtube.com/embed/rkncE0zcIWo",
      type: 'youtube'
    },
    {
      id: 6,
      title: 'BEIJING CENTRAL AXIS',
      thumbnail: "/images/international.png",
      video: "https://www.youtube.com/embed/liaRdhyO_qI",
      type: 'youtube'
    },
    {
      id: 7,
      title: 'THE ORIGIN OF YOUTIAO',
      thumbnail: "/images/油炸桧.png",
      video: "https://www.youtube.com/embed/7cIkdwcjq4U",
      type: 'youtube'
    }
  ];

  // 竖屏（Shorts 同样用 /embed/）
  const portraitVideos: VideoItem[] = [
    {
      id: 1,
      title: 'AIRLEI AI STUDIO',
      thumbnail: "/images/AIRLEI AI STUDIO.png",
      video: "https://www.youtube.com/embed/JqpQLN-eWiQ",
      type: 'youtube'
    },
    {
      id: 2,
      title: 'NamaStay',
      thumbnail: "/images/NamasStay.png",
      video: "https://www.youtube.com/embed/uezxnGCS7kI",
      type: 'youtube'
    },
    {
      id: 3,
      title: 'FASHION',
      thumbnail: "/images/衣服广告.png",
      video: "https://www.youtube.com/embed/SgPVO0YB8_4",
      type: 'youtube'
    },
    {
      id: 4,
      title: 'PRODUCT',
      thumbnail: "/images/裤子B.png",
      // 先保留 Drive：点击后新开标签页
      video: "https://youtube.com/embed/T-EXWFCsEzo",
      type: 'youtube'
    },
    {
      id: 5,
      title: 'TRANSTYLE',
      thumbnail: "/images/转绘.png",
      video: "https://youtube.com/embed/VgzDmqmqaT4",
      type: 'youtube'
    }
  ];

  // 点击缩略图 → YouTube 走 Modal，Drive / 其它 → 新标签页
  const openPlayer = (video: string) => {
    const type = getVideoType(video);

    if (type === 'youtube') {
      setActiveVideo({ src: video, type: 'youtube' });
      return;
    }

    // Drive 或 unknown：直接新标签页打开，不再 iframe（会被 CSP 拦）
    if (typeof window !== 'undefined') {
      window.open(video, '_blank', 'noopener,noreferrer');
    }
  };

  const closePlayer = () => setActiveVideo(null);

  // 小工具：给 iframe 加 autoplay 参数（避免 ? / & 写错）
  const withAutoplay = (url: string) =>
    `${url}${url.includes('?') ? '&' : '?'}autoplay=1`;

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
            href="/contact-us"
            className="px-8 py-3 rounded-full text-white font-medium inline-block bg-[#6aa3ff] hover:opacity-90 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* 播放器 Modal：现在只给 YouTube 用，竖版也一样 */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePlayer}
          >
            <motion.div
              className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
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

              <div className="aspect-video w-full bg-black">
                <iframe
                  src={withAutoplay(activeVideo.src)}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
