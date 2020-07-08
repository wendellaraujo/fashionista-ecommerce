import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import slugfy from '../../../utils/slugfy'
import ProductImage from './ProductImage'
import { connect } from 'react-redux';

import { setProducts } from '../../../redux/actions/product';

import Catalog from '../../../services/api';


import './products.css'

const Products = ({
   className,
   name,
   style,
   discount_percentage,
   on_sale,
   image,
   regular_price,
   actual_price,
 }) => (
   <div className={className} key={style}>
     <Link to={`/produto/${slugfy(name)}`}>
       <ProductImage
         image={image}
         onSale={on_sale}
         discount={discount_percentage}
         altAttr={name}
       />
 
       <h3 className="product__name">{name}</h3>
       <div className="product__pricing">
         {on_sale
           && <span className="product__price product__price--from">{regular_price}</span>
         }
         <span className="product__price product__price--to">{actual_price}</span>
       </div>
     </Link>
   </div>
 );

export default Products;
