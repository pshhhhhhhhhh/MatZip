'use client'
import Rbtn from "./Rbtn";
import { useAppSelector } from "@/lib/hooks";


const RightNav = () => {

    const getToggle = useAppSelector(state => { // 디테일 네브바 토글 액션값 불러오기
        return state.rightNavToggle.value;
    });

    const Info = useAppSelector(state => { // 디테일 네브바 토글 액션값 불러오기
        console.log("잘 들어옴? "+ JSON.stringify(state.rightNavToggle.regionInfo));
        return JSON.stringify(state.rightNavToggle.regionInfo.courses);
    });

    return (
        <nav className="right-navbar" style={{transform: getToggle ? "translateX(100%)" : "translateX(0%)" }}>

            <a>{Info}</a>
            <h2>안녕!</h2>
            <h2>안녕!</h2>
            <h2>안녕!</h2>
            <h2>안녕!</h2>
            <h2>안녕!</h2>
            <Rbtn/>
        </nav>

    )
}

export default RightNav;


// display: getToggle ? "flex" : "none" ,