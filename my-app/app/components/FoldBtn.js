'use client'

//기본 폴드버튼 컴포넌트

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleActions } from '@/lib/counterSlice';

const FoldBtn = () => {

    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();

    const toggleHandeler = () =>{
        dispatch(toggleActions.toggle())
    }
    
    const getToggle = useAppSelector(state=>{ // 네브바 액션을 한 결과값 불러오기
        return state.toggler.value;
    });

    const getRToggle = useAppSelector(state=>{ // 디테일 네브바 state 불러와서 true면 렌더링 안해주기
        return state.rightNavToggle.value;
    });

    return (
        // <button className="fold-button"></button>
        <div>
        <button className = "fold-button" style = {{display: getRToggle ? "none" : "flex" }} onClick={toggleHandeler}>
        {!getToggle ? <i className="fas fa-arrow-right"></i> : <i className="fas fa-arrow-left"></i>}
        </button> 
        </div>
    )
}

export default FoldBtn;