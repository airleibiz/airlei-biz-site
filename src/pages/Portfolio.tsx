// AIRLÉI BIZ™ Portfolio Component - Apple Minimalist Style
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type VideoItem = {
  id: number;
  title: string;
  thumbnail: string;
  video: string; // YouTube链接 或 Google Drive直链（已encode）
  type?: 'youtube' | 'drive'; // 新增类型标识，自动识别可省略，这里手动标注更清晰
};

// 动画
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// 工具函数：解析YouTube视频ID
const getYouTubeVideoId = (url: string) => {
  // 匹配普通YouTube链接和Shorts链接
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// 工具函数：判断链接类型
const getVideoType = (url: string) => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  if (url.includes('drive.google.com')) {
    return 'drive';
  }
  return 'unknown';
};

const Portfolio: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ src: string; type: string } | null>(null);

  // 横屏
  const landscapeVideos: VideoItem[] = [
    {
      id: 1,
      title: 'FIRE CHARITY',
      thumbnail: "/images/FIRE.png",
      video: "https://youtu.be/uEMyvax1kAw",
      type: 'youtube'
    },
    {
      id: 2,
      title: 'TOYOTA COROLLA SUV DREAM',
      thumbnail: "/images/TOYOTA COROLLA SUV DREAM.jpg",
      video: "https://youtu.be/zNCGtxbey50",
      type: 'youtube'
    },
    {
      id: 3,
      title: 'TOYOTA COROLLA SUV WITH THE SPECIAL MOM',
      thumbnail: "/images/TOYOTA WITH THE SPECIAL MOM.png",
      video: "https://youtu.be/nPCBLkoECc0",
      type: 'youtube'
    },
    {
      id: 4,
      title: '先导片',
      thumbnail: "/images/previsual.jpg",
      video: "https://youtu.be/AkAzFS6kx2A",
      type: 'youtube'
    },
    {
      id: 5,
      title: '咚咚秒送',
      thumbnail: "/images/dongdong.png",
      video: "https://www.youtube.com/watch?v=rkncE0zcIWo",
      type: 'youtube'
    },
    {
      id: 6,
      title: '宣传片 international ver',
      thumbnail: "/images/international.png",
      video: "https://www.youtube.com/watch?v=liaRdhyO_qI",
      type: 'youtube'
    },
    {
      id: 7,
      title: '油炸桧',
      thumbnail: "/images/油炸桧.png",
      video: "https://www.youtube.com/watch?v=7cIkdwcjq4U",
      type: 'youtube'
    }
  ];

  // 竖屏
  const portraitVideos: VideoItem[] = [
    {
      id: 1,
      title: 'AIRLEI AI STUDIO',
      thumbnail: "/images/AIRLEI AI STUDIO.png",
      video: "https://youtube.com/shorts/JqpQLN-eWiQ?feature=share",
      type: 'youtube'
    },
    {
      id: 2,
      title: 'NamasStay',
      thumbnail: "/images/NamasStay.png",
      video: "https://youtube.com/shorts/uezxnGCS7kI?feature=share",
      type: 'youtube'
    },
    {
      id: 3,
      title: '衣服广告',
      thumbnail: "/images/衣服广告.png",
      video: "https://youtube.com/shorts/SgPVO0YB8_4?feature=share",
      type: 'youtube'
    },
    {
      id: 4,
      title: '裤子B',
      thumbnail: "/images/裤子B.png",
      video: encodeURI('https://drive.google.com/file/d/1c9pT1wHnjgzKtuAgX0u7PMShbM8PhqVU/view?usp=sharing'),
      type: 'drive'
    },
    {
      id: 5,
      title: '转绘',
      thumbnail: "/images/转绘.png",
      video: encodeURI('https://drive.google.com/file/d/1tsLY1Iyb6KF-RbOL9qJseyS7N2IP2XLs/view?usp=sharing'),
      type: 'drive'
    }
  ];

  // 点击缩略图 → 打开播放器
  const openPlayer = (video: string) => {
    const type = getVideoType(video);
    setActiveVideo({ src: video, type });
  };
  const closePlayer = () => setActiveVideo(null);

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

      {/* 优化后的播放器 Modal：兼容YouTube和Drive */}
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
              className={`w-full max-w-5xl bg-white rounded-2xl overflow-hidden ${
                activeVideo.type === 'youtube' ? 'max-w-4xl' : 'max-w-3xl'
              }`}
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
              
              {/* 区分YouTube和Drive视频渲染 */}
              {activeVideo.type === 'youtube' ? (
                <div className="aspect-video w-full bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(activeVideo.src)}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : activeVideo.type === 'drive' ? (
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="w-full h-[60vh] object-contain bg-black"
                />
              ) : (
                <div className="w-full h-[60vh] bg-black flex items-center justify-center text-white">
                  <p>Unsupported video format</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
