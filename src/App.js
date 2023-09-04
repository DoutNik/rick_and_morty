import React, { useState, useEffect } from 'react';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css';
import Detail from './views/detail/Detail.jsx';
import Error from './views/error/Error.jsx'
import About from './views/about/About.jsx'
import Form from './form/Form.jsx';
import Favorites from './views/favorites/Favorites.jsx';




export default function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();
   const EMAIL = 'carlosklema@hotmail.com'
   const PASSWORD = '021354'

   function login(userData){
      if (userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true)
         navigate('/home')
      }
   }

   function logout(){
      setAccess(false)
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
 
function onSearch(id) {
  if (!characters.find((character) => character.id === Number(id))) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((characters) => [...characters, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  } else {
    alert("Este personaje ya ha sido agregado");
    return;
  }
}

   function onClose(id){
      const filtered = characters.filter((character)=>{
         return character.id !== parseInt(id)
      })
      setCharacters(filtered)
   }

   function randomHandler() {
      let memoria = [];
  
      let randomId = (Math.random() * 826).toFixed();
  
      randomId = Number(randomId);
  
      if (!memoria.includes(randomId)) {
        memoria.push(randomId);
        onSearch(randomId);
      } else {
        alert("Ese personaje ya fue agregado");
        return;
      }
    }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} random={randomHandler} />}
         
         <Routes>
         <Route path= '/' element={ <Form login={login}/> }/>
         <Route path= '/home' element={<Cards characters={characters} onClose={onClose} />}/>
         <Route path= '/About' element={ <About/> }/>
         <Route path= '/Detail/:id' element={ <Detail/>}/>
         <Route path= '/favorites' element={ <Favorites />}/>
         <Route path= '/error' element= {<Error/>}/>
         </Routes>
         
         
      </div>
   );
}


