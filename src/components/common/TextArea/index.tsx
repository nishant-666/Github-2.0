import React from "react";
import styles from "./TextArea.module.scss";

export default function TextArea({ title, name, onChange }: CommonTextArea) {
  return (
    <div>
      <textarea
        className={`textarea textarea-bordered ${styles.textArea}`}
        placeholder={title}
        cols={80}
        name={name}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
