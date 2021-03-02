import React, { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen'
import ProductScreen from './screens/ProductScreen'
import AddProductScreen from './screens/AddProductScreen'
import AnimationScreen from './screens/AnimationScreen'
import data from './data/hotsauces.json'
import './App.css'

function App() {
  const {list} = data
  const [mount, setMount] = useState(false)

  const renderMount = () => {
    let jsonList = JSON.stringify(list)
    localStorage.setItem('products', jsonList)
    setMount(!mount)
  }

  if(!mount) {
    renderMount()
  }

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/add" component={AddProductScreen} />
        <Route path="/abtest" component={AnimationScreen} />
      </div>
    </Router>
  )
}

export default App
