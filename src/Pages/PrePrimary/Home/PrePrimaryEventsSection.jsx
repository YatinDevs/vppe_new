import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Video, Bell, ChevronRight, Phone } from "lucide-react";

const recentEvents = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "Mar 15, 2024",
    description: "Little champions raced and played with big smiles all day long!",
    headerBg: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
    headerAccent: "#F59E0B",
    category: "Sports",
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "Feb 28, 2024",
    description: "Colorful masterpieces created by our tiny artists on display.",
    headerBg: "linear-gradient(135deg, #FCE7F3, #FBCFE8)",
    headerAccent: "#EC4899",
    category: "Arts",
  },
  {
    id: 3,
    title: "Spring Festival",
    date: "Feb 10, 2024",
    description: "A joyful celebration of colors, flowers, and new beginnings.",
    headerBg: "linear-gradient(135deg, #D1FAE5, #A7F3D0)",
    headerAccent: "#10B981",
    category: "Celebration",
  },
  {
    id: 4,
    title: "Storytelling Week",
    date: "Jan 25, 2024",
    description: "Magical stories, puppets, and imaginative play every day.",
    headerBg: "linear-gradient(135deg, #DBEAFE, #BFDBFE)",
    headerAccent: "#3B82F6",
    category: "Learning",
  },
];

const videos = [
  { id: 1, title: "A Day at Pre-Primary", duration: "2:45", description: "See how our little ones spend their day.", headerBg: "linear-gradient(135deg, #FCE7F3, #FBCFE8)", headerAccent: "#EC4899" },
  { id: 2, title: "Music & Movement Class", duration: "3:20", description: "Rhythm and fun in our music room.", headerBg: "linear-gradient(135deg, #DBEAFE, #BFDBFE)", headerAccent: "#3B82F6" },
  { id: 3, title: "Art Activities", duration: "4:15", description: "Creative expression through art and craft.", headerBg: "linear-gradient(135deg, #FEF3C7, #FDE68A)", headerAccent: "#F59E0B" },
  { id: 4, title: "Outdoor Playtime", duration: "2:30", description: "Fun and games in our safe play area.", headerBg: "linear-gradient(135deg, #D1FAE5, #A7F3D0)", headerAccent: "#10B981" },
];

const upcomingEvents = [
  { id: 1, title: "Summer Camp Begins", date: "June 1, 2025", description: "Fun activities, water play, and creative workshops.", progress: 20 },
  { id: 2, title: "Parent-Teacher Meeting", date: "June 15, 2025", description: "Discuss your child's progress with our teachers.", progress: 40 },
  { id: 3, title: "Annual Day Celebration", date: "July 20, 2025", description: "Dance, music, and cultural performances by our stars.", progress: 60 },
  { id: 4, title: "Graduation Day", date: "Aug 10, 2025", description: "Moving up ceremony for our little graduates.", progress: 80 },
];

const tabs = [
  { id: "events", label: "Recent Events", Icon: Calendar },
  { id: "videos", label: "Videos", Icon: Video },
  { id: "upcoming", label: "Upcoming", Icon: Bell },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function PrePrimaryEventsSection() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#FDF4FF" }}>
      {/* Corner doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="/doodles/cap_1.png" alt="" className="absolute top-8 right-10 w-20 h-20 opacity-5" />
        <img src="/doodles/award_2.png" alt="" className="absolute bottom-12 left-6 w-16 h-16 opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#EC4899" }}>
            School Life
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Events &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Happenings
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Every day is a celebration of learning and joy at our Pre-Primary section!
          </p>
        </motion.div>

        {/* Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.Icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                  isActive ? "text-white shadow-md" : "bg-white text-gray-600 hover:shadow-md"
                }`}
                style={isActive ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)" } : {}}
              >
                <Icon size={15} />
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "events" && (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {recentEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
                  >
                    <div className="h-36 relative flex items-end p-3" style={{ background: event.headerBg }}>
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-white"
                        style={{ background: event.headerAccent }}
                      >
                        {event.date}
                      </span>
                      <span className="ml-auto px-2 py-0.5 bg-white/80 rounded-md text-xs font-semibold text-gray-700">
                        {event.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-base mb-1">{event.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-3">{event.description}</p>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#FCE7F3", color: "#BE185D" }}>
                        View Photos
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {videos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
                >
                  <div className="h-44 relative flex items-center justify-center" style={{ background: video.headerBg }}>
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Video size={24} style={{ color: video.headerAccent }} />
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white rounded-md px-2 py-0.5 text-xs font-bold">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-base mb-1">{video.title}</h3>
                    <p className="text-gray-500 text-xs mb-3">{video.description}</p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#EDE9FE", color: "#6D28D9" }}>
                      Watch Now
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "upcoming" && (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FCE7F3" }}
                    >
                      <Bell size={18} style={{ color: "#EC4899" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-base">{event.title}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "#EDE9FE", color: "#6D28D9" }}>
                          {event.date}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">{event.description}</p>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${event.progress}%` }}
                          transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg, #8B5CF6, #EC4899)" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, #6D28D9, #EC4899)" }}
        >
          <h3 className="text-xl md:text-2xl font-black mb-3">Stay Updated with School Life</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm">
            Contact us to learn more about upcoming events and school activities.
          </p>
          <motion.a
            href="tel:+917774894389"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white font-bold text-sm shadow-lg"
            style={{ color: "#6D28D9" }}
          >
            <Phone size={16} />
            Contact School
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
