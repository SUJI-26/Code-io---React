import Course from "./Course";
import html from "./assets/Html.jpg";
import css from "./assets/Css.jpg";
import js from "./assets/Js.jpg";

function App() {
  return (
    <>
      <Course name="HTML" price={199} image={html} />
      <Course name="CSS" price={199} image={css} />
      <Course image={js} />
    </>
  );
}

export default App;
