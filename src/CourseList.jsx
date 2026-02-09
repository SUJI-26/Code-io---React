import Course from "./Course";
import html from "./assets/Html.jpg";
import css from "./assets/Css.jpg";
import js from "./assets/Js.jpg";
import { useEffect, useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/courses")
        .then((response) => {
          if (!response.ok) {
            throw Error("Could't retrive data");
          }
          return response.json();
        })
        .then((data) => setCourses(data))
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }), 1000;
  }, []);

  function handleDelete(id) {
    // Fixed: Use !== instead of != for strict comparison
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
    console.log(`Deleted course with id: ${id}`);
  }

  // Filter courses with price less than 200 and sort by price (highest to lowest)
  const vfmCourses = courses
    .filter((course) => course.price < 200)
    .sort((a, b) => b.price - a.price);


  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      {vfmCourses.length > 0 ? (
        vfmCourses.map((course) => (
          <Course
            key={course.id} // Use id instead of name for key
            id={course.id} // Pass id to Course component
            name={course.name}
            image={course.image}
            price={course.price}
            rating={course.rating}
            discount={course.discount}
            show={course.show}
            delete={() => handleDelete(course.id)} // Pass function with course.id
          />
        ))
      ) : (
        <p>No courses available. Add some courses!</p>
      )}
    </div>
  );
}

export default CourseList;


