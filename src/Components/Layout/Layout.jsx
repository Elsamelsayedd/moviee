import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Search from '../Search/Search'

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div className="container w-[80%] m-auto">

                <Search />

                <Outlet></Outlet>
            </div>
        </>
    )
}
