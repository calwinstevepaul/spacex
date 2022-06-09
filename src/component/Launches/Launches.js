import React, { useEffect, useState } from 'react'
import { baseUrl, helper } from '../../service'
import Card from '../common/card'
import moment from 'moment';


function Launches({setTab}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getLaunches = async () => {
            try {
                setLoading(true);

                let res = await helper.getApi(null, `${baseUrl}v3/launches`);
                if (res && res.data && res.data.length >= 0) {
                    setData(res.data);
                } else {
                    setData([]);
                }

                setLoading(false);
            } catch (error) {

            }
        }

        setTab("launches")
        getLaunches()
    }, [])

    const setCardData = (ele)=>{
        let data = {
            img_url: ele.links.mission_patch_small,
            list: [
                {
                    key: "Mission Name",
                    value: ele.mission_name
                },
                {
                    key: "Date",
                    value: moment(ele.launch_date_utc).format("MMM Do YY")
                },
                {
                    key: "Rocket Name",
                    value: ele.rocket.rocket_name
                },
                {
                    key: "Rocket Type",
                    value: ele.rocket.rocket_type
                }
            ]
        };

        return data;
    }

    return (
        <>
            {
                loading ? <div>Loading...</div> :  data.map((ele, index) => <Card index={index} data={setCardData(ele)} />)
            }
        </>
    )
}

export default Launches