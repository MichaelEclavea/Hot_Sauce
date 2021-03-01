import React from 'react'
import data from '../data/hotsauces.json'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import '../styles/productScreen.css'

const ProductScreen = () => {
  // const { list } = data

  //------- GETTING PRODUCT FROM URL PARAMS ------ //
  const url = window.location.pathname
  let name = url.substring(url.lastIndexOf('/') + 1)
  while(name.includes('%20')) {
    name = name.replace('%20', ' ')
  }
  console.log('NAME', name);

  let getProducts = localStorage.getItem('products')
  let parsedProducts = JSON.parse(getProducts)
  let product = parsedProducts.filter((each) => each.title === name);

  //------- FILTERING PRODUCT FROM DATA-FILE ------- //
  // let product = list.filter((each) => each.title === name)

  return (
    <div style={{ margin: 'auto', height: '100vh', }}>
      <section style={{textAlign: 'left', height: 'auto', paddingTop: '9vh'}}>
        <Link to="/" className="back-btn">
          Back
        </Link>
      </section>
      {product.map((sauce) => (
        <div key={sauce.id}>
          <div className="product-container">
            <div className="grid-item">
              <img
                className="product-image"
                src={sauce.imageURL}
                alt={sauce.title}
              ></img>
            </div>
            <div className="grid-item">
              <h1 className="product-title">{sauce.title}</h1>
              <h2>{sauce.subtitle}</h2>
              <hr></hr>
              <h2>
                <span
                  style={{
                    color: 'white',
                    paddingRight: '5px',
                    fontSize: '1.2em',
                  }}
                >
                  Rating: {''}
                </span>
                <Rating rating={sauce.rating} style={`productStyle`} />
              </h2>
              <hr></hr>
              <section className='description-section'>
              <h2>
                <span style={{color: 'white'}}>Description: </span>
                {sauce.description}
              </h2>
              </section>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductScreen
