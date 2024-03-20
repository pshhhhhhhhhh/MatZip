'use client' //스토어 프로바이더
// 이 예제 코드에서는 저장소가 한 번만 생성되도록 참조 값을 확인하여 
// 이 클라이언트 구성 요소가 안전하게 다시 렌더링되는지 확인함


import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/makeStore'

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}