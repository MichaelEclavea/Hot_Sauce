import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Nav from '../components/Nav'

const WelcomeScreen = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    let getProducts = localStorage.getItem('products')
    let parsedProducts = JSON.parse(getProducts)
    setProducts(parsedProducts)
  }, [])

  return (
    <>
      <Nav />
      <Header />
      <Cards products={products} />
    </>
  )
}

export default WelcomeScreen
