import React from 'react'
import { Link } from 'react-router-dom'

import Search from '../../Search/index'
import ShoppingBag from '../../ShoppingBag/index'

import './styles.css'


export default function Products() {
   return (
      <main className="products">

         <div className="app__container">
            <p className="products__counter">0 items</p>

            <ul className="products__grid">
               
               <li>
                  <Link to="" className="products__product">
                     <div>
                        <img className="product__image" src="" alt="" />
                        <h3 className="product__name">product.name</h3>
                     </div>
                     <div className="product__pricing">
                        <span className="product__price">product.price</span>
                     </div>
                  </Link>
               </li>

            </ul>
         </div>

         <div className="modals">
            <div className="modals__component modals__component--invisible" >
               <Search />
            </div>
            <div className="modals__component modals__component--invisible">
               <ShoppingBag />
            </div>
         </div>
      </main>
   )
}