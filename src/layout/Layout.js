import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../component/Home';
import Launches from '../component/Launches/Launches';
import Rockets from '../component/Rockets/Rockets';
import Navbar from './component/Navbar';
import './style.css'

function Layout() {
    return (
        <div className='layout-container d-flex justify-content-center align-items-center'>
            <div className='layout-container-inner p-3'>
                <Navbar />

                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/launches" component={Launches} />
                        <Route path="/Rockets" component={Rockets} />
                    </Switch>
                </div>

            </div>
        </div>
    )
}

export default Layout