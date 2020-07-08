import React from 'react'

import './styles.css'


export default function Product() {
   return (
      <div className="product__container--window">
         <div className="product">
            <img src="" alt="" className="product__image"/>
            <span className="product__discountBadge">-12%</span>
         </div>
         
         <div className="app__container product__container">
            <h3 className="product__title">Bata decote Fluid</h3>

            <div className="product__price">
               <span className="product__price--old">R$ 139,90</span>
               <span className="product__price--new">R$ 119,90</span>
               <span className="product__installments">em até 3x de R$39,97</span>
            </div>

            <div className="product__sizing">
               <span>Escolha o tamanho</span>
               <ul className="product__availableSizes">
                  <li className="product__size">PP</li>
                  <li className="product__size">P</li>
                  <li className="product__size">M</li>
               </ul>
            </div>

            <div className="product__addToBag">
               <button className="addToBag__button">Adicionar à Sacola</button>
            </div>
         </div>
      </div>
   )
}