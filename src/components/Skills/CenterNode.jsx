import { motion } from "framer-motion";

export default function CenterNode({ activated, onActivate }) {
  return (
    <div className="center-node-wrapper">
      <motion.div
        className={`center-node ${activated ? "active" : ""}`}
        onClick={onActivate}
        whileHover={!activated ? { scale: 1.08 } : {}}
        whileTap={{ scale: 0.95 }}
      >
        <div className="center-title">Somya</div>
        <div className="center-sub">System Core</div>
      </motion.div>
    </div>
  );
}
