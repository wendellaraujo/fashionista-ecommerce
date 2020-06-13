import React from 'react'
import { ArrowLeft } from 'react-feather'

import './styles.css'


export default function Search() {
   return (
      <div className="search__container">
         <header>
            <div className="app__container search__header">
               <ArrowLeft className="search__return" />
               <p className="search__title">Buscar Produtos</p>
            </div>
         </header>

         <div className="search__area">
            <div className="app__container">
               <input type="text" className="search__input" placeholder="Buscar por produto" />
            </div>
         </div>
         
         <section className="search__section">
            <ul className="app__container search__results">

               <li className="results__item">
                  <div className="item__image">
                     <img src="" />
                  </div>

                  <div className="item__details">
                     <p className="details__title">product.name</p>
                  </div>

                  <div className="item__price">
                     <span className="price__total">product.price</span>
                     <span className="price__installments">product.installments</span>
                  </div>
               </li>

            </ul>
         </section>
      </div>
   )
}