import React from 'react';
import SearchBar from '../searchBar/SearchBar.jsx';
import { NavLink, useNavigate } from 'react-router-dom'


export default function Nav({onSearch, logout, random}){
   useNavigate();

    return(
        <div>
            <div>
                <button><NavLink to='/About'>About</NavLink></button>
                <button><NavLink to='/home'>Home</NavLink></button>
                <button><NavLink to='/favorites'>Favorites</NavLink></button>
                <button onClick={logout}>Log out</button>
            </div>
            <div>
                <SearchBar onSearch={onSearch} />
                <button onClick={random}>ADD RANDOM</button>
            </div>
        </div>
)}