import Course from "./Course";
import html from "./assets/Html.jpg";
import css from "./assets/Css.jpg";
import js from "./assets/Js.jpg";
import { useEffect, useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, name: "HTML", price: 199, image: html, rating: 5, discount: "20% off", show: true },
    { id: 2, name: "CSS", price: 199, image: css, rating: 5, discount: "25% off", show: true },
    { id: 3, name: "JavaScript", price: 99, image: js, rating: 5, discount: "30% off", show: true },
    { id: 4, name: "React", price: 199, image: js, rating: 5, discount: "15% off", show: true },
  ]);

  useEffect(() => {
    console.log('useEffect Called');

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log("API Response:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        // Optional: You could use this data to update courses
        // For example, if you want to add fetched posts as courses:
        // const newCourses = data.slice(0, 3).map((post, index) => ({
        //   id: courses.length + index + 1,
        //   name: post.title.substring(0, 20),
        //   price: 99 + (index * 50),
        //   image: js, // default image
        //   rating: 4,
        //   discount: "10% off",
        //   show: true
        // }));
        // setCourses(prev => [...prev, ...newCourses]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

  }, []);

  function handleDelete(id) {
    // Fixed: Use !== instead of != for strict comparison
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
    console.log(`Deleted course with id: ${id}`);
  }

  // Filter courses with price less than 200 and sort by price (highest to lowest)
  const vfmCourses = courses
    .filter(course => course.price < 200)
    .sort((a, b) => b.price - a.price);

  // Alternative: Sort by price (lowest to highest) - more common for VFM
  // .sort((a, b) => a.price - b.price);

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px",
      justifyContent: "center"
    }}>
      {vfmCourses.length > 0 ? (
        vfmCourses.map(course => (
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