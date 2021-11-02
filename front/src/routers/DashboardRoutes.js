import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { ListProduct } from '../components/ListProduct';
import { MiniCartPage } from '../components/MiniCartPage';
import { NavBar } from '../components/NavBar';
import { PageProduct } from '../components/PageProduct';
//import { DcScreen } from '../components/dc/DcScreen'
//import { HeroScreen } from '../components/heroes/HeroScreen'
//import { MarvelScreen } from '../components/marvel/MarvelScreen'
//import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar/>
            <div className="">
                <Switch>
                    {/* 
                      <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    */}
                     <Route exact path="/electronic" component={ ListProduct } />
                    <Route  path="/api/products/:id" component={ PageProduct } />
                    <Route  path="/checkout-card" component={ MiniCartPage } />
                    <Redirect to="/"  component={ ListProduct } />
                </Switch>
            </div>
        </>
    )
}
