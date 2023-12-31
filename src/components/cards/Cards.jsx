import Card from '../card/Card';

export default function Cards({characters, onClose}) {
   return (
   <div>
      {characters.map((character) =>(
         <Card
         id= {character.id}
         key= {character.id}
         name = {character.name}
         status = {character.status}
         species = {character.species}
         gender = {character.gender}
         origin = {{name : character.origin.name}}
         image = {character.image} 
         onClose = {onClose}
         /> 
      ))}
   </div>
)}
