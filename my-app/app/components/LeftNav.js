'use client'

import { useAppSelector } from "@/lib/hooks";

import FoldBtn from "./FoldBtn";
import RegionBtn from "./RegionBtn";
import { region } from "../page"; //임시 데이타


const LeftNav = () => {

  const getToggle = useAppSelector(state => { // 액션을 한 결과값 불러오기
    console.log("여기는 레프트 내브" + state.toggler.value)
    return state.toggler.value;
  });


  return (

    <nav className="left-navbar" style={{ transform: getToggle ? "translateX(-100%)" : "translateX(0%)" }}>
      <div className="search-wrap">
        <input placeholder="Search" className="left-search" />
        <div className="search-button">
          <i className="fas fa-search" style={{ color: "#ffffff" }}></i>
        </div>
      </div>
      <div className="region">
        {region.map((region)=>
          <RegionBtn regions = {region} key = {region.id}/>
        )}
      </div>
      <div className="course-wrap">
        <div className="course">
          <a style={{color:"#333"}}>서촌</a>
          <div className="store-name">
            <a>올라이트</a>
          </div>
          <div className="store-address">
            <a>서울특별시 종로구 체부동 102</a>
          </div>
        </div>
      </div>


      <FoldBtn></FoldBtn>
    </nav>
  )
}

export default LeftNav;