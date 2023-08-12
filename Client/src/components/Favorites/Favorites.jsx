import { connect } from "react-redux"
import Card from "../Cards/Cards"
import style from './Favorites.module.css'
import { useDispatch } from "react-redux"
import { order, filter } from "../../redux/actions"


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch()


    const handleOrder = (evento)=> {
        dispatch(order(evento.target.value))
    }

    const handleFilter = (evento)=> {
        dispatch(filter(evento.target.value))
    }

    return (
        <>
        <h2>My Favorites</h2>
        <div className={style.container}>
             <div>
                <select onChange={handleOrder} className={style.select} >
                    <option value="Ascendente" > Ascendente</option>
                    <option value="Descendente" >Descendente</option>
                </select>

                <select onChange={handleFilter} className={style.select} >
                    <option value="All" >All</option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                    <option value="Genderless" >Genderless</option>
                    <option value="unknown" >unknown</option>
                </select>
            
            </div>
        </div>

       

        {
            myFavorites.length === 0 ? (
                <h3 className={style.title}>Empty favorites list! </h3>
            ) :
            (
                <Card characters = { myFavorites }/>
            )
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }

}

export default connect(mapStateToProps, null)(Favorites)
