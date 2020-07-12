import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../src/components/Header/index'
import Products from '../src/components/pages/Products/index'
import Product from '../src/components/pages/Product/index'
import ShoppingBag from '../src/components/ShoppingBag/index'


export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/bag" exact component={ShoppingBag} />
        <Route path="/product/:code_color"  component={Product} />
        <Route path="/product"  component={Product} />
      </Switch>
    </BrowserRouter>
  )
}