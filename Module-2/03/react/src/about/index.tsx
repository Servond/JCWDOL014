import { useNavigate } from "react-router-dom";
import Description from "./components/description";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Ini Halaman About</h1>
      <Description />
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

export default About;
