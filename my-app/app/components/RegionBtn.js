'use client'

import { useState,useEffect } from "react"
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { regionUiActions } from "@/lib/regionUiSlice";
import { searchActions } from "@/lib/searchSlice";


const RegionBtn = (props) => {

    // console.log(" 몽고에서 옴? "+ JSON.stringify(props.regions))

    const [toggle, setToggle] = useState(false);

    
    
    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();
       

    const dispatchHandeler = () =>{
        setToggle(!toggle)
        dispatch(regionUiActions.toggle(props.regions)) //지역버튼 state에 값 전송
        dispatch(searchActions.uiBoolean(false))
    }

    const searchBoolean = useAppSelector(state=>{ // 서치슬라이스의 boolean값을 받아오기
        return state.search.uiBoolean;
    });
    


    useEffect(()=>{
        if(searchBoolean === true){ //그게 true일때만
        setToggle(false) //지역토글을 false로 해주자 그래야 검색한뒤에 지역토글 눌렀을때 토글버튼이 해제됨
        }
    },[searchBoolean]) //서치슬라이스의 boolean이 변동될때마다 실행되는데




    return (
        <span className="region-span" onClick={dispatchHandeler}>
            {toggle ? <a className="region-onclick">{props.regions.regionname}</a>
                : <a className="region-point">{props.regions.regionname}</a>
            }
        </span>
    )
}

export default RegionBtn;
