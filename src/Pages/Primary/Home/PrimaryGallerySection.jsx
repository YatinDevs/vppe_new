import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronRight, ChevronLeft, X, ZoomIn, Download, ChevronDown, ChevronUp, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  primarygalleryImages,
  galleryCategories
} from "../../../constant/PrimaryPage/primarygalleryImages";

const PRIMARY = "#F97316";
const DARK = "#0C1B33";
const MID = "#194369";

const PrimaryGallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loadedImages, setLoadedImages] = useState({});
  const galleryRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(4);
      else if (window.innerWidth < 1024) setVisibleCount(6);
      else setVisibleCount(8);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const filteredImages = primarygalleryImages.filter(img =>
    activeCategory === "All" || img.category === activeCategory
  );
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleViewMore = () => {
    const w = window.innerWidth;
    setVisibleCount(prev => Math.min(prev + (w < 640 ? 4 : w < 1024 ? 6 : 8), filteredImages.length));
  };

  const navigateImage = (dir) => {
    if (!selectedImage) return;
    const idx = filteredImages.findIndex(i => i.id === selectedImage.id);
    const next = dir === 'next'
      ? (idx + 1) % filteredImages.length
      : (idx - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[next]);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedImage]);

  const handleDownload = async (url, title) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (e) { console.error('Download failed', e); }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
      {/* Corner doodles */}
      <img src="/doodles/microscope_1.png" alt=""
        className="absolute top-4 right-8 w-16 h-16 opacity-5 animate-float pointer-events-none select-none" />
      <img src="/doodles/earth_01.png" alt=""
        className="absolute bottom-8 left-4 w-16 h-16 opacity-5 animate-float-reverse pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p className="font-ui text-sm tracking-widest uppercase font-semibold mb-2"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}>
            School Gallery
          </motion.p>
          <motion.h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}>
            Explore Our{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
              Campus Life
            </span>
          </motion.h2>
          <motion.p className="font-body text-gray-500 mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            Capturing precious moments from our vibrant school life
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.name);
                const w = window.innerWidth;
                setVisibleCount(w < 640 ? 4 : w < 1024 ? 6 : 8);
              }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className={`font-ui px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200`}
              style={activeCategory === cat.name
                ? { background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)`, color: "#fff", borderColor: "transparent" }
                : { background: "#fff", color: "#555", borderColor: "#e5e7eb" }
              }
            >
              {cat.name}
              <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8"
        >
          {visibleImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer aspect-square border border-gray-100"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              onClick={() => setSelectedImage(image)}
            >
              {!loadedImages[image.id] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
                </div>
              )}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages[image.id] ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setLoadedImages(prev => ({ ...prev, [image.id]: true }))}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-3">
                <h3 className="font-title text-white text-xs sm:text-sm font-bold line-clamp-1">{image.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-ui text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                    {image.category}
                  </span>
                  <ZoomIn size={14} className="text-white" />
                </div>
              </div>
              <div className="absolute top-2 left-2">
                <span className="font-ui text-xs bg-white/90 text-orange-600 px-2 py-0.5 rounded-full border border-orange-100 shadow-sm">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-gray-500 mb-4">No images found in this category.</p>
            <button onClick={() => setActiveCategory("All")}
              className="font-ui px-6 py-2.5 rounded-xl text-white font-semibold"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}>
              View All
            </button>
          </div>
        )}

        {/* View more / less */}
        {filteredImages.length > 0 && (
          <div className="flex items-center justify-center gap-4 mb-10">
            {hasMore && (
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={handleViewMore}
                className="font-ui inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all"
                style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}
              >
                Load More <ChevronDown size={16} />
              </motion.button>
            )}
            {visibleCount > 8 && !hasMore && (
              <button
                onClick={() => setVisibleCount(8)}
                className="font-ui inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all"
                style={{ borderColor: PRIMARY, color: PRIMARY }}
              >
                Show Less <ChevronUp size={16} />
              </button>
            )}
            <span className="font-body text-sm text-gray-400">
              {visibleImages.length} / {filteredImages.length} images
            </span>
          </div>
        )}

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${MID}, ${PRIMARY})` }}
        >
          <h3 className="font-title text-2xl font-black text-white mb-2">See More School Life</h3>
          <p className="font-body text-white/80 mb-5">View the full gallery and relive the best moments.</p>
          <Link to="/primary/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white font-ui font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
            style={{ color: PRIMARY }}>
            Full Gallery <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg border border-orange-100">
                <X size={18} style={{ color: PRIMARY }} />
              </button>
              <div className="relative h-[50vh] sm:h-[60vh] bg-gray-900">
                <img src={selectedImage.src} alt={selectedImage.alt}
                  className="w-full h-full object-contain" />
                <button onClick={() => navigateImage('prev')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-lg border border-orange-100">
                  <ChevronLeft size={18} style={{ color: PRIMARY }} />
                </button>
                <button onClick={() => navigateImage('next')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-lg border border-orange-100">
                  <ChevronRight size={18} style={{ color: PRIMARY }} />
                </button>
                <button
                  onClick={() => handleDownload(selectedImage.src, selectedImage.title)}
                  className="absolute bottom-3 right-3 px-4 py-2 rounded-lg flex items-center gap-1.5 text-white text-sm font-semibold shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, #ea6510)` }}
                >
                  <Download size={14} /> Download
                </button>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-title text-lg font-bold text-gray-900">{selectedImage.title}</h3>
                <span className="font-ui text-xs px-3 py-1 rounded-full border border-orange-200 mt-1 inline-block"
                  style={{ background: "rgba(249,115,22,0.08)", color: PRIMARY }}>
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PrimaryGallerySection;
