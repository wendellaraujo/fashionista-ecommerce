import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';

import { getProduct } from '../../../redux/actions/product';
import Catalog from '../../../services/api';
import { setProducts } from '../../../redux/actions/product';

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

const Selecteditem = ({item, setProduct}) => {

   const { code_color } = useParams();

   useEffect(() => {
       setProduct(code_color);
   }, [code_color, setProduct])

   return (

      <div className="product__container--window">

{item.name !== undefined ? (
   <>
         <div className="product">
            <img src={item.image} alt="" className="product__image"/>
   <span className="product__discountBadge">{discount(item.regular_price, item.actual_price)}</span>
         </div>
         
         <div className="app__container product__container">
            <h3 className="product__title">{item.name}</h3>

            <div className="product__price">
               <span className="product__price--old">{item.regular_price === item.actual_price ? '' : item.regular_price}</span>
               <span className="product__price--new">{item.actual_price}</span>
               <span className="product__installments">em até {item.installments}</span>
            </div>

            <div className="product__sizing">
               <span>Escolha o tamanho</span>
               <ul className="product__availableSizes">

            {
               item.sizes.map(
                  sizes => {
                     if(sizes.available === true) return <li key={sizes.sku} className="product__size">{sizes.size}</li>
                     else return '';
                  }
               )
            }
               </ul>
            </div>

            <div className="product__addToBag">
               <button className="addToBag__button">Adicionar à Sacola</button>
            </div>
         </div>
         </>
) : ('Not found') }
      </div>
   )
}

const mapStateToProps = state => {
   return {
       item: state.catalog.product,
   }
}

const mapDispatchToProps = (dispatch) => {
   Catalog.catalog_data().then(data =>{
      dispatch(setProducts(data));
  });
   return {
       setProduct(code_color) {
           dispatch(getProduct(code_color));
       }
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Selecteditem);