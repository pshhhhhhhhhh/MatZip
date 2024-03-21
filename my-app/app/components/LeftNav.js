'use client'

import { useAppSelector } from "@/lib/hooks";

import FoldBtn from "./FoldBtn";
import RegionBtn from "./RegionBtn";
import Courses from "./Courses";
import { region } from "../page"; //임시 데이타
import { course } from "../page"; //임시 데이타

const LeftNav = () => {

  const getToggle = useAppSelector(state => { // 토글액션값
    return state.toggler.value;
  });


  const getNames = useAppSelector(state => { // 액션을 한 결과값 불러오기
    // console.log("여기는 레프트 내브" + " " + state.regionUi.regionName)
    return state.regionUi.regionName;
  });


  const isEmpty = getNames.length === 0; // getNames 가 비어있으면 다 불러올거임

  return (
    <nav className="left-navbar" style={{ transform: getToggle ? "translateX(-100%)" : "translateX(0%)" }}>
      <div className="search-wrap">
        <input placeholder="Search" className="left-search" />
        <div className="search-button">
          <i className="fas fa-search" style={{ color: "#ffffff" }}></i>
        </div>
      </div>
      <div className="region"> {/** 지역 토글버튼 */}
        {region.map((region) =>
          <RegionBtn regions={region} key={region.id} />
        )}
      </div>
      {/* <div className="course-wrap">
        {course.map((course) =>
          <Courses courses={course} key={course.id} />
        )}
      </div> */}
      {/* <div className="course-wrap">
        {

          course.map((course) => ( isEmpty ? (
            <Courses courses={course} key={course.id} />
          )
           : (
            getNames.includes(courseArr) &&(
              <Courses courses={course} key={course.id} />
            ))
          ))
        }

      </div> */}



      <div className="course-wrap">
        {

          course.map((course) => (isEmpty ? (
            <Courses courses={course} key={course.id} />
          )
            : null
          ))
        }

      </div>


      <FoldBtn></FoldBtn>
    </nav>
  )
}

export default LeftNav;