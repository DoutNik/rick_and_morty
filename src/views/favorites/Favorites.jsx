import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { filterCards, orderCards, resetCards } from "../../redux/action";
import Cards from "../../components/cards/Cards";
import { useDispatch } from "react-redux";

export default function Favorites() {
  const [aux, setAux] = useState(false)
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites)

  function filterHandler (event) {
    dispatch(filterCards(event.target.value))
  }

  function orderHandler (event) {
    dispatch(orderCards(event.target.value))
    setAux(true)
  }

  function resetHandler(event){
    dispatch(resetCards())
  }
  
  return (
    <div>
       <select onChange={filterHandler}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
      <select onChange={orderHandler}>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>
      <button onClick={resetHandler}>Show all</button>
      <Cards characters={favorites} onClose={onclose} />
    </div>
  );
}