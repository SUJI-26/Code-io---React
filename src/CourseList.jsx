import Course from "./Course";
import html from "./assets/Html.jpg";
import css from "./assets/Css.jpg";
import js from "./assets/Js.jpg";
import { useEffect, useState } from "react";

function CourseList() {
  const [courses , setCourses] = useState([
    { name: "HTML", price: 199, image: html, rating: 5, show: true },
    { name: "CSS", price: 199, image: css, rating: 5, show: true },
    { name: "JavaScript", price: 99, image: js, rating: 5, show: true },
    { name: "React", price: 199, image: js, rating: 5, show: true },
  ]);

  useEffect (()=>{
    console.log('use Effect Called');

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response);
     return response.json()
    
    }).then(data => console.log(data))


  },[]);

  function handleDelete(id){
    const newCourses = courses.filter((course) => course.id != id)
    setCourses(newCourses);

  }

  const vfmCourses = courses
    .filter(course => course.price < 200)
    .sort((a, b) => b.price - a.price);

  return (
    <>
      {vfmCourses.map(course => (
        <Course
          key={course.name}
          name={course.name}
          image={course.image}
          price={course.price}
          rating={course.rating}
          show={course.show}   
          delete={handleDelete} 
        />
      ))}
    </>
  );
}

export default CourseList;
