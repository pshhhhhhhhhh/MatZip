"use client";


import { createSlice } from '@reduxjs/toolkit';

const regionUiSlice = createSlice({ //카운터라는 스토어의 액션 정의
    name: 'regionUiSlice', //이름
    initialState: { //초기값
        regionState: [] //배열에 누른 지역명 담기
    },
    reducers: {
        toggle(state, action) { //toggle이라는 액션을 호출함, state는 위의 값, action은 컴포넌트에서 보낸 값

            //일단 새로운거 담아
            const newRegion = action.payload;

            //배열에 이미 존재하나?
            const exist = state.regionState.find((arr) => arr.regionname === newRegion.regionname);

            if (!exist) { //없으면 넣어
                state.regionState.push(
                    {
                        id: newRegion.id,
                        regionname: newRegion.regionname,
                        store1: newRegion.store1,
                        store1address: newRegion.store1address,
                        store2: newRegion.store2,
                        store2address: newRegion.store2address,
                        store3: newRegion.store3,
                        store3address: newRegion.store3address,
                    }
                );
            }
            if (exist) { //있으면 빼
                state.regionState = state.regionState.filter((arr) => arr.regionname !== action.payload.regionname)
            }
        }
    }
});


export default regionUiSlice;
export const regionUiActions = regionUiSlice.actions;
// export const {toggleActions} = counterSlice.actions; //여기서 up은 app.js의 파라미터로 넣은값임`