'use client'

import { useState } from "react";
import Rbtn from "./Rbtn";
import { useAppSelector } from "@/lib/hooks";

const RightNav = () => {

    const getToggle = useAppSelector(state => { // 디테일 네브바 토글 액션값 불러오기
        return state.rightNavToggle.value;
    });

    const Info = useAppSelector(state => { 
        console.log("잘 들어옴? " + JSON.stringify(state.rightNavToggle.regionInfo));
        return state.rightNavToggle.regionInfo;
    });

    const store1 = useAppSelector(state => { 
        return state.rightNavToggle.regionInfo.store1;
    });
    const store1type = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store1type;
    });

    const store2 = useAppSelector(state => { 
        return state.rightNavToggle.regionInfo.store2;
    });
    const store2type = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store2type;
    });

    const store3 = useAppSelector(state => { 
        return state.rightNavToggle.regionInfo.store3;
    });
    const store3type = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store3type;
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

            <div className="Rtitle-wrap">
                <div className="Rtitle">
                    <span className="Rtitle-name">{store1}</span>
                    <span className="Rtitle-sub">{store1type}</span>
                </div>
                <div className="Rtitle">
                    <span className="Rtitle-name">{store2}</span>
                    <span className="Rtitle-sub">{store2type}</span>
                </div>
                <div className="Rtitle">
                    <span className="Rtitle-name">{store3}</span>
                    <span className="Rtitle-sub">{store3type}</span>
                </div>
            </div>
            <div className="Rcontent-wrap">
                <div className="Rcontent">
                    <span>서울특별시 종로구 체부동 102</span>
                    <span>경복궁역 2번 출구에서 441m</span>
                    <span>13 : 00 PM ~ 17 : 00PM <span style={{color : "#939396"}}> 화요일 휴무</span></span>
                    <span>031-707-8180</span>
                </div>
            </div>
            <Rbtn />
        </nav>

    )
}

export default RightNav;


// display: getToggle ? "flex" : "none" ,