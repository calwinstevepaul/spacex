import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../component/Home';
import Launches from '../component/Launches/Launches';
import Rockets from '../component/Rockets/Rockets';
import Navbar from './component/Navbar';
import './style.css'

function Layout() {
    const [tab, setTab] = useState("home")
    return (
        <div className='layout-container d-flex justify-content-center align-items-center'>
            <div className='layout-container-inner p-3'>
                <Navbar tab={tab}/>
                <div className='tab-container'>
                    <Switch>
                        <Route exact path="/" >
                            <Home setTab = {setTab}/>
                        </Route>
                        <Route path="/launches" >
                            <Launches setTab = {setTab}/>
                        </Route>
                        <Route path="/Rockets" >
                            <Rockets setTab = {setTab}/>
                        </Route>
                    </Switch>
                </div>

            </div>
        </div>
    )
}

export default Layout