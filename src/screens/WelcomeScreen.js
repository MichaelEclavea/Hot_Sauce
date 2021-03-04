import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Nav from '../components/Nav'
import SearchBox from '../components/SearchBox'

const WelcomeScreen = () => {
  const [products, setProducts] = useState()
  const [filteredProducts, setFilteredProducts] = useState(null)
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    let getProducts = localStorage.getItem('products')
    let parsedProducts = JSON.parse(getProducts)
    setProducts(parsedProducts)
  }, [])

  const renderFilter = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchField.toLowerCase())
      )
    )
  }

  return (
    <>
      <Nav />
      <Header />
      {/* <SearchBox placeholder={'Search products...'} handleChange={(e) => setSearchField(e.target.value, renderFilter())}/> */}
      <Cards products={!filteredProducts ? products : filteredProducts} />
    </>
  )
}

export default WelcomeScreen
