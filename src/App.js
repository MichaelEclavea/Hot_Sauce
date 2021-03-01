import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen'
import ProductScreen from './screens/ProductScreen'
import AddProductScreen from './screens/AddProductScreen'
import Nav from './components/Nav'
import data from './data/hotsauces.json'
import './App.css'

function App() {
  const {list} = data

  useEffect(() => {
    let jsonList = JSON.stringify(list)
    localStorage.setItem('products', jsonList)
    console.log('LIST', list)
  }, [])

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/add" component={AddProductScreen} />
      </div>
    </Router>
  )
}

export default App
