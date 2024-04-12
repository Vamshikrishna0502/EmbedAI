import Sidebar from "../Sidebar";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./index.css";

const NewCharacter = () => (
  <div className="new-char-container">
    <Sidebar />
    <div className="form-container">
      <Link to="/" className="back">
        <IoIosArrowBack />
      </Link>
      <form className="character-container">
        <div className="display-pic"></div>
        <div>
          <p>Character Name</p>
          <input type="text" placeholder="eg: Albert Einstein" />
        </div>
        <div>
          <p>Tag Line</p>
          <input
            type="text"
            placeholder="Add a short tagline of your character"
          />
        </div>
        <div>
          <p>Description</p>
          <input
            type="text"
            placeholder="How would your character describe themselves?"
          />
        </div>
        <div>
          <p>Greeting</p>
          <input type="text" placeholder="eg: Hello I am Robert" />
        </div>
        <div>
          <p>Visibilty</p>
          <select>
            <option>Public</option>
            <option>Private</option>
            <option>Unlisted</option>
          </select>
        </div>
        <div>
          <button type="submit">Create Character</button>
        </div>
      </form>
    </div>
  </div>
);
export default NewCharacter;
