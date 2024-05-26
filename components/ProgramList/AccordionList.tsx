import { Key, useState } from "react";
import styles from "./ProgramList.module.scss";
import Module from "./Module";

const AccordionList = ({ program }: any) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className={styles.modules}>
      {program.specializedSubjects?.map(
        (
          subject: { skills: any; id: Key | null | undefined },
          index: number,
        ) => {
          const skills = subject.skills;
          const firstModuleSkills = skills.slice(0, 5);
          const secondModuleSkills = skills.slice(5, 10);

          return (
            <div key={subject.id}>
              <Module
                skills={firstModuleSkills}
                index={index}
                expandedIndex={expandedIndex}
                handleToggle={handleToggle}
              />
              {secondModuleSkills.length > 0 && (
                <Module
                  skills={secondModuleSkills}
                  index={index + 1}
                  expandedIndex={expandedIndex}
                  handleToggle={handleToggle}
                />
              )}
            </div>
          );
        },
      )}
    </div>
  );
};

export default AccordionList;
