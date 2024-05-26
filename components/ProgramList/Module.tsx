import { motion } from "framer-motion";
import styles from "./ProgramList.module.scss";
import MinusIcon from "../MinusIcon/MinusIcon";
import PlusIcon from "../PlusIcon/PlusIcon";

type Skill = {
  string: string;
};

const Module = ({
  skills,
  index,
  expandedIndex,
  handleToggle,
}: {
  skills: Skill[];
  index: number;
  expandedIndex: number | null;
  handleToggle: (index: number) => void;
}) => {
  const isExpanded = expandedIndex === index;

  return (
    <motion.div
      className={`${styles.module} ${isExpanded ? styles.expanded : ""}`}
      initial={false}
      animate={{ height: isExpanded ? "auto" : "60px" }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.moduleHeader} onClick={() => handleToggle(index)}>
        {isExpanded ? <MinusIcon /> : <PlusIcon />}

        <h4>{index + 1} Модуль</h4>
      </div>
      {isExpanded && (
        <motion.div
          className={styles.moduleContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill.string}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Module;
