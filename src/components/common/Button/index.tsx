import React from "react";
import styles from "./Button.module.scss";

export default function CommonButton({ title, onClick }: CommonButton) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`btn btn-accent btn-active ${styles.button}`}
      >
        {title}
      </button>
    </div>
  );
}
