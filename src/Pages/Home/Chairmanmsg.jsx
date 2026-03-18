import { motion } from "framer-motion";
import messagesData from "../../constant/Home/messagesData";

const MessageCard = ({ data, index }) => {
  const isChairman = index === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
    >
      {/* Dark gradient header */}
      <div
        className="p-8 flex flex-col items-center text-center"
        style={{
          background: isChairman
            ? "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F97316 100%)"
            : "linear-gradient(135deg, #0C1B33 0%, #194369 60%, #F0C505 100%)",
        }}
      >
        {/* Photo */}
        <div className="relative mb-4">
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-40"
            style={{
              background: isChairman
                ? "linear-gradient(135deg, #F97316, #F0C505)"
                : "linear-gradient(135deg, #F0C505, #F97316)",
            }}
          />
          <img
            src={data.image}
            alt={data.name}
            className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
          />
        </div>

        <h3 className="text-white font-black text-xl sm:text-2xl">{data.name}</h3>
        <p
          className="text-sm font-semibold mt-1"
          style={{
            color: isChairman ? "#F0C505" : "#F97316",
          }}
        >
          {data.designation}
        </p>
      </div>

      {/* White body */}
      <div className="p-7 relative">
        {/* Opening quote */}
        <span className="absolute top-4 left-5 text-5xl text-orange-100 font-black leading-none select-none">
          &ldquo;
        </span>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-4 text-justify">
          {data.message}
        </p>
        <span className="text-5xl text-orange-100 font-black leading-none select-none float-right">
          &rdquo;
        </span>
      </div>
    </motion.div>
  );
};

const Chairmanmsg = () => {
  const { pageTitle, chairman, principal } = messagesData;

  return (
    <section className="section-pad bg-white overflow-hidden relative">
      {/* Doodles */}
      <img
        src="/doodles/capandbooks_1.png"
        alt=""
        className="absolute top-8 right-6 w-24 opacity-5 animate-float pointer-events-none"
        style={{ transform: "rotate(10deg)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#F97316] text-xs font-bold tracking-widest uppercase mb-3">
            Leadership Messages
          </p>
          <h2 className="text-[#0C1B33] font-black text-3xl sm:text-4xl">{pageTitle}</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MessageCard data={chairman} index={0} />
          <MessageCard data={principal} index={1} />
        </div>
      </div>
    </section>
  );
};

export default Chairmanmsg;
