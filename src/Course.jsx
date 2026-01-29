function Course({ name, image, price, rating, show }) {


  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <span>{rating} ⭐</span>
    </div>
  );
}

export default Course;
