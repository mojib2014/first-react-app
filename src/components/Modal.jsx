import React from 'react';
import './modal.css';

export default function Modal(props) {
  return (
    <div className="modal-root">
      <div className="container-md m-auto w-50 position-relative p-5 bg-info">
        <button onClick={() => props.onCloseModal(false)}>X</button>
        {props.children}
      </div>
    </div>
  );
}
