'use client'

import { useState } from "react"
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { searchActions } from "@/lib/searchSlice";


const Search = (props) => {

    const test = JSON.stringify(props.course)


    const [searchValue, setSearchValue] = useState('') //서치 인풋 State

    const searchHandeler = (e) => { //서치 인풋에 들어가는 값 관리하기
        setSearchValue(e.target.value);
    };

    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();

    // const dispatchHandeler = () => { //데이터 거르기

    //     const matchedCourse = props.course.find(course => { //검색한 값이 기존 data와 일치?
    //         for (const key in course) {
    //             // 키가 'regionname', 'store1', 'store2', 'store3' 중 하나임?
    //             if (searchValue != '' && //지역으로 검색했을 때
    //                 (key === 'regionname') && course[key].includes(searchValue)) {
    //                 return true
    //             }
    //             if (searchValue != '' && //가게명으로 검색했을 때
    //             (key.startsWith('store')) && course[key].includes(searchValue)) {
    //                 return true
    //         }
    //         }
    //         return false;
    //     });
    //     if (matchedCourse) {
    //         if (searchValue !== '' && matchedCourse.regionname.includes(searchValue)) {
    //             dispatch(searchActions.regionSearch(matchedCourse));
    //         } else if (searchValue !== '' && Object.keys(matchedCourse).some(key => key.startsWith('store') && matchedCourse[key].includes(searchValue))) {
    //             dispatch(searchActions.storeSearch(matchedCourse));
    //         }
    //     }
    // }

    const dispatchHandeler = () => { // 데이터 거르기
        const matchedRegion = props.course.filter(course => { // 검색한 값이 지역일때
            for (const key in course) {
                // 키가 'regionname'임?
                if (searchValue != '' && //지역으로 검색했을 때
                    (key === 'regionname') && course[key].includes(searchValue)) {
                    return true
                }
            }
            return false
        });

        const matchedName = props.course.filter(course => { // 검색한 값이 지역일때
            for (const key in course) {
                // 키가 'store1', 'store2', 'store3' 중 하나임?
                if (searchValue != '' && //가게명으로 검색했을 때
                    (key.startsWith('store')) && course[key].includes(searchValue)) {
                    return true
                }
            }
            return false
        });

        console.log("지역이름은 : " + JSON.stringify(matchedRegion))
        console.log("가게이름은 : " + JSON.stringify(matchedName))

        if(matchedRegion) {
            //console.log("지역검색 디스패치")
            dispatch(searchActions.regionSearch(matchedRegion));
        }
        else if(matchedName){
            //console.log("이름검색 디스패치")
            dispatch(searchActions.storeSearch(matchedName));
        }

    }


    // const dispatchHandeler = () => { // 데이터 거르기
    //     const matchedRegion = props.course.filter(course => { // 검색한 값이 지역일때
    //         for (const key in course) {
    //             // 키가 'regionname'임?
    //             if (searchValue != '' && //지역으로 검색했을 때
    //                 (key === 'regionname') && course[key].includes(searchValue)) {
    //                 return true
    //             }
    //             if (searchValue != '' && //가게명으로 검색했을 때
    //                 (key.startsWith('store')) && course[key].includes(searchValue)) {
    //                 return true
    //             }
    //         }
    //         return false
    //     });



    //     if(matchedRegion) {
    //         console.log("지역검색 디스패치")
    //         dispatch(searchActions.regionSearch(matchedRegion));
    //     }
    //     else if(matchedName){
    //         dispatch(searchActions.storeSearch(matchedName));
    //     }
    // }




    const handleOnKeyPress = e => { //엔터키 사용하기
        if (e.key === 'Enter') {
            dispatchHandeler();
        }
    };

    return (
        <div className="search-wrap">
            <input placeholder="Search" className="left-search" value={searchValue} onChange={searchHandeler} onKeyDown={handleOnKeyPress} />
            <div className="search-button" onClick={dispatchHandeler}>
                <i className="fas fa-search" style={{ color: "#ffffff" }}></i>
            </div>
        </div>
    )
}

export default Search;