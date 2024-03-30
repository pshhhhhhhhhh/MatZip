'use client'
import Rbtn from "./Rbtn";
import { useAppSelector } from "@/lib/hooks";


const RightNav = () => {

    const getToggle = useAppSelector(state => { // 디테일 네브바 토글 액션값 불러오기
        return state.rightNavToggle.value;
    });

    const Info = useAppSelector(state => { // 디테일 네브바 토글 액션값 불러오기
        console.log("잘 들어옴? " + JSON.stringify(state.rightNavToggle.regionInfo));
        return  state.rightNavToggle.regionInfo;
    });

    return (
        <nav className="right-navbar" style={{ transform: getToggle ? "translateX(100%)" : "translateX(0%)" }}>
            <a>{Info.regionname}</a>
            <a>{Info.store1}</a>
            <a>{Info.store1address}</a>
            <a>{Info.store2}</a>
            <a>{Info.store2address}</a>
            <a>{Info.store3}</a>
            <a>{Info.store3address}</a>
            <Rbtn />
        </nav>

    )
}

export default RightNav;


// display: getToggle ? "flex" : "none" ,