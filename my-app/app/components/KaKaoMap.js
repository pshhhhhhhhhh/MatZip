'use client'

import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';
import { useEffect } from 'react';


const KAKAO_SDK_URL = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

// const KakaoMap = () => {

//   let latt = 33.450701; //이건 아마 redux로 관리할듯
//   let lngg = 126.570667;



//   return (
//     <>
//       <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
//       <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '100%', height: '100%', float: 'right' }}>   
//       </Map>
//     </>
//   );
// };

// export default KakaoMap;

// // //https://velog.io/@hyunjoogo/%EC%B9%B4%EC%B9%B4%EC%98%A4-Maps-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B2%BD%EB%A1%9C-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0


const KakaoMap = () => {
  

  useEffect(() => {

      const kakaoMapScript = document.createElement('script')
      kakaoMapScript.async = false
      kakaoMapScript.src = KAKAO_SDK_URL
      document.head.appendChild(kakaoMapScript)

      const onLoadKakaoAPI = () => {
          window.kakao.maps.load(() => {
              const container = document.getElementById('map')
              const options = {
                  center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                  level: 3,
              }

              // 1. 지도 띄우기
              const map = new kakao.maps.Map(container, options);

              console.log("흠....");

              // 2. 중앙에 핀 꽂기
              let marker = new kakao.maps.Marker({ 
                  map: map,
                  position: map.getCenter() 
              }); 

              // 3. 다른 핀 꽂기
              new kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position:  new kakao.maps.LatLng(33.450936, 126.569477)
              });

              new kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position:  new kakao.maps.LatLng(33.450879, 126.569940),
                  title: "종말의 지점"
              });


              // 4. 클릭 이벤트
              kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
                  // 클릭한 위도, 경도 정보를 가져옵니다 
                  const latlng = mouseEvent.latLng; 
                  
                  // 마커 위치를 클릭한 위치로 옮깁니다
                  marker.setPosition(latlng);
                  
                  let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
                  message += '경도는 ' + latlng.getLng() + ' 입니다';
                  
                  const resultDiv = document.getElementById('clickLatlng'); 
                  resultDiv.innerHTML = message;
              });
          })
      }

      kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, [])

  return (
      <>
          <div id="map" style={{ width: '100%', height: '500px', float: 'right'  }}></div>
          {/* <p><em>지도를 클릭해주세요!</em></p> */}
          <div id="clickLatlng"></div>
      </>
  )
}

export default KakaoMap;