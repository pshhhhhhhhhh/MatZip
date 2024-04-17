"use client";


import { createSlice } from '@reduxjs/toolkit';

const regionUiSlice = createSlice({ //스토어 액션 정의
    name: 'regionUiSlice', //이름
    initialState: { //초기값
        regionState: [], //배열에 지역명 담기
        uiBoolean: false //만약 검색버튼을 누르면 이녀석은 true가 될거임
    },
    reducers: {
        uiBoolean(state, action) { //여기는 RegionBtn에서 false를 보내서 검색하다 들어간 state값을 초기화해줄거임

            //일단 새로운거 담아
            const newRegion = action.payload;

            if(!newRegion){
                state.uiBoolean = false;
                state.regionState = [];
            }
        },
        toggle(state, action) { //toggle이라는 액션을 호출함, state는 위의 값, action은 컴포넌트에서 보낸 값

            //검색하니까 true로 바꿔주기
            state.uiBoolean = true;

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
                        store1type: newRegion.store1type,
                        store1address: newRegion.store1address,
                        store1address2: newRegion.store1address2,
                        store1time: newRegion.store1time,
                        store1phone: newRegion.store1phone,
                        store2: newRegion.store2,
                        store2type: newRegion.store2type,
                        store2address: newRegion.store2address,
                        store2address2: newRegion.store2address2,
                        store2time: newRegion.store2time,
                        store2phone: newRegion.store2phone,
                        store3: newRegion.store3,
                        store3type: newRegion.store3type,
                        store3address: newRegion.store3address,
                        store3address2: newRegion.store3address2,
                        store3time: newRegion.store3time,
                        store3phone: newRegion.store3phone,
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