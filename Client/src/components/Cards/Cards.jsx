import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={style.container}>
         {
            characters.length === 0 ? (
               <h3>Welcome to the Rick and Morty application, please search for a character you want.</h3>
            ) :
            characters.map((character)=> {
               return (
                   <Card 
                  key={character.id}
                  id= {character.id}
                  name = {character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={onClose}
               />
               )
              
            })
         }
      </div>
   )
}
