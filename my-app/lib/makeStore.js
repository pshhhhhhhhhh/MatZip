"use client";

import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counterSlice'; //카운터슬라이스라는 이름의 리듀서 임포트



export const makeStore = () => {

  return configureStore({ //여기는 슬라이스 집역할을 하는 스토어임
    reducer: {
      toggler : counterSlice.reducer //toggler라는 이름의 리듀서 state를 선언하자
    }
  })
}

