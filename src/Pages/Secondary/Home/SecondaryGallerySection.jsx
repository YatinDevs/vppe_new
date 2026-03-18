import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  X,
  ZoomIn,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { secondarygalleryImages, galleryCategories } from "../../../constant/SecondaryPage/secondarygalleryImages";
import { Link } from "react-router-dom";

const SecondaryGallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loadedImages, setLoadedImages] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(4);
      else if (width < 1024) setVisibleCount(6);
      else setVisibleCount(8);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src) { img.src = src; img.removeAttribute("data-src"); }
          }
        });
      },
      { rootMargin: "50px", threshold: 0.1 }
    );
    const images = document.querySelectorAll("img[data-src]");
    images.forEach((img) => observerRef.current.observe(img));
    return () => { if (observerRef.current) observerRef.current.disconnect(); };
  }, [visibleCount, activeCategory]);

  const filteredImages = secondarygalleryImages.filter(
    (image) => activeCategory === "All" || image.category === activeCategory
  );
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < filteredImages.length;

  const handleViewMore = () => {
    const width = window.innerWidth;
    const increment = width < 640 ? 4 : width < 1024 ? 6 : 8;
    setVisibleCount((prev) => Math.min(prev + increment, filteredImages.length));
  };

  const handleViewLess = () => {
    const width = window.innerWidth;
    const initialCount = width < 640 ? 4 : width < 1024 ? 6 : 8;
    setVisibleCount(initialCount);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleCategoryChange = (name) => {
    setActiveCategory(name);
    const width = window.innerWidth;
    setVisibleCount(width < 640 ? 4 : width < 1024 ? 6 : 8);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            className="font-subheading text-sm md:text-base tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#800000" }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            School Gallery
          </motion.p>
          <motion.h2
            className="font-title text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F0C505, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Campus Life
            </span>
          </motion.h2>
          <motion.p
            className="font-body text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Capturing precious moments and memories from our vibrant school life
          </motion.p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-ui px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300"
              style={
                activeCategory === category.name
                  ? { background: "linear-gradient(135deg, #194369, #800000)", color: "#fff", borderColor: "transparent" }
                  : { background: "#fff", color: "#374151", borderColor: "#e5e7eb" }
              }
            >
              {category.name}
              <span
                className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                style={activeCategory === category.name ? { background: "rgba(255,255,255,0.2)", color: "#fff" } : { background: "#f3f4f6", color: "#6b7280" }}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Gallery grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-body text-gray-500 text-lg mb-4">No images found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="font-ui px-6 py-2 rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
            >
              View All Images
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square bg-gray-100">
                  {!loadedImages[image.id] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-8 h-8 border-4 rounded-full animate-spin"
                        style={{ borderColor: "rgba(25,67,105,0.2)", borderTopColor: "#194369" }}
                      />
                    </div>
                  )}
                  <img
                    data-src={image.src}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3C/svg%3E"
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages[image.id] ? "opacity-100" : "opacity-0"}`}
                    loading="lazy"
                    onLoad={() => setLoadedImages((prev) => ({ ...prev, [image.id]: true }))}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-3">
                    <h3 className="font-title text-white text-xs font-bold line-clamp-1">{image.title}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-ui text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                        {image.category}
                      </span>
                      <ZoomIn size={14} className="text-white" />
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-2 left-2">
                    <span
                      className="font-ui text-xs px-2 py-0.5 rounded-full text-white"
                      style={{ background: "rgba(25,67,105,0.7)" }}
                    >
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View more/less */}
        {filteredImages.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            {hasMoreImages ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewMore}
                className="font-ui inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-xl shadow hover:opacity-90 transition-all"
                style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
              >
                View More Images
                <ChevronDown size={18} />
              </motion.button>
            ) : visibleCount > 8 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewLess}
                className="font-ui inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-xl border-2 transition-all"
                style={{ borderColor: "#194369", color: "#194369" }}
              >
                View Less
                <ChevronUp size={18} />
              </motion.button>
            ) : null}
            <p className="font-body text-sm text-gray-500">
              Showing <strong className="text-gray-800">{visibleImages.length}</strong> of{" "}
              <strong className="text-gray-800">{filteredImages.length}</strong> images
            </p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, #194369, #800000)" }}
        >
          <h3 className="font-title text-2xl font-bold mb-2">Want to See More?</h3>
          <p className="font-body text-white/75 mb-5">
            Follow our social pages or contact us to stay updated with all campus events.
          </p>
          <Link
            to="/secondary-admission-process"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#194369" }}
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200"
              >
                <X size={18} className="text-gray-700" />
              </button>
              <div className="relative h-[55vh] bg-gray-900">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow"
                >
                  <ChevronLeft size={18} className="text-gray-700" />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow"
                >
                  <ChevronRight size={18} className="text-gray-700" />
                </button>
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-title text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="font-ui text-xs px-3 py-1 rounded-full text-white"
                    style={{ background: "#194369" }}
                  >
                    {selectedImage.category}
                  </span>
                  <span className="font-body text-xs text-gray-500">
                    {filteredImages.findIndex((img) => img.id === selectedImage.id) + 1} of {filteredImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SecondaryGallerySection;
