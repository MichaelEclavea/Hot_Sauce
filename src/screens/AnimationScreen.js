import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Nav from '../components/Nav'
import Animation from '../components/Animation'
import '../index.css'

const AnimationScreen = (props) => {
  console.log(props);
  const [products, setProducts] = useState()
  const [showScreen, setShowScreen] = useState('show')
  const [hideScreen, setHideScreen] = useState('hide')

  useEffect(() => {
    let getProducts = localStorage.getItem('products')
    let parsedProducts = JSON.parse(getProducts)
    setProducts(parsedProducts)

    setTimeout(() => {
      setShowScreen('hide')
      setHideScreen('show')
    }, 5000)
  }, [setShowScreen, setHideScreen])

  return (
    <>
    <div className={showScreen}>
    <Animation/>
    </div>
    <div className={hideScreen}>
      <Nav />
      <Header />
      <Cards products={products} />
    </div>
    </>
  )
}

export default AnimationScreen
