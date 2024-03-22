"use client";


import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({ //카운터라는 스토어의 액션 정의
    name: 'searchSlice', //이름
    initialState: { //초기값
        searchState: [] //배열에 누른 지역명 담기
    },
    reducers: {
        search(state, action) { //toggle이라는 액션을 호출함, state는 위의 값, action은 컴포넌트에서 보낸 값


            //일단 새로운거 담아
            const newRegion = action.payload;

            // 이미 존재하는지 확인
            const existingRegionIndex = state.searchState.findIndex(arr => arr.regionname === newRegion.regionname);

            if (existingRegionIndex === -1) { // 존재하지 않으면 추가
                state.searchState.push({
                    id: newRegion.id,
                    regionname: newRegion.regionname,
                    store1: newRegion.store1,
                    store1address: newRegion.store1address,
                    store2: newRegion.store2,
                    store2address: newRegion.store2address,
                    store3: newRegion.store3,
                    store3address: newRegion.store3address,
                });
            } else { // 이미 존재하면 업데이트
                state.searchState[existingRegionIndex] = {
                    id: newRegion.id,
                    regionname: newRegion.regionname,
                    store1: newRegion.store1,
                    store1address: newRegion.store1address,
                    store2: newRegion.store2,
                    store2address: newRegion.store2address,
                    store3: newRegion.store3,
                    store3address: newRegion.store3address,
                };
            }
        }
    }
});


export default searchSlice;
export const searchActions = searchSlice.actions;
// export const {toggleActions} = counterSlice.actions; //여기서 up은 app.js의 파라미터로 넣은값임`