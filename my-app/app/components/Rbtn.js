'use client'

// 디테일 네브바를 열었을때 렌더링될 폴드 버튼 컴포넌트

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { rightNavActions } from '@/lib/rightNavSlice';

const Rbtn = () => {
    //클릭시 디테일 네브바 정보를 비우고 해당 페이지를 닫으라는 명령을 내려야함

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
    


    return (
        <div>
        <button className = "rFold-button"  style = {{display: !getRToggle ? "none" : "flex" }} onClick={toggleHandeler}>
        {!getRToggle ? <i className="fas fa-arrow-right"></i> : <i className="fas fa-arrow-left"></i>}
        </button> 
        </div>
    )
}

export default Rbtn;