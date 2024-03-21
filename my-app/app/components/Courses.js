'use client'


import { useAppSelector } from "@/lib/hooks";



const Courses = (props) => {

    // const getNames = useAppSelector(state => { // 액션을 한 결과값 불러오기
    //     // console.log("여기는 zhtm" + " " + state.regionUi.regionName)
    //     return state.regionUi.regionName;
    // });

    // const result = getNames.find(function (item) { return item === props.courses.regionname })
    // console.log(result)


    return (
        <div className="course">
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
        </div>
    )
}

export default Courses;