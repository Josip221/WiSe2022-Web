import React from 'react';

function Button({ title, onClick }) {
  return (
    <button className="btn mx-3" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
