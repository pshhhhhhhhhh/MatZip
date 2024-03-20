'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleActions } from '@/lib/counterSlice';

const FoldBtn = () => {

    // 액션 객체를 전달할 dispatch를 생성하는 useAppDispatch 함수를 불러오기
    const dispatch = useAppDispatch();

    const toggleHandeler = () =>{
        dispatch(toggleActions.toggle())
    }
    
    const getToggle = useAppSelector(state=>{ // 액션을 한 결과값 불러오기
        console.log(state.toggler.value)
        return state.toggler.value;
      });


    return (
        // <button className="fold-button"></button>
        <div>
        <button className = "fold-button" onClick={toggleHandeler}>
        {getToggle ? <i class="fas fa-arrow-right"></i> : <i class="fas fa-arrow-left"></i>}
        </button> 
        </div>
    )
}

export default FoldBtn;