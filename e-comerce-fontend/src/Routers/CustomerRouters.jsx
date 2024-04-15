import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import ProductList from '../customer/pages/ProductList/ProductList'
import Header from '../customer/components/Header/Header'
import Footer from '../customer/components/Footer/Footer'
import ProductDetail from '../customer/pages/ProductDetail/ProductDetail'
import NotFound from '../customer/pages/NotFound/NotFound'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}> </Route>
                <Route path='/products' element={<ProductList />}> </Route>
                <Route path='/product/:productId' element={<ProductDetail />}> </Route>

                <Route component={NotFound} />
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters