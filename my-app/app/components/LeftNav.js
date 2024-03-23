'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { regionUiActions } from "@/lib/regionUiSlice";

import Search from "./Search";
import FoldBtn from "./FoldBtn";
import RegionBtn from "./RegionBtn";
import Courses from "./Courses";
import { region } from "../page"; //임시 데이타
import { course } from "../page"; //임시 데이타

const LeftNav = () => {

  const getToggle = useAppSelector(state => { // 토글액션값
    return state.toggler.value;
  });

  const getNames = useAppSelector(state => { // 코스정보State
    return JSON.stringify(state.regionUi.regionState); //Object형이기 때문에 stringfy해주기
  });

  const getSearch = useAppSelector(state => { // State접근
    //console.log("getSearch : " + " " + JSON.stringify(state.search.searchState))
    return JSON.stringify(state.search.searchState); //Object형이기 때문에 stringfy해주기
  });


  const courseNames = course.filter(courses => getNames.includes(courses.regionname)); //Course의 리전네임들 중 getName와 일치하는 배열 찾아서 반환


  //지역이름은 잘 찍힘 근데 가게명으로 하니까 안찍힘??
  console.log("getNames : " + " " + getNames)
  console.log("getSearch : " + " " + getSearch)


  return (
    <nav className="left-navbar" style={{ transform: getToggle ? "translateX(-100%)" : "translateX(0%)" }}>
      {/* <div className="search-wrap">
        <input placeholder="Search" className="left-search" />
        <div className="search-button" >
          <i className="fas fa-search" style={{ color: "#ffffff" }}></i>
        </div>
      </div> */}
      <Search course={course}></Search>

      <div className="region"> {/** 지역 토글버튼 */}
        {region.map((region) =>
          <RegionBtn regions={region} key={region.id} />
        )}
      </div>

      <div className="course-wrap">
        {
          courseNames.length === 0 && course.map((course) => (( //아무것도 선택하지 않았다면 course데이터 전부 렌더링하기
            <Courses courses={course} key={course.id} />
          )))
        }
        {
          courseNames.length > 0 && courseNames.map((course) => (( //선택해서 배열에 값이 있다면 해당하는 값만 렌더링하기
            <Courses courses={course} key={course.id} />
          )))
        }
      </div>


      <FoldBtn></FoldBtn>
    </nav>
  )
}

export default LeftNav;