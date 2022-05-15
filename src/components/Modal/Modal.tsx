import { useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function Modal({ onClose = () => {}, children }: any) {
  const ref: any = useRef();
  useOnClickOutside(ref, () => onClose());
  return (
    <div className="modal-container">
      <div className="modal" ref={ref}>
        <i className="fas fa-times modal-close" onClick={() => onClose()}></i>
        {children}
      </div>
    </div>
  );
}

export default Modal;
