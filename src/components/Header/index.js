import React from 'react'
import { Search, ShoppingBag }  from 'react-feather'

import './styles.css'

export default function Header() {

	function handleVisibility(e) {
		const search = document.querySelector('.header__search')
		const shoppingBag = document.querySelector('.header__shoppingBag > svg')
		
		if (e.target === search) {
			document.querySelector('.modals__search').classList.remove('modals__component--invisible')
			document.querySelector('.modals').classList.remove('modals--invisible')
		} else if (e.target === shoppingBag) {
			document.querySelector('.modals__shoppingBag').classList.remove('modals__component--invisible')
			document.querySelector('.modals').classList.remove('modals--invisible')
		}
	}


	return (
		<header>
			<div className="app__container header__container">
				<a href="#" className="header__logo">Fashionista</a>
				<Search onClick={handleVisibility} className="header__search" />
				<span className="header__shoppingBag">
						<ShoppingBag onClick={handleVisibility} />
						<span className="header__counter">0</span>
				</span>
			</div>
		</header>
	)

}