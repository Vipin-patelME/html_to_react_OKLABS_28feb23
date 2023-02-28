import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Header from './Header'
import Footer from './Footer'
import MainHeader from './MainHeader'

export default function Layout() {
    return (
        <>
            <MainHeader />
            <div role="main" id="main" class="container_12 clearfix">
                <Header/>
                <Aside />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
