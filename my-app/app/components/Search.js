'use client'

import { useState } from "react"
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { regionUiActions } from "@/lib/regionUiSlice";
import { searchActions } from "@/lib/searchSlice";


const Search = (props) => {

    const test = JSON.stringify(props.course)


    const [searchValue, setSearchValue] = useState('') //서치 인풋 State

    const searchHandeler = (e) => { //서치 인풋에 들어가는 값 관리하기
        setSearchValue(e.target.value);
    };

    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();

    const dispatchHandeler = () => { // 데이터 거르기
        const matchedRegion = props.course.filter(course => { // 검색한 값이 지역일때
            for (const key in course) {
                // 키가 'regionname'임?
                if (searchValue != '' && //지역으로 검색했을 때
                    (key === 'regionname') && course[key].includes(searchValue)) {
                    console.log(" 매치드 리전에에에서 찍기기" + course[key].includes(searchValue))
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

        // 파라미터에 값이 있으면 밑의 걸 실행해주는거지
        if (matchedRegion.length > 0) {
            dispatch(searchActions.regionSearch(matchedRegion));
            dispatch(regionUiActions.uiBoolean(false));
        }
        else if (matchedName.length > 0) {
            dispatch(searchActions.storeSearch(matchedName));
            dispatch(regionUiActions.uiBoolean(false));
        }

    }

    const handleOnKeyPress = e => { //엔터키 사용하기
        if (e.key === 'Enter') {
            dispatchHandeler();
        }
    };

    const getSearch = useAppSelector(state => { // SearchSlice State 불러오기
        return state.search.searchState;
    });

    return (
        <div className="search-wrap1">
            <div className="search-wrap2">
                <input placeholder="Search" spellCheck="false" className="left-search" value={searchValue} onChange={searchHandeler} onKeyDown={handleOnKeyPress} />
                <div className="box" style={{ flexGrow: "1" }}></div> {/**좌우정렬용 div */}
                {searchValue ? //검색 취소 버튼
                    <i className="fas fa-times-circle" style={{ color: "#000000", marginRight: "5px" }} onClick={() => {
                        if(getSearch.length > 0){ //검색한게 있으면 새로고침해서 아예 비워주기
                            window.location.reload();
                        }
                        else{ //아니면 그냥 input에 있는거만 없애
                            setSearchValue('')
                        }
                    }} /> : null
                }
                <div className="search-button" onClick={dispatchHandeler}>
                    <i className="fas fa-search" style={{ color: "#ffffff" }}></i>
                </div>
            </div>
        </div>
    )
}

export default Search;