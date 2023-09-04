import { FILTER, ORDER, RESET, REMOVE_FAV, ADD_FAV } from "./types"

export function addFav(character){
    return {
        type: ADD_FAV,
        payload: character
    }
}

export function removeFav(id){
    return { 
        type: REMOVE_FAV,
        payload: id
    }
}

export function orderCards(order){
    return { 
        type: ORDER,
        payload: order
    }
}

export function filterCards(gender){
    return { 
        type: FILTER,
        payload: gender
    }
}

export function resetCards(gender){
    return { 
        type: RESET,
        payload: gender
    }
}

