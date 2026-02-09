import Course from "./Course";
import html from "./assets/Html.jpg";
import css from "./assets/Css.jpg";
import js from "./assets/Js.jpg";

function CourseList(props) {
  const courses = [
    { name: "HTML", price: 199, image: html, rating: 5, show: true },
    { name: "CSS", price: 199, image: css, rating: 5, show: true },
    { name: "JavaScript", price: 99, image: js, rating: 5, show: true },
    { name: "React", price: 199, image: js, rating: 5, show: true },
  ];

  const vfmCourses = courses
    .filter(course => course.price < 200)
    .sort((a, b) => b.price - a.price);

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {vfmCourses.map(course => (
        <Course
          key={course.name}
          name={course.name}
          image={course.image}
          price={course.price}
          rating={course.rating}
          show={course.show}
        />
      ))}
    </div>
  );
}

export default CourseList;
