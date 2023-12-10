import { useParams } from "react-router-dom";

import Modal from "../components/modal";

export default function ParamModal() {
  const params = useParams();

  return (
    <Modal>
      <h1>{params.id}</h1>
    </Modal>
  );
}
