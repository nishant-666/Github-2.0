import React from "react";
import { Checkbox } from "antd";
import styles from "./Checkbox.module.scss";

const CommonCheckbox: React.FC<CommonCheckboxType> = ({ title, getInputs }) => {
  const onChange = (e: any) => {
    getInputs(e);
  };

  return (
    <div className={styles.checkboxContainer}>
      <Checkbox
        name="auto_init"
        className={styles.checkboxOption}
        onChange={onChange}
      >
        {title}
      </Checkbox>
    </div>
  );
};

export default CommonCheckbox;
