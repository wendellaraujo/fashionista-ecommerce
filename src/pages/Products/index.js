import React, { useEffect, useState } from 'react'
import Product from '../../components/pages/Products'
import './products.css'

const Products = () => {

   function hideModal() {
      document.querySelector('.modals__shoppingBag').classList.add('modals__component--invisible')
      document.querySelector('.modals__search').classList.add('modals__component--invisible')
		document.querySelector('.modals').classList.add('modals--invisible')
   }

   const [products, setProducts] = useState([])
   useEffect(() => {
      async function getProducts(){
         fetch("https://undefined.netlify.app/api/catalog")
         .then(Response => Response.json())
         .then(json => setProducts(json))
         .catch(e => {
            console.log(e)
         })
      }
      getProducts()
   })

   return (
      <section className="products">
         <div className="app__container">
            <p className="products__counter">0 items</p>

            <div className="products__grid">
               {products.map( (product, i) =>
                  <Product 
                     className="products__box"
                     {...product}
                  />
               )}
               

            </div>
         </div>
      </section>
   )
}

export default Products;
