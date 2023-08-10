import React from "react";
import styles from "./Input.module.scss";

export default function CommonInput({ title }: CommonInput) {
  return (
    <div>
      <input
        type="text"
        placeholder={title}
        className={`input input-bordered w-full max-w-xs ${styles.input}`}
      />
    </div>
  );
}
