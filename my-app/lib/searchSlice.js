"use client";


import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({ //카운터라는 스토어의 액션 정의
    name: 'searchSlice', //이름
    initialState: { //초기값
        searchState: [] //배열에 누른 지역명 담기
    },
    reducers: {
        storeSearch(state, action) { //toggle이라는 액션을 호출함, state는 위의 값, action은 컴포넌트에서 보낸 값

            // 검색
            // 컴포넌트에서 값을 보내면
            // 처음에 배열에 담음
            // 만약 담긴 것과 가게 이름이나 지역이름이 다르면 배열을 비우고 새로 다시 담음 
            // action이 지역이라면 같은 지역을 모두 출력
            // action이 가게라면 해당 가게만 출력
            // 
            // 한남검색 한남,가게1 , 한남, 가게2
            // 한남에서 가게2검색 -> 가게2
            // 가게2에서 가게1검색 -> 가게1 

            //일단 새로운거 담아
            const newRegion = action.payload;

            // state가 비어있는지 확인
            if (state.searchState.length === 0) {
                newRegion.map(function (arr) {
                    state.searchState.push(
                        {
                            id: arr.id,
                            regionname: arr.regionname,
                            store1: arr.store1,
                            store1address: arr.store1address,
                            store2: arr.store2,
                            store2address: arr.store2address,
                            store3: arr.store3,
                            store3address: arr.store3address,
                        }
                    );
                }
                )
            } else {
                // 담겨있으면 기존의 배열을 지우고 새로운것으로 채워
                state.searchState = [];
                newRegion.map(function (arr) {
                    state.searchState.push(
                        {
                            id: arr.id,
                            regionname: arr.regionname,
                            store1: arr.store1,
                            store1address: arr.store1address,
                            store2: arr.store2,
                            store2address: arr.store2address,
                            store3: arr.store3,
                            store3address: arr.store3address,
                        }
                    );
                })
            }
            console.log("여기는 식당이름 검색 " + JSON.stringify(state.searchState))
        },
        regionSearch(state, action) { //toggle이라는 액션을 호출함, state는 위의 값, action은 컴포넌트에서 보낸 값


            // // 컴포넌트에서 값을 보내면
            // // 처음에 배열에 담음
            // // 만약 지역명이 같으면 그대로 둠
            // // 지역명이 다르면 기존 배열을 새로운 배열로 교체


            // 새로운 region 정보
            const newRegion = action.payload;
            // 기존의 state내용중 regionname이 action의 regionname과 동일한지?
            const exist = state.searchState.find((arr) => arr.regionname === newRegion.regionname);

            // state가 비어있는지 확인
            if (state.searchState.length === 0) {
                newRegion.map(function (arr) {
                    state.searchState.push(
                        {
                            id: arr.id,
                            regionname: arr.regionname,
                            store1: arr.store1,
                            store1address: arr.store1address,
                            store2: arr.store2,
                            store2address: arr.store2address,
                            store3: arr.store3,
                            store3address: arr.store3address,
                        }
                    );
                }
                )
            } else {//여기에 들어왔다는건 기존 state에 값이 있음, exist가 false 즉 기존값과 새로운값이 다르면 해당하는 배열의 위치를 찾아서 업데이트 해줘야함
                // action regionname이 기존 state와 동일하다면 false,
                // action reginname이 기존 state와 다르면 배열을 비우고 채우기

                if (!exist) {
                    state.searchState = [];
                    newRegion.map(function (arr) {
                        state.searchState.push(
                            {
                                id: arr.id,
                                regionname: arr.regionname,
                                store1: arr.store1,
                                store1address: arr.store1address,
                                store2: arr.store2,
                                store2address: arr.store2address,
                                store3: arr.store3,
                                store3address: arr.store3address,
                            }
                        );
                    })
                }

                // if (exist) {
                //     newRegion.map(function (arr) {
                //         state.searchState.push(
                //             {
                //                 id: arr.id,
                //                 regionname: arr.regionname,
                //                 store1: arr.store1,
                //                 store1address: arr.store1address,
                //                 store2: arr.store2,
                //                 store2address: arr.store2address,
                //                 store3: arr.store3,
                //                 store3address: arr.store3address,
                //             }
                //         );
                //     })
                // }
                // else {
                //     const existIndex = state.searchState.findIndex((arr) => arr.regionname === newRegion.regionname);
                //     newRegion.map(function (arr, idx) {
                //         if (existIndex === idx) {
                //             state.searchState.push(
                //                 {
                //                     id: arr.id,
                //                     regionname: arr.regionname,
                //                     store1: arr.store1,
                //                     store1address: arr.store1address,
                //                     store2: arr.store2,
                //                     store2address: arr.store2address,
                //                     store3: arr.store3,
                //                     store3address: arr.store3address,
                //                 }
                //             );
                //         }
                //     })

                // }


            }
            console.log("여기는 지역명 검색 " + JSON.stringify(state.searchState))
        }
    }
});


export default searchSlice;
export const searchActions = searchSlice.actions;
