import React, { useEffect, useState } from 'react'
import { baseUrl, helper } from '../../service'

function Launches() {
    const [first, setfirst] = useState([])
    
    useEffect(() => {
        const getLaunches = async()=>{
            console.log("hi")
            try {
                let launches = await helper.getApi(null, `${baseUrl}v3/launches`);
                if(launches && launches.length >= 0){
                    setfirst(launches);
                    console.log(launches)
                }else{
                    setfirst([]);
                }                
            } catch (error) {
                
            }
        }

        console.log("hello")

        // if(first && first.length == 0){
            // getLaunches()
        // }
    }, [])

   

    return (
        <div>

        </div>
    )
}

export default Launches