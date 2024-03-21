"use client";


import { createSlice } from '@reduxjs/toolkit';

const regionUiSlice = createSlice({ //카운터라는 스토어의 액션 정의
    name: 'regionUiSlice', //이름
    initialState: { //초기값
        regionName: [] //배열에 누른 지역명 담기
    },
    reducers: {
        toggle(state, action) { //toggle이라는 액션을 호출함, state는 위의 값, action은 컴포넌트에서 보낸 값

            //일단 새로운거 담아
            const newRegion = action.payload;

            //배열에 이미 존재하나?
            const exist = state.regionName.find((arr) => arr === newRegion);

            if (!exist) { //없으면 넣어
                state.regionName.push(newRegion);
            }
            if (exist){ //있으면 빼
                state.regionName = state.regionName.filter((arr) => arr !== action.payload)
            }
            
        }
    }
});


export default regionUiSlice;
export const regionUiActions = regionUiSlice.actions;
// export const {toggleActions} = counterSlice.actions; //여기서 up은 app.js의 파라미터로 넣은값임`