import React from 'react'
import { Link } from 'react-router-dom'

import Search from '../../Search/index'
import ShoppingBag from '../../ShoppingBag/index'

import { connect } from 'react-redux';

import { setProducts } from '../../../redux/actions/product';

import Catalog from '../../../services/api';


import './styles.css'

const Products = ({ products }) => {

   function hideModal() {
      document.querySelector('.modals__shoppingBag').classList.add('modals__component--invisible')
      document.querySelector('.modals__search').classList.add('modals__component--invisible')
		document.querySelector('.modals').classList.add('modals--invisible')
   }

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

         <div className="modals modals--invisible">
            <div className="modals__component modals__search modals__component--invisible" >
               <Search className="component__search" func={hideModal} />
            </div>
            <div className="modals__component modals__shoppingBag modals__component--invisible">
               <ShoppingBag className="component__shoppingBag" func={hideModal} />
            </div>
         </div>
      </main>
   )
}


const mapStateToProps = state => {
   return {
       products: state.catalog.products
   }
}

const mapDispatchToProps = (dispatch) => {
   Catalog.catalog_data().then(data =>{
       dispatch(setProducts(data));
   });
   return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
