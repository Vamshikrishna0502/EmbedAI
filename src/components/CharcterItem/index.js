import { Link } from "react-router-dom";

const CharacterItem = (props) => {
  const { eachItem } = props;
  return (
    <Link to={`/${eachItem.name}`}>
      <p>{eachItem.name}</p>
    </Link>
  );
};

export default CharacterItem;
