import React from "react";

function Modal({ user, setUserIndex }) {
  return (
    <div className="modal">
      <div className="image-container">
        <a
          href="#"
          className="modal-close"
          onClick={() => {
            setUserIndex(-1);
          }}
        >
          &times;
        </a>
        <img src={user.picture.large} alt={user.name} />
        <div className="content-container">
          <h3>
            {user.name.title}. {user.name.first} {user.name.last}
          </h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Cell: {user.cell}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
