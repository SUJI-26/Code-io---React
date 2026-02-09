import { useState } from "react";
import PropTypes from "prop-types";

function Course(props) {
  // Destructure props
  const { 
    name, 
    image, 
    price, 
    discount, 
    show = true,  // Default value if not provided
    delete: deleteCourse, // Renamed to avoid conflict with JS delete keyword
    ...restProps 
  } = props;

  // State for purchase status
  const [purchased, setPurchased] = useState(false);

  // If show is false, don't render the component
  if (!show) return null;

  // Function to handle purchase
  function buyNow() {
    console.log(name + " Purchased");
    setPurchased(true);
    console.log("Purchase status:", purchased);
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
      <button onClick={deleteCourse}>Delete</button>
      <p>{purchased ? "Already purchased" : "Get it Now"}</p>
    </div>
  );
}

// PropTypes validation
Course.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discount: PropTypes.string,
  rating: PropTypes.number,
  show: PropTypes.bool,
  delete: PropTypes.func.isRequired,
};

// Default props
Course.defaultProps = {
  image: "https://via.placeholder.com/180x120",
  discount: "",
  rating: 0,
  show: true,
};

export default Course;