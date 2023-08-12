import style from "./Card.module.css"
import { Link, useLocation } from 'react-router-dom'
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useEffect, useState } from "react";

function Card({ id, name, species, gender, image, onClose, deleteFavorite, addFavorite, myFavorites }) {
   const [ isFav, setIsFav ] = useState(false)

   const { pathname } = useLocation()

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }
      else {
         setIsFav(true)
         addFavorite({ id, name, species, gender, image })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])

   return (
      <div className={ style.container }>

         {
            isFav ? (
               <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
            ) 
            : 
            (
               <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
            )
         }

         {
            !pathname.includes('/favorites') &&
               <button 
                  onClick={()=> {onClose(id)}} 
                  className={style.btn}>
                     X
               </button>
         }
         

         <Link to={`/detail/${id}`}>
            <h2> {name} </h2>
         </Link>
         

         <div className={style.containerTitle}>
            <h4> {id} </h4>
            <h2> {species}</h2>
            <h2> {gender}</h2>
         </div>
         <img  src={image} alt={name} className={style.image} />
      </div>
   );
}

const mapStateToProps = (state)=> {
   return {
      myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      deleteFavorite: (id)=> dispatch((deleteFavorite(id)))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)
