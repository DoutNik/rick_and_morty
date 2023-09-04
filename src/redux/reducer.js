import { FILTER, ORDER, RESET, ADD_FAV, REMOVE_FAV } from "./types"

const initialState = {allCharacters: [], favorites: []}

export default function reducer(state = initialState, action){
    switch (action.type){
        case ADD_FAV:
            return{
                ...state,
                favorites: [...state.favorites, action.payload],
                allCharacters: [...state.favorites, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(character=> character.id !== parseInt(action.payload)),
                allCharacters: state.favorites.filter(character=> character.id !== parseInt(action.payload))    
            }

        case FILTER:
            return {
                ...state,
                favorites: state.allCharacters.filter((character) => character.gender === action.payload)
            }

        case ORDER:
            let sorted
            if(action.payload === "Ascendente"){
                sorted = state.favorites.sort((a,b)=> a.id > b.id ? 1 : -1)
            }else{
                sorted = state.favorites.sort((a,b)=> b.id > a.id ? 1 : -1)
            }
            return {
                ...state,
                favorites: [...sorted]
            }

        case RESET:
            return{
                ...state,
                favorites: state.allCharacters
            }

        default:
            return state
    }
}