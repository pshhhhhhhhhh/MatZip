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
    const store1address = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store1address;
    });
    const store1address2 = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store1address2;
    });

    const store1time = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store1time;
    });
    const store1phone = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store1phone;
    });

    const store2 = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store2;
    });
    const store2type = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store2type;
    });
    const store2address = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store2address;
    });
    const store2address2 = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store2address2;
    });
    const store2time = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store2time;
    });
    const store2phone = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store2phone;
    });

    const store3 = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store3;
    });
    const store3type = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store3type;
    });
    const store3address = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store3address;
    });
    const store3address2 = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store3address2;
    });
    const store3time = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store3time;
    });
    const store3phone = useAppSelector(state => {
        return state.rightNavToggle.regionInfo.store3phone;
    });







    const [slideNum, setSlideNum] = useState(1); //이미지 슬라이드 state


    function slideLeft() { //이미지 슬라이드 함수
        if (slideNum > 1) {
            setSlideNum(slideNum - 1)
        }
        else {
            return setSlideNum(3)
        }
    }
    function slideRight() {
        if (slideNum < 3) {
            setSlideNum(slideNum + 1)
        }
        else {
            return setSlideNum(1)
        }
    }

    const [storeNum, setStoreNum] = useState(1); // 가게 선택 정보를 바꾸기 위한 state


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
                <div style={{ flexGrow: "2" }}></div>
                <div className="slide-next-btn" onClick={() => slideRight()}>
                    <i className="fas fa-angle-right fa-lg fa-1.5x" ></i>
                </div>
            </div>

            <div className="slide-btn-wrap">
                <a className="slide-btn" style={{ backgroundColor: slideNum === 1 ? "white" : "rgb(155, 156, 158)" }}
                    onClick={() => setSlideNum(1)}></a>
                <a className="slide-btn" style={{ backgroundColor: slideNum === 2 ? "white" : "rgb(155, 156, 158)" }}
                    onClick={() => setSlideNum(2)}></a>
                <a className="slide-btn" style={{ backgroundColor: slideNum === 3 ? "white" : "rgb(155, 156, 158)" }}
                    onClick={() => setSlideNum(3)}></a>
            </div>

            <div className="Rtitle-wrap">
                <div className="Rtitle" onClick={() => setStoreNum(1)}>
                    <span className="Rtitle-name">{store1}</span>
                    <span className="Rtitle-sub">{store1type}</span>
                </div>
                <div className="Rtitle" onClick={() => setStoreNum(2)}>
                    <span className="Rtitle-name">{store2}</span>
                    <span className="Rtitle-sub">{store2type}</span>
                </div>
                <div className="Rtitle" onClick={() => setStoreNum(3)}>
                    <span className="Rtitle-name">{store3}</span>
                    <span className="Rtitle-sub">{store3type}</span>
                </div>
            </div>
            <div className="Rcontent-wrap">
                <div className="Rcontent">
                    {storeNum === 1 && (
                        <>
                            <span>{store1address}</span>
                            <span>{store1address2}</span>
                            <span>{store1time}</span>
                            <span>{store1phone}</span>
                        </>
                    )}
                    {storeNum === 2 && (
                        <>
                            <span>{store2address}</span>
                            <span>{store2address2}</span>
                            <span>{store2time}</span>
                            <span>{store2phone}</span>
                        </>
                    )}
                    {storeNum === 3 && (
                        <>
                            <span>{store3address}</span>
                            <span>{store3address2}</span>
                            <span>{store3time}</span>
                            <span>{store3phone}</span>
                        </>
                    )}
                </div>
            </div>
            <Rbtn />
        </nav>

    )
}

export default RightNav;


// display: getToggle ? "flex" : "none" ,