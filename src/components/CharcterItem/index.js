import { Link } from "react-router-dom";

const CharacterItem = (props) => {
  const { eachItem } = props;
  console.log(eachItem);
  return (
    <Link to={`/${eachItem.name}`}>
      <p>{eachItem.name}</p>
    </Link>
  );
};

export default CharacterItem;
