import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Loader from './Loader'
import { Image } from 'react-bootstrap'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol } from 'mdbreact';
import '../styles/cards.css'

const Cards = ({ products }) => {
  const [productList, setProductList] = useState(null);
  const [emptyTitle, SetEmptyTitle] = useState('');

  useEffect(() => {
      if(products) {
       setProductList(products)
      }
  }, [products])

  const deleteHandler = (e) => {
    const { name } = e.target;
    let getProducts = localStorage.getItem('products')
    let parsedProducts = JSON.parse(getProducts)
    let newList = parsedProducts.filter(each => each.title !== name);
    setProductList(newList)
    localStorage.setItem('products', JSON.stringify(newList));

    if(productList.length === 1){
      SetEmptyTitle(<h1 className='temp-title'>is empty! 😩 </h1>);
    }
  }
    return (
      <>
        {emptyTitle}
        <div id="card-container">
      { !productList ? <Loader/> : 
        productList.map((each) => (
          <MDBCol key={each.id + 1} style={{ maxWidth: "298px", height: '411px', marginBottom: '1rem'}}>
            <MDBCard className='card'>
            <MDBCardBody className='image-background'>
            <Link to={`/product/${each.title}`} name={each.title}>
             <Image className='card-image' src={each.imageURL} alt={each.title}/>
            </Link>
            </MDBCardBody>
             <MDBCardBody className='card-text-body'>
             <Link to={`/product/${each.title}`} className='card-title' name={each.title}>{each.title}</Link>
             <MDBCardText style={{fontSize: '1.4rem', fontWeight: '600'}}>Rating: 
             {<Rating rating={each.rating} style={`cardStyle`}/>} 
              </MDBCardText>
              <MDBBtn onClick={deleteHandler} name={each.title} className='delete-btn'>❌ Delete from list...</MDBBtn>
             </MDBCardBody>
            </MDBCard>
          </MDBCol>
      ))}
      </div>
      </>
    )
}


export default Cards