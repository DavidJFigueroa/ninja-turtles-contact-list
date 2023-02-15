import React from "react";

const Contact = (props) => {
  const [visible, setVisible] = React.useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  if (visible)
    return (
      <div className="friend-item">
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
        {visible && <button onClick={removeElement}>Delete</button>}
      </div>
    );
  return null;
};

export default Contact;
