import React, {useState} from 'react'
import {useParams} from 'react-router-dom';

import './styles.css'


function discount(regular_price, actual_price){

   let r_price = parseFloat(actual_price.replace(/[^\d,-]/g, ''));
   let a_price = parseFloat(regular_price.replace(/[^\d,-]/g, ''));

      let discount = ((r_price/a_price)-1)*100;
      
      if(discount < 0){
         return discount.toFixed(0) + '%';
      }
      
      return '';
}

function mockGetProducts(productId){

   let json = require('./data.json');

   let product = json.filter(prod => prod.style === productId);

   return product[0];
}

export default function Product() {

	const { id } = useParams();

   const [Item, setItem] = useState(mockGetProducts(id));

   return (
      <div className="product__container--window">
         <div className="product">
            <img src={Item.image} alt="" className="product__image"/>
   <span className="product__discountBadge">{discount(Item.regular_price, Item.actual_price)}</span>
         </div>
         
         <div className="app__container product__container">
            <h3 className="product__title">{Item.name}</h3>

            <div className="product__price">
               <span className="product__price--old">{Item.regular_price}</span>
               <span className="product__price--new">{Item.actual_price}</span>
               <span className="product__installments">em até {Item.installments}</span>
            </div>

            <div className="product__sizing">
               <span>Escolha o tamanho</span>
               <ul className="product__availableSizes">

            {
               Item.sizes.map(
                  sizes => {
                     if(sizes.available === true) return <li key={sizes.sku} className="product__size">{sizes.size}</li>
                  }
               )
            }
               </ul>
            </div>

            <div className="product__addToBag">
               <button className="addToBag__button">Adicionar à Sacola</button>
            </div>
         </div>
      </div>
   )
}