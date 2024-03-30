'use client'

//기본 폴드버튼 컴포넌트

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleActions } from '@/lib/counterSlice';
import { useEffect, useRef } from 'react';


const FoldBtn = () => {

    const timerRef = useRef(null); //값을 기억하고 싶지만 useeffect가 실행 될때만 렌더링하기 위해서 useRef사용 


    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();


    const toggleHandeler = () => {
        dispatch(toggleActions.toggle())
    }

    const getToggle = useAppSelector(state => { // 네브바 액션을 한 결과값 불러오기
        return state.toggler.value;
    });

    const getItem = useAppSelector(state => { // 네브바 액션을 한 결과값 불러오기
        return state.rightNavToggle.value
    });

    const getRToggle = useAppSelector(state => { // 디테일 네브바 state 불러와서 true면 렌더링 안해주기
        return state.rightNavToggle.value;
    });

    useEffect(() => { //버튼 조금 늦게 렌더링 되게 하기 
        if (getRToggle === false) {
            timerRef.current = setTimeout(() => {
                document.getElementById('fold').style.display = 'flex'
            }, 450);
        }
        else {
            clearTimeout(timerRef.current)
            document.getElementById('fold').style.display = 'none'
        }

    }, [getRToggle]); //gerRToggle값이 변경될때마다 실행


    return (
        // <button className="fold-button"></button>
        <div>
            <button id = "fold" className="fold-button"  onClick={toggleHandeler}>
                {!getToggle ? <i className="fas fa-arrow-right"></i> : <i className="fas fa-arrow-left"></i>}
            </button>
        </div>
    )
}

export default FoldBtn;

// style={{ display: getRToggle ? "none" : "flex" }}