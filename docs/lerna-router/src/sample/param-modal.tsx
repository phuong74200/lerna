import { useParams } from "react-router-dom";

export default function ParamModal() {
  const params = useParams();

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
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          maxHeight: "calc(100vh - 2rem)",
          overflow: "auto",
        }}
      >
        <h1>{params.id}</h1>
      </div>
    </div>
  );
}
