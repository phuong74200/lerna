/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ChevronLeft from "./icon-x";

export default function Modal({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  useEffect(() => {
    const back = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", back);

    return () => {
      window.removeEventListener("keydown", back);
    };
  }, [navigate]);

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backdropFilter: "blur(4px)",
        background: "rgba(0,0,0,0.5)",
      }}
      onClick={() => navigate(-1)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          maxHeight: "calc(100vh - 8rem)",
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "translateX(-100%)",
            width: "2rem",
            height: "2rem",
            left: "-1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
          title="close modal"
        >
          <ChevronLeft />
        </div>
        <div
          style={{
            flex: 1,
            overflow: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
