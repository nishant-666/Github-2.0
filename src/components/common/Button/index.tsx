import React from "react";

export default function CommonButton({ title, onClick }: CommonButton) {
  return (
    <div>
      <button onClick={onClick} className="btn btn-accent btn-active">
        {title}
      </button>
    </div>
  );
}
