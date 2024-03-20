"use client";


import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({ //카운터라는 스토어의 액션 정의
  name:'counterSlice', //이름
  initialState:{value:true}, //초기값
  reducers:{ 
    toggle(state){ //toggle이라는 액션을 호출하면 (밑부터 액션임)
      state.value = !state.value; //state를 변경
      // state.value = state.value + action.payload; //초기값에 payload를 더해주기(파라미터로 넣은값 up값임)
    }
  }
});


export default counterSlice;
export const toggleActions = counterSlice.actions;
// export const {toggleActions} = counterSlice.actions; //여기서 up은 app.js의 파라미터로 넣은값임`