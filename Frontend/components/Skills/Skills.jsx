import "./Skills.scss";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div id="skills">
        <h1>Skills</h1>
        <Link to={"/tools"}>Tools</Link>
    </div>
  )
}

export default Skills