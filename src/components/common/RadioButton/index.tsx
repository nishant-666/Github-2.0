import React, { useState } from "react";
import { Radio, Space } from "antd";
import styles from "./RadioButton.module.scss";

const CommonRadio: React.FC<CommonRadioType> = ({ radioOption, getInputs }) => {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    setValue(e.target.value);
    getInputs(e);
  };

  return (
    <div className={styles.radioContainer}>
      <Radio.Group name="private" onChange={onChange} value={value}>
        <Space direction="vertical">
          {radioOption.map((option: { title: ""; value: 0; icon: "" }) => (
            <Radio className={styles.radioOption} value={option.value}>
              <div className={styles.optionsContainer}>
                <div>{option.icon}</div>
                <div>{option.title}</div>
              </div>
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default CommonRadio;
