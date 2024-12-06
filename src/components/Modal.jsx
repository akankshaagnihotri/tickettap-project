import React from "react";

const Modal = ({ setOpen, data }) => {
  console.log(data);
  return (
    <div className="container">
      <div className="modelcontainer">
        {data.map((value) => {
        return
        <div> <h1>{value.name}</h1>
        <h2>{value.age}
        </h2></div>
      
        })}
        model
        <button onClick={() => setOpen(false)}>close</button>
      </div>
    </div>
  );
};

export default Modal;
