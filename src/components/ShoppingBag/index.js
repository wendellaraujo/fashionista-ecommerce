import React from 'react'
import { ArrowLeft, MinusSquare, PlusSquare } from 'react-feather'
import { connect } from 'react-redux';

import './styles.css'

import { setAddToWishList, setRemoveFromWishList, setRemoveOneFromWishList } from '../../redux/actions/product';

const ShoppingBag = ({list, total, setRemoveAll, setAddToCart, setRemoveOne}) => { 

   console.log(list);

   return (
      <div className="shoppingBag__container">
         <header>
            <div className="app__container bag__header">
               <ArrowLeft className="bag__return" onClick />
               <p className="bag__title">Sacola (0)</p>
            </div>
         </header>

         <section className="shoppingList">
            <ul className="app__container shoppingList__products">

               <li className="shoppingList__item">
                  <div className="item__image">
                     <img src="" alt="" />
                     <button className="remove">Remover item</button>
                  </div>

                  <div className="item__details">
                     <p className="details__title">product.name</p>
                     <span className="details__size">Tam.: product.size</span>
                     <div className="details__quantity">
                        <MinusSquare className="quantity__button" />
                        <span className="quantity__counter">1</span>
                        <PlusSquare className="quantity__button" />
                     </div>
                  </div>

                  <div className="item__price">
                     <span className="price__total">R$ product.price</span>
                     <span className="price__installments">product.installments</span>
                  </div>
               </li>

            </ul>
         </section>

         <footer className="bag__footer">
            <span  className="bag__subtotal">Subtotal - R$0,00</span>
         </footer>
      </div>
   )
}

const mapStateToProps = state => {
   return {
       total: state.cart.total,
       list: state.cart.list
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
       setAddToCart(product, list, size) {
           dispatch(setAddToWishList(product, list, size));
       },
       setRemoveOne(product, list, size) {
           dispatch(setRemoveOneFromWishList(product, list, size));
       },
       setRemoveAll(product, list) {
           dispatch(setRemoveFromWishList(product, list));
       }
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);