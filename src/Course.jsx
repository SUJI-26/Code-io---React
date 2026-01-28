function Course({ name = "Code IO Course", price = 199, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={name} />}
      <h3>{name}</h3>
      <p>${price}</p>
      <h2></h2>
    </div>
  );
}

export default Course;
