import { useEffect, useState } from "react";
import { Program } from "../../types/types";
import RedLine from "../RedLine/RedLine";
import styles from "./ProgramList.module.scss";
import AccordionList from "./AccordionList";

type ProgramListProps = {
  programs: Program[];
};

const ProgramList = ({ programs }: ProgramListProps) => {
  const [isMedia, setIsMedia] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMedia(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.programListContainer}>
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          {isMedia ? (
            <AccordionList program={program} />
          ) : (
            <div className={styles.modules}>
              {program.specializedSubjects?.map((subject, index) => {
                const skills = subject.skills;
                const firstModuleSkills = skills.slice(0, 5);
                const secondModuleSkills = skills.slice(5, 10);

                return (
                  <div key={subject.id} className={styles.module}>
                    <div className={styles.moduleContent}>
                      <div className={styles.leftModule}>
                        <div className={""}>
                          <RedLine />
                          <h4>{index + 1}&nbsp;Модуль</h4>
                        </div>
                        <ul>
                          {firstModuleSkills.map((skill, idx) => (
                            <li key={idx} className={styles.moduleSkills}>
                              {skill.string}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {secondModuleSkills.length > 0 && (
                        <div className={styles.rightModule}>
                          <div>
                            <RedLine />
                            <h4>{index + 2}&nbsp;Модуль</h4>
                          </div>
                          <ul>
                            {secondModuleSkills.map((skill, idx) => (
                              <li key={idx}>{skill.string}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgramList;
