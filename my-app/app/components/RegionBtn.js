'use client'

import { useState } from "react"


const RegionBtn = (props) => {

    const[toggle,setToggle] = useState(false);

    console.log(props)

    const toggleHandeler = (id) =>{

        setToggle(!toggle)
       
    }

    return (
        <span className="region-span" onClick={ () =>{
            setToggle(!toggle)
        }}>
            { toggle == true ? <a className="region-onclick">{props.regions.regionname}</a>
            : <a className="region-point">{props.regions.regionname}</a>
            }
        </span>
    )
}

export default RegionBtn;