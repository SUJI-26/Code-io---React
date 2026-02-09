import Course from "./Course";
import html from "./assets/Html.jpg";
import css from "./assets/Css.jpg";
import js from "./assets/Js.jpg";
import { useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, name: "HTML", price: 199, image: html, rating: 5, discount: "20% off", show: true },
    { id: 2, name: "CSS", price: 199, image: css, rating: 5, discount: "25% off", show: true },
    { id: 3, name: "JavaScript", price: 99, image: js, rating: 5, discount: "30% off", show: true },
    { id: 4, name: "React", price: 199, image: js, rating: 5, discount: "15% off", show: true },
  ]);

  function handleDelete(id) {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
  }

  const vfmCourses = courses
    .filter(course => course.price < 200)
    .sort((a, b) => b.price - a.price); // Sorting by highest price first

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {vfmCourses.map(course => (
        <Course
          key={course.id}
          name={course.name}
          image={course.image}
          price={course.price}
          discount={course.discount}
          rating={course.rating}
          show={course.show}
          delete={() => handleDelete(course.id)} // Passing delete function
        />
      ))}
    </div>
  );
}

export default CourseList;