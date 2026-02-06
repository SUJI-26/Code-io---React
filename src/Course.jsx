
import { useState } from "react";

function Course(props) {
  if (!show) return null;

  let Purchased = false;
  const [purchased, setPurchased] = useState(false);

  function buyNow() {
    console.log(name + " Purchased");
    setPurchased (true);
    console.log(purchased);
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        width: "180px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "120px", objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <p>{discount}</p>
      <button onClick={buyNow}>Buy Now</button>
      <button onClick={props.delete}>Delete</button>
      <p>{purchased ? "Already purchased" : "Get it Now"}</p>
    </div>
  );
}


Course.prototype = {
  name : propTypes.string,
  rating : PropTypes.number,
  show : PropTypes.bool
}








export default Course;
