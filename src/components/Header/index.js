import React from 'react'
import { Search, ShoppingBag }  from 'react-feather'

import './styles.css'

export default function Header() {
   return (
      <header>
         <div className="app__container header__container">
            <a href="#" className="header__logo">Fashionista</a>
            <Search className="header__search" />
            <button className="header__shoppingBag">
               <ShoppingBag />
               <span className="header__counter">0</span>
            </button>
         </div>
      </header>
   )
}