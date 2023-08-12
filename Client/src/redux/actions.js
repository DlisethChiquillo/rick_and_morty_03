import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from 'axios'


export const addFavorite = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
        const { data }  = await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAVORITES,
               payload: data,
            }); 
      };
   } 
   catch (error) {
      return { error: error.message}
   }
 };




export const deleteFavorite = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const { data } = await axios.delete(endpoint)
            return dispatch({
               type: DELETE_FAVORITE,
               payload: data,
         })
      };
   } 
   catch (error) {
      return { error: error.message}
   }

 };

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const order = (id)=> {
    return {
        type: ORDER,
        payload: id
    }
}