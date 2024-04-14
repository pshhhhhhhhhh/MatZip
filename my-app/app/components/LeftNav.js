'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { regionUiActions } from "@/lib/regionUiSlice";

import Search from "./Search";
import FoldBtn from "./FoldBtn";
import RegionBtn from "./RegionBtn";
import Courses from "./Courses";
import RightNav from "./RightNav";

//import { region } from "../page"; //임시 데이타
//import { course } from "../page"; //임시 데이타
import { useState, useEffect } from "react";

// const LeftNav = ({regions,courses}) => {

//   // Todo
//   // 디테일 네브바 만들기

//   console.log("몽고? : ", courses)


//   const getToggle = useAppSelector(state => { // 네브바 토글 액션값 불러오기
//     return state.toggler.value;
//   });

//   const getNames = useAppSelector(state => { // 코스정보State
//     return JSON.stringify(state.regionUi.regionState); //Object형이기 때문에 stringfy해주기
//   });

//   const getSearch = useAppSelector(state => { // SearchSlice State 불러오기
//     return state.search.searchState;
//   });


//   const courseNames = course.filter(courses => getNames.includes(courses.regionname)); //Course의 리전네임들 중 getName와 일치하는 배열 찾아서 반환


//   console.log("courseNames : " + " " + JSON.stringify(courseNames))
//   console.log("getSearch : " + " " + JSON.stringify(getSearch))

//   return (
//     <nav className="left-navbar" style={{ transform: !getToggle ? "translateX(-100%)" : "translateX(0%)" }}>

//       <Search course={course}></Search>

//       <div className="content-wrap">
//         <div className="region"> {/** 지역 토글버튼 */}
//           {regions.map((region) =>
//             <RegionBtn regions={region} key={region.id} />
//           )}
//         </div>

//         <div className="course-wrap">
//           <ul style={{ padding: 0, margin: 0 }}>
//             {
//               (courseNames.length === 0 && getSearch.length === 0) && course.map((course) => (( //아무것도 선택하지 않았다면 course데이터 전부 렌더링하기
//                 <Courses courses={course} key={course.id} />
//               )))
//             }
//             {
//               courseNames.length > 0 && courseNames.map((course) => (( //선택해서 배열에 값이 있다면 해당하는 값만 렌더링하기
//                 <Courses courses={course} key={course.id} />
//               )))
//             }
//             {
//               getSearch.length > 0 && getSearch.map((course) => (( //선택해서 배열에 값이 있다면 해당하는 값만 렌더링하기
//                 <Courses courses={course} key={course.id} />
//               )))
//             }
//           </ul>
//         </div>
//       </div>
//       <RightNav></RightNav>
//       <FoldBtn></FoldBtn>
//     </nav >
//   )
// }

// export default LeftNav;


const LeftNav = ({regions,courses}) => {

  // Todo
  // 디테일 네브바 만들기

  console.log("몽고? : ", courses)


  const getToggle = useAppSelector(state => { // 네브바 토글 액션값 불러오기
    return state.toggler.value;
  });

  const getNames = useAppSelector(state => { // 코스정보State
    return JSON.stringify(state.regionUi.regionState); //Object형이기 때문에 stringfy해주기
  });

  const getSearch = useAppSelector(state => { // SearchSlice State 불러오기
    return state.search.searchState;
  });


  const courseNames = courses.filter(courses => getNames.includes(courses.regionname)); //Course의 리전네임들 중 getName와 일치하는 배열 찾아서 반환


  console.log("courseNames : " + " " + JSON.stringify(courseNames))
  console.log("getSearch : " + " " + JSON.stringify(getSearch))

  return (
    <nav className="left-navbar" style={{ transform: !getToggle ? "translateX(-100%)" : "translateX(0%)" }}>

      <Search course={courses}></Search>

      <div className="content-wrap">
        <div className="region"> {/** 지역 토글버튼 */}
          {regions.map((region) =>
            <RegionBtn regions={region} key={region.id} />
          )}
        </div>

        <div className="course-wrap">
          <ul style={{ padding: 0, margin: 0 }}>
            {
              (courseNames.length === 0 && getSearch.length === 0) && courses.map((courses) => (( //아무것도 선택하지 않았다면 course데이터 전부 렌더링하기
                <Courses courses={courses} key={courses.id} />
              )))
            }
            {
              courseNames.length > 0 && courseNames.map((courses) => (( //선택해서 배열에 값이 있다면 해당하는 값만 렌더링하기
                <Courses courses={courses} key={courses.id} />
              )))
            }
            {
              getSearch.length > 0 && getSearch.map((courses) => (( //선택해서 배열에 값이 있다면 해당하는 값만 렌더링하기
                <Courses courses={courses} key={courses.id} />
              )))
            }
          </ul>
        </div>
      </div>
      <RightNav></RightNav>
      <FoldBtn></FoldBtn>
    </nav >
  )
}

export default LeftNav;