'use client'

import { useState } from "react"
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { regionUiActions } from "@/lib/regionUiSlice";


const RegionBtn = (props) => {

    const [toggle, setToggle] = useState(false);


    // const toggleHandeler = () => {
    //     setToggle(!toggle)
    // }

    
    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();

    const dispatchHandeler = () =>{
        setToggle(!toggle)
        dispatch(regionUiActions.toggle(props.regions.regionname))
    }

    const getNames = useAppSelector(state=>{ // 액션을 한 결과값 불러오기
        // console.log(state.regionUi.regionName)
        // return state.regionUi.regionName;
      });

    return (
        <span className="region-span" onClick={dispatchHandeler}>
            {toggle ? <a className="region-onclick">{props.regions.regionname}</a>
                : <a className="region-point">{props.regions.regionname}</a>
            }
        </span>
    )
}

export default RegionBtn;