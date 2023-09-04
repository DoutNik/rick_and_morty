import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function Detail(){
    const [character, setCharacter] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

  return (
      <div>
         {character.name && <h2>Nombre: {character.name}</h2>}
         {character.status && <p>Estado: {character.status}</p>}
         {character.species && <p>Especie: {character.species}</p>}
         {character.gender && <p>Género: {character.gender}</p>}
         {character.origin && character.origin.name && (<p>Origen: {character.origin.name}</p>)}
         {character.image && (<img src={character.image} alt={character.name} />)}
      </div>
   );
}