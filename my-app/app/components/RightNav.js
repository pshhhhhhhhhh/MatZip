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


    function slideLeft(){
        if(slideNum > 1){
        setSlideNum(slideNum-1)
        }
        else{
            return setSlideNum(3)
        }
    }
    function slideRight(){
        if(slideNum < 3){
        setSlideNum(slideNum+1)
        }
        else{
            return setSlideNum(1)
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
            <div className="slide-next-btn-wrap">
                <div className="slide-next-btn" onClick={() => slideLeft()}>
                    <i className="fas fa-angle-left fa-lg fa-1.5x"></i>
                </div>
                <div style={{flexGrow:"2"}}></div>
                <div  className="slide-next-btn" onClick={() => slideRight()}>
                    <i className="fas fa-angle-right fa-lg fa-1.5x" ></i>
                </div>
            </div>

            <div className="slide-btn-wrap">
                <a className="slide-btn" style={{backgroundColor:slideNum === 1 ? "white": "rgb(155, 156, 158)"}}
                onClick={() => setSlideNum(1)}></a>
                <a className="slide-btn" style={{backgroundColor:slideNum === 2 ? "white": "rgb(155, 156, 158)"}}
                onClick={() => setSlideNum(2)}></a>
                <a className="slide-btn" style={{backgroundColor:slideNum === 3 ? "white": "rgb(155, 156, 158)"}}
                onClick={() => setSlideNum(3)}></a>
            </div>

            <a>홀롤로</a>
            <Rbtn />
        </nav>

    )
}

export default RightNav;


// display: getToggle ? "flex" : "none" ,