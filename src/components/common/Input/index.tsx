import React from "react";
import styles from "./Input.module.scss";

export default function CommonInput({ title, name, onChange }: CommonInput) {
  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={title}
        onChange={onChange}
        className={`input input-bordered w-full max-w-xs ${styles.input}`}
      />
    </div>
  );
}
