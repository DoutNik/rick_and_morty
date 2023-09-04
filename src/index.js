import React from 'react'
import App from './App'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = { store }>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
)
