import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";
import "./index.css";

const Sidebar = (props) => {
  return (
    <div className="side-bar-container">
      <div>
        <div className="logo-container">
          <h3>Character.ai</h3>
          <MdKeyboardDoubleArrowLeft />
        </div>
        <div className="button-container">
          <Link to="/new">
            <button className="button" type="button">
              <FaPlus className="font" /> Create
            </button>
          </Link>
          <div>
            <button className="button" type="button">
              <FaCompass />
              Discover
            </button>
          </div>
        </div>
        <h3>Chats</h3>
      </div>
      <div>
        <hr />
        <div className="button-container">
          <button type="button">Try c.ai</button>
        </div>
        <p>Anil Matcha</p>
      </div>
    </div>
  );
};

export default Sidebar;
