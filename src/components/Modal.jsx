import React from 'react';
import './modal.css';

export default function Modal(props) {
  return (
    <div className="modal-root">
      <div className="container">{props.children}</div>
      <button onClick={() => props.onCloseModal(false)}>X</button>
    </div>
  );
}
