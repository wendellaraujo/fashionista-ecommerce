import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../src/components/Header/index'
import Products from '../src/pages/Products'
import Product from '../src/components/pages/Product/index'


export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/product/:code_color"  component={Product} />
        <Route path="/product"  component={Product} />
      </Switch>
    </BrowserRouter>
  )
}