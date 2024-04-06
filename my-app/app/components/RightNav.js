'use client'

import { useState } from "react";
import Rbtn from "./Rbtn";
import { useAppSelector } from "@/lib/hooks";

const RightNav = () => {

    const getToggle = useAppSelector(state => { // 디테일 네브바 토글 액션값 불러오기
        return state.rightNavToggle.value;
    });

    const Info = useAppSelector(state => { // 디테일 네브바 토글 액션값 불러오기
        console.log("잘 들어옴? " + JSON.stringify(state.rightNavToggle.regionInfo));
        return state.rightNavToggle.regionInfo;
    });


    const [slideNum, setSlideNum] = useState(1);

    function slideAction(num) {
        if (num === 1) {
            setSlideNum(1)
        }
        else if (num === 2) {
            setSlideNum(1);
        }
        else if (num === 3) {
            setSlideNum(3);
        }
    }


    return (
        <nav className="right-navbar" style={{ transform: getToggle ? "translateX(100%)" : "translateX(0%)" }}>
            {/* <a>{Info.regionname}</a>
            <a>{Info.store1}</a>
            <a>{Info.store1address}</a>
            <a>{Info.store2}</a>
            <a>{Info.store2address}</a>
            <a>{Info.store3}</a>
            <a>{Info.store3address}</a> */}

            <div className="slide-wrap" >
                <div className="slide-container" id="slide" style={{
                    transform: slideNum === 1 ? "translateX(0px)" : 
                    slideNum === 2 ?
                    "translateX(-33.5%)" : "translateX(-66.7%)"
                }}>
                    <div className="slide-box">
                        <img src="/allRight1.jpg" alt="올라이트1" />
                    </div>
                    <div className="slide-box">
                        <img src="/allRight2.jpg" alt="올라이트2" />
                    </div>
                    <div className="slide-box">
                        <img src="/allRight3.jpg" alt="올라이트3" />
                    </div>
                </div>
                
           
            </div>
            <button onClick={() => setSlideNum(1)}>1번</button>
            <button onClick={() => setSlideNum(2)}>2번</button>
            <button onClick={() => setSlideNum(3)}>3번</button>
            <a>홀롤로</a>
            <Rbtn />
        </nav>

    )
}

export default RightNav;


// display: getToggle ? "flex" : "none" ,