'use client'


import { rightNavActions } from "@/lib/rightNavSlice";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const Courses = (props) => {

    // 클릭시 디테일페이지를 여는 명령과, 클릭한 코스의 정보를 보내줘야함
    // 똑같은걸 누르면 토글, 다른거면 정보만 불러오기

    const getRToggle = useAppSelector(state => { // SearchSlice State 불러오기
        console.log("토글 상태" + JSON.stringify(state.rightNavToggle.value))
        return state.rightNavToggle.value;
    });


    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();

    const toggleHandeler = () => { //디테일페이지 열기
        dispatch(rightNavActions.regionInfo(props))
        dispatch(rightNavActions.toggle()) // 디테일 페이지를 열어
    }


    return (
        <li className="course" onClick={toggleHandeler}>
            <a style={{ color: "#333" }}>{props.courses.regionname}</a>
            <div className="store-name">
                <a>{props.courses.store1}</a>
            </div>
            <div className="store-address">
                <a>{props.courses.store1address}</a>
            </div>
            <div style={{ marginBottom: "15px" }}></div>
            <div className="store-name">
                <a>{props.courses.store2}</a>
            </div>
            <div className="store-address">
                <a>{props.courses.store2address}</a>
            </div>
            <div style={{ marginBottom: "15px" }}></div>
            <div className="store-name">
                <a>{props.courses.store3}</a>
            </div>
            <div className="store-address">
                <a>{props.courses.store3address}</a>
            </div>
            <div style={{ marginBottom: "15px" }}></div>
        </li>
    )
}

export default Courses;