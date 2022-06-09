import React, { useEffect } from 'react'

function Home({ setTab }) {
    useEffect(() => {
        setTab("home")
    }, [])

    return (
        <div>
            <div className='mt-3'>
                <img src="https://www.spacex.com/static/images/share.jpg" width={"150px"} />
            </div>

            <div>
                <div className='mt-3'>
                    <b>
                        History
                    </b>
                </div>
                <div>
                    Space Exploration Technologies Corp. (doing business as SpaceX) is an American spacecraft manufacturer, space launch provider, and a satellite communications corporation headquartered in Hawthorne, California. SpaceX was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars. SpaceX manufactures the Falcon 9 and Falcon Heavy launch vehicles, several rocket engines, Cargo Dragon, crew spacecraft, and Starlink communications satellites.
                    <br></br>
                    SpaceX is developing a satellite internet constellation named Starlink to provide commercial internet service. In January 2020, the Starlink constellation became the largest satellite constellation ever launched, and as of May 2022 it comprises over 2,400 small satellites in orbit.[7] Starlink has been criticized by some astronomers due to concerns over light pollution. It has also been criticized over the long term danger from orbital debris resulting from possible space collisions. The company is also developing Starship, a privately funded, fully reusable, super heavy-lift launch system for interplanetary and orbital spaceflight. Starship is intended to become SpaceX's primary orbital vehicle once operational, supplanting the existing Falcon 9, Falcon Heavy, and Dragon fleet. Starship will have the highest payload capacity of any orbital rocket ever built on its debut, scheduled for 2022 pending regulatory approval.
                    <br></br>
                    SpaceX's achievements include the first privately funded liquid-propellant rocket to reach orbit around Earth,[9] the first private company to successfully launch, orbit, and recover a spacecraft, the first private company to send a spacecraft to the International Space Station, the first vertical take-off and vertical propulsive landing for an orbital rocket, the first reuse of an orbital rocket, and the first private company to send astronauts to orbit and to the International Space Station. SpaceX has flown and landed the Falcon 9 series of rockets over one hundred times.
                </div>
            </div>
        </div>
    )
}

export default Home