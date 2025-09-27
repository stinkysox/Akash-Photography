import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./StatsCounter.css";

const stats = [
  { count: 200, label: "Wedding Shoots" },
  { count: 200, label: "PreWedding Shoots" },
  { count: 100, label: "Engagement Shoots" },
  {
    count: 80,
    label: "Baby Shoots",
  },
  {
    count: 80,
    label: "Maternity Shoots",
  },
  {
    count: 8,
    label: "Photography Experience (Years)",
  },
  {
    count: 300,
    label: "Happy Clients",
  },
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="stats-wrapper" ref={ref}>
      {stats.map((item, index) => (
        <motion.div
          className="stat-item"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h2>{inView && <CountUp end={item.count} duration={2} />}+</h2>
          <p>{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
