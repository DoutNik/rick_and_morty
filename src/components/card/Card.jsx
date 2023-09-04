import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { NavLink } from "react-router-dom";


export default function Card(props) {
  const { id, name, status, origin, species, gender, image, onClose } = props;
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites, id]);

  const handleFavorite = (character) => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(character.id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  };

  return (
    <div>
      {isFav ? (
        <button onClick={() => handleFavorite(props)}>❤️</button>
      ) : (
        <button onClick={() => handleFavorite(props)}>🤍</button>
      )}
       {onClose && <button onClick={() => onClose(id)}>X</button>}
      <NavLink to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      </NavLink>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin.name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
