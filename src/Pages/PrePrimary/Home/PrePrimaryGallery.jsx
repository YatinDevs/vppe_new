import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Maximize2, Camera } from "lucide-react";

const galleryImages = [
  { id: 1, category: "Activities", title: "Art & Craft Session", description: "Little hands creating colorful masterpieces", headerBg: "linear-gradient(135deg, #FCE7F3, #FBCFE8)", date: "Mar 15, 2024", likes: 42 },
  { id: 2, category: "Playground", title: "Outdoor Fun Time", description: "Joyful moments in our safe play area", headerBg: "linear-gradient(135deg, #DBEAFE, #BFDBFE)", date: "Mar 10, 2024", likes: 56 },
  { id: 3, category: "Music", title: "Rhythm & Beats Class", description: "Exploring music with fun instruments", headerBg: "linear-gradient(135deg, #EDE9FE, #DDD6FE)", date: "Mar 5, 2024", likes: 38 },
  { id: 4, category: "Events", title: "Annual Sports Day", description: "Races, games, and lots of laughter", headerBg: "linear-gradient(135deg, #D1FAE5, #A7F3D0)", date: "Feb 28, 2024", likes: 78 },
  { id: 5, category: "Classroom", title: "Story Time Magic", description: "Imaginary worlds come alive", headerBg: "linear-gradient(135deg, #FEF3C7, #FDE68A)", date: "Feb 25, 2024", likes: 45 },
  { id: 6, category: "Activities", title: "Water Play Fun", description: "Splashing and playing on a sunny day", headerBg: "linear-gradient(135deg, #CFFAFE, #A5F3FC)", date: "Feb 20, 2024", likes: 67 },
  { id: 7, category: "Celebrations", title: "Birthday Party", description: "Celebrating special moments together", headerBg: "linear-gradient(135deg, #FEE2E2, #FECACA)", date: "Feb 15, 2024", likes: 89 },
  { id: 8, category: "Learning", title: "Science Exploration", description: "Little scientists at work!", headerBg: "linear-gradient(135deg, #E0E7FF, #C7D2FE)", date: "Feb 10, 2024", likes: 51 },
  { id: 9, category: "Playground", title: "Swing Time", description: "Flying high with joy", headerBg: "linear-gradient(135deg, #CCFBF1, #99F6E4)", date: "Feb 5, 2024", likes: 62 },
  { id: 10, category: "Activities", title: "Finger Painting", description: "Colorful hands, happy hearts", headerBg: "linear-gradient(135deg, #FED7AA, #FDBA74)", date: "Jan 30, 2024", likes: 73 },
  { id: 11, category: "Music", title: "Dance Session", description: "Moving to the rhythm", headerBg: "linear-gradient(135deg, #F3E8FF, #E9D5FF)", date: "Jan 25, 2024", likes: 47 },
  { id: 12, category: "Events", title: "Parents Day", description: "Special moments with families", headerBg: "linear-gradient(135deg, #FEF9C3, #FEF08A)", date: "Jan 20, 2024", likes: 94 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function PrePrimaryGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedImages, setLikedImages] = useState({});
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const navigateImage = (dir) => {
    if (!selectedImage) return;
    const idx = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const next = dir === "next"
      ? (idx + 1) % filteredImages.length
      : idx - 1 < 0 ? filteredImages.length - 1 : idx - 1;
    setSelectedImage(filteredImages[next]);
  };

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedImages((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, filteredImages]);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Corner doodles 5% */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="/doodles/capandbooks_1.png" alt="" className="absolute top-8 right-8 w-24 h-24 opacity-5" />
        <img src="/doodles/microscope_1.png" alt="" className="absolute bottom-12 left-6 w-20 h-20 opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#EC4899" }}>
            Our Memories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Our Happy{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Memories
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Capturing the joy, laughter, and magic of childhood every single day!
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeCategory === cat ? "text-white shadow-md" : "bg-white text-gray-600 border border-gray-100 hover:shadow-md"
              }`}
              style={activeCategory === cat ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" } : {}}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {displayedImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300">
                <div className="h-40 sm:h-48 relative" style={{ background: image.headerBg }}>
                  <Camera size={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 text-gray-700" />
                  <span className="absolute top-2 left-2 bg-black/40 text-white rounded-md px-2 py-0.5 text-xs font-semibold backdrop-blur-sm">
                    {image.category}
                  </span>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Maximize2 size={18} style={{ color: "#8B5CF6" }} />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1 group-hover:text-pink-600 transition-colors">
                    {image.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{image.date}</span>
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={(e) => handleLike(image.id, e)}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Heart
                        size={13}
                        className={likedImages[image.id] ? "fill-red-500 text-red-500" : "text-gray-300"}
                      />
                      <span className="text-gray-400">{image.likes + (likedImages[image.id] ? 1 : 0)}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-gray-400">No photos in this category.</div>
        )}

        {/* View More */}
        {!showAll && filteredImages.length > 8 && (
          <motion.div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-bold shadow-lg text-sm"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
            >
              <Camera size={16} />
              View All Memories
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 relative" style={{ background: selectedImage.headerBg }}>
                <Camera size={64} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 text-gray-700" />
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 w-9 h-9 bg-black/30 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                >
                  <X size={16} className="text-white" />
                </button>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/50 transition-all"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/50 transition-all"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-1">{selectedImage.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{selectedImage.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{selectedImage.date}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#EDE9FE", color: "#6D28D9" }}>
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
