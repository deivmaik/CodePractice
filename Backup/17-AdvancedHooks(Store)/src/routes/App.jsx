import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'



const App = () => {
    return (
        <BrowserRouter>
        <switch>
            <route exact path="/" component={Home} />
            <route exact path="/checkout" component={Checkout} />
            <route exact path="/checkout/information" component={Information} />
            <route exact path="/checkout/payment" component={Payment} />
            <route exact path="/checkout/success" component={Success} />
            <route component={NotFound}/>
        </switch>
        </BrowserRouter>
    )
}
