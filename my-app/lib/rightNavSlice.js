"use client";

// 디테일 네브바의 fold state
import { createSlice } from '@reduxjs/toolkit';

const rightNavSlice = createSlice({ //카운터라는 스토어의 액션 정의
  name: 'rightNavSlice', //이름
  initialState: {
    regionInfo: [], // 배열에 지역명 담기
    value: false // 디테일 내브바 토글하기
  }, //초기값
  reducers: {
    // toggle(state) { //toggle이라는 액션을 호출하면 토글하기
    //   state.value = !state.value; //state를 변경
    // },
    close(state, action) { //close이라는 액션을 호출하면 닫아버리기
      state.value = action.payload; //state를 변경
    }
    ,
    regionInfo(state, action) { //누른 지역 정보 담기, 토글하기


      const newRegion = action.payload;

      if (state.regionInfo.length === 0) { //아무것도 없다면 일단 디테일네브 열고 보여주기
        state.regionInfo = newRegion;
        state.value = true;
      }
      else{ //뭔가 있어
        if (state.regionInfo.id === newRegion.id) { //action으로 온 값과 기본 값이 같으면 디테일 네브 닫고 비워
          state.value = false;
          state.regionInfo = []
        }
        else { // 다르면 열고 새로채워
          state.regionInfo = newRegion;
          state.value = true;
        }
      }
    }
  }
});


export default rightNavSlice;
export const rightNavActions = rightNavSlice.actions;