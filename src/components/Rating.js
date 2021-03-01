import React from 'react'
import '../styles/rating.css'

const Rating = ({ rating, style }) => {
 const styleName = style; 
    return(
        <span>
            <img alt='' className={styleName} src={rating >= 1 ? '../images/pepper.png' : rating >= 0.5 ? '../images/half-pepper.png' : ''}></img>
            <img alt='' className={styleName} src={rating >= 2 ? '../images/pepper.png' : rating >= 1.5 ? '../images/half-pepper.png' : ''}></img>
            <img alt='' className={styleName} src={rating >= 3 ? '../images/pepper.png' : rating >= 2.5 ? '../images/half-pepper.png' : ''}></img>
            <img alt='' className={styleName} src={rating >= 4 ? '../images/pepper.png' : rating >= 3.5 ? '../images/half-pepper.png' : ''}></img>
            <img alt='' className={styleName} src={rating >= 5 ? '../images/pepper.png' : rating >= 4.5 ? '../images/half-pepper.png' : ''}></img>
        </span>
    )
}



export default Rating;