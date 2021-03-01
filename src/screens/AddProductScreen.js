import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/addProduct.css'
const AddProductScreen = () => {
  const [showContainer, setShowContainer] = useState('show-container')
  const [hideContainer, setHideContainer] = useState('hide-container')
  const [productHeaders, setProductHeaders] = useState({
    title: 'Name',
    subtitle: 'Subtitle',
    imageURL: 'Image URL',
    rating: 'Spicy Rating',
    description: 'Description'
  })
    const [product, setProduct] = useState({
      id: 8,
      title: '',
      subtitle: '',
      description: '',
      imageURL: '',
      rating: 0,
    })
  
    const submitHandler = (e) => {
      e.preventDefault()
      let checkInputs = true;
      if(!product.title){
        setProductHeaders({...productHeaders, title: 'Name 🔥'})
        checkInputs = false; 
      }
      if(!product.subtitle){
        setProductHeaders({...productHeaders, subtitle: 'Subtitle 🔥'})
        checkInputs = false; 
      }
      if(!product.imageURL){
        setProductHeaders({...productHeaders, imageURL: 'Image URL 🔥'})
        checkInputs = false; 
      }
      if(!product.rating){
        setProductHeaders({...productHeaders, rating: 'Spicy Rating 🔥'})
        checkInputs = false; 
      }
      if(!product.description){
        setProductHeaders({...productHeaders, description: 'Description 🔥'})
        checkInputs = false; 
      }
      if(checkInputs === false){
        alert('Please fix errors with 🔥')
      } else {
        let getProducts = localStorage.getItem('products')
        let parsedProducts = JSON.parse(getProducts)
        let newList = parsedProducts.concat(product)
        let jsonList = JSON.stringify(newList)
        localStorage.setItem('products', jsonList)
        setShowContainer('hide-container')
        setHideContainer('show-container')
      }
    }
  
    const handleInput = (e) => {
        e.preventDefault()
        const { name } = e.target;
        if(name === 'title') {
            setProduct({ ...product, title: e.target.value })
        }
        if(name === 'subtitle') {
            setProduct({ ...product, subtitle: e.target.value })
        }
        if(name === 'imageURL'){
            setProduct({ ...product, imageURL: e.target.value })
        }
        if(name === 'description') {
          setProduct({ ...product, description: e.target.value })
        }
        if(name === 'rating') {
          setProduct({ ...product, rating: e.target.value })
        }
    }
  
    return (
      <>
      <section style={{textAlign: 'left', height: 'auto', paddingTop: '4vh'}}>
        <Link to="/" className="back-btn">
          Back
        </Link>
      </section>
        <div className={showContainer}>
          <h1 className="add-title">Add Your HotSauce!</h1>
          <form onSubmit={submitHandler} id='myForm'>

          <div className='first-grid'>
            <section>
            <p>{productHeaders.title}</p>
            <input type="text" placeholder='Enter name...' name='title' value={product.title} onChange={handleInput}></input>
            </section>

            <section>
            <p>{productHeaders.subtitle}</p>
            <input type="text" placeholder='Enter brief subtitle...' name='subtitle' value={product.subtitle} onChange={handleInput}></input>
            </section>

            <section>
            <p>{productHeaders.imageURL}</p>
            <input type="text" placeholder='Enter image url...' name='imageURL' value={product.imageURL} onChange={handleInput}></input>
            </section>

            <section>
            <p>{productHeaders.rating}</p>
            <input type="number" placeholder='Enter spice rating...' name='rating' min="1" max="5" value={product.rating} onChange={handleInput}></input>
            </section>
            </div>
            <section>
            <p>{productHeaders.description}</p>
                <textarea
                  placeholder="Type Description..."
                  value={product.description}
                  name='description'
                  onChange={handleInput}
                />
            </section>
            <br></br>
            <button type="submit" id='submit-btn'> Add </button>
          </form>
        </div>
        <div className={hideContainer}>
        <h1  className="product-title">Your HotSauce has been Added! 🤤</h1>
        </div>
      </>
    )
  }

export default AddProductScreen