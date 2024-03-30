'use client'

// 디테일 네브바를 열었을때 렌더링될 폴드 버튼 컴포넌트

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { rightNavActions } from '@/lib/rightNavSlice';
import { useEffect, useRef } from 'react';


const Rbtn = () => {
    //클릭시 디테일 네브바 정보를 비우고 해당 페이지를 닫으라는 명령을 내려야함

    const timerRef = useRef(null);  //값을 기억하고 싶지만 useeffect가 실행 될때만 렌더링하기 위해서 useRef사용 

    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();

    const toggleHandeler = () =>{
        console.log("디테일 네브바 버튼 닫기")
        dispatch(rightNavActions.regionInfo([])) //정보 비우기
        dispatch(rightNavActions.close(false))
    }

    const getRToggle = useAppSelector(state=>{ // 네브바가 열렸다면 버튼 화살표 바꾸기위한 state 불러오기
        return state.rightNavToggle.value;
    });

    useEffect(() => { //버튼 조금 늦게 사라지게 하기
        if (getRToggle === false) {
            timerRef.current = setTimeout(() => {
                document.getElementById('rfold').style.display = 'none'
            }, 450);
        }
        else {
            clearTimeout(timerRef.current)
            document.getElementById('rfold').style.display = 'flex'
        }

    }, [getRToggle]);  //gerRToggle값이 변경될때마다 실행

    


    return (
        <div>
        <button id ="rfold" className = "rFold-button" onClick={toggleHandeler}>
            <i className="fas fa-arrow-left"></i>
        </button> 
        </div>
    )
}

export default Rbtn;

// style = {{display: !getRToggle ? "none" : "flex" }}