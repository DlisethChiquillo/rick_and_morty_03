import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

const Nav = (props) => {
    const { onSearch } = props
    return (
        <div className={style.container}>
            <SearchBar onSearch= {onSearch}/>
            <Link to="/home"  className={style.link}> Home </Link> 
            <Link to="/about" className={style.link}> About </Link> 
            <Link to='/favorites' className={style.link}>Favorites</Link>

        </div>
    )
}

export default Nav