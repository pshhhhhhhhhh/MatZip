// 'use client'

// import Script from 'next/script';
// import { Map } from 'react-kakao-maps-sdk';
// import { useEffect, useState } from 'react';


// const KAKAO_SDK_URL = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

// // const KakaoMap = () => {

// //   let latt = 33.450701; //이건 아마 redux로 관리할듯
// //   let lngg = 126.570667;



// //   return (
// //     <>
// //       <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
// //       <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '100%', height: '100%', float: 'right' }}>   
// //       </Map>
// //     </>
// //   );
// // };

// // export default KakaoMap;

// // // //https://velog.io/@hyunjoogo/%EC%B9%B4%EC%B9%B4%EC%98%A4-Maps-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B2%BD%EB%A1%9C-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0


// const KakaoMap = () => {


//     const [map, setMap] = useState(null);


//     useEffect(() => {

//         const kakaoMapScript = document.createElement('script')
//         kakaoMapScript.async = false
//         kakaoMapScript.src = KAKAO_SDK_URL
//         document.head.appendChild(kakaoMapScript)

//         const onLoadKakaoAPI = () => {
//             window.kakao.maps.load(() => {
//                 const container = document.getElementById('map')
//                 const options = {
//                     center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//                     level: 3,
//                 }

//                 // 1. 지도 띄우기
//                 const map = new kakao.maps.Map(container, options);

//                 console.log("흠....");

//                 // 2. 중앙에 핀 꽂기
//                 let marker = new kakao.maps.Marker({
//                     map: map,
//                     position: map.getCenter()
//                 });

//                 // 3. 다른 핀 꽂기
//                 new kakao.maps.Marker({
//                     map: map, // 마커를 표시할 지도
//                     position: new kakao.maps.LatLng(33.450936, 126.569477)
//                 });

//                 new kakao.maps.Marker({
//                     map: map, // 마커를 표시할 지도
//                     position: new kakao.maps.LatLng(33.450879, 126.569940),
//                     title: "종말의 지점"
//                 });


//                 // 4. 클릭 이벤트
//                 kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
//                     // 클릭한 위도, 경도 정보를 가져옵니다 
//                     const latlng = mouseEvent.latLng;

//                     // 마커 위치를 클릭한 위치로 옮깁니다
//                     marker.setPosition(latlng);

//                     let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
//                     message += '경도는 ' + latlng.getLng() + ' 입니다';

//                     const resultDiv = document.getElementById('clickLatlng');
//                     resultDiv.innerHTML = message;
//                 });
//             })
//         }

//         kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
//     }, [])

//     function setCenter({ lat, lng }) {
//         const moveLatLon = new kakao.maps.LatLng(lat, lng);
//         map.setCenter(moveLatLon);
//     }

//     function panTo({ lat, lng }) {
//         const moveLatLon = new kakao.maps.LatLng(lat, lng);
//         map.panTo(moveLatLon);
//     }

//     return (
//         <>
//             <div id="map" style={{ width: '100%', height: '100%', float: 'right' }}></div>
//             {/* <p><em>지도를 클릭해주세요!</em></p> */}
//             {/* <div id="clickLatlng"></div> */}
//             <button onClick={() => setCenter({ lat: 33.452613, lng: 126.570888 })}>
//                 지도 중심좌표 이동시키기
//             </button>
//             <button onClick={() => panTo({ lat: 33.45058, lng: 126.574942 })}>
//                 지도 중심좌표 부드럽게 이동시키기
//             </button>
//         </>
//     )
// }

// export default KakaoMap;
'use client'

import Script from 'next/script';
import { useEffect, useState } from 'react';

const KAKAO_SDK_URL = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const REST_API_KEY = process.env.NEXT_KAKAO_REST_API_KEY;

const KakaoMap = () => {



    const [map, setMap] = useState(null);
    const [pointObj, setPointObj] = useState({
        startPoint: {marker: null, lat: null, lng: null},
        endPoint: {marker: null, lat: null, lng: null}
      });

    useEffect(() => {
        const kakaoMapScript = document.createElement('script');
        kakaoMapScript.async = false;
        kakaoMapScript.src = KAKAO_SDK_URL;
        document.head.appendChild(kakaoMapScript);

        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };

                // 1. 지도 띄우기
                const kakaoMap = new kakao.maps.Map(container, options);
                setMap(kakaoMap);

                // // 2. 중앙에 핀 꽂기
                // let marker = new kakao.maps.Marker({
                //     map: kakaoMap,
                //     position: kakaoMap.getCenter(),
                // });

                // // 3. 다른 핀 꽂기
                // new kakao.maps.Marker({
                //     map: kakaoMap,
                //     position: new kakao.maps.LatLng(33.450936, 126.569477),
                // });

                // new kakao.maps.Marker({
                //     map: kakaoMap,
                //     position: new kakao.maps.LatLng(33.450879, 126.569940),
                //     title: "종말의 지점",
                // });

                // // 4. 클릭 이벤트
                // kakao.maps.event.addListener(kakaoMap, 'click', function (mouseEvent) {
                //     const latlng = mouseEvent.latLng;

                //     marker.setPosition(latlng);

                //     let message = `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`;
                //     const resultDiv = document.getElementById('clickLatlng');

                //     if (resultDiv) {
                //         resultDiv.innerHTML = message;
                //     } else {
                //         console.error('클릭 위치 정보를 표시할 요소를 찾을 수 없습니다.');
                //     }
                // });
            });
        };

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

        // Cleanup function
        return () => {
            kakaoMapScript.removeEventListener('load', onLoadKakaoAPI);
        };
    }, []);

    useEffect(() => {
        for (const point in pointObj) {
          if (pointObj[point].marker) {
            pointObj[point].marker.setMap(map);
          }
        }
      }, [pointObj]);

    const setCenter = ({ lat, lng }) => {
        if (map) {
            const moveLatLon = new kakao.maps.LatLng(lat, lng);
            map.setCenter(moveLatLon);
        } else {
            console.error('지도 객체가 초기화되지 않았습니다.');
        }
    };

    const panTo = ({ lat, lng }) => {
        if (map) {
            const moveLatLon = new kakao.maps.LatLng(lat, lng);
            map.panTo(moveLatLon);
        } else {
            console.error('지도 객체가 초기화되지 않았습니다.');
        }
    };

    function setPoint({ lat, lng }, pointType) {
        setCenter({ lat, lng });
        let marker = new kakao.maps.Marker({ position: new kakao.maps.LatLng(lat, lng) });
        setPointObj(prev => {
            if (pointObj[pointType].marker !== null) {
                // 주소가 변경되었을 때 기존 marker를 제거합니다.
                prev[pointType].marker.setMap(null);
            }
            return { ...prev, [pointType]: { marker, lat, lng } };
        });
    }



    async function getCarDirection() {
        // const REST_API_KEY = process.env.NEXT_KAKAO_REST_API_KEY
        // 호출방식의 URL을 입력합니다.
        const url = 'https://apis-navi.kakaomobility.com/v1/directions';

        // 출발지(origin), 목적지(destination)의 좌표를 문자열로 변환합니다.
        const origin = `${pointObj.startPoint.lng},${pointObj.startPoint.lat}`;
        const destination = `${pointObj.endPoint.lng},${pointObj.endPoint.lat}`;

        // 요청 헤더를 추가합니다.
        const headers = {
            Authorization: `KakaoAK ${REST_API_KEY}`,
            'Content-Type': 'application/json'
        };

        // 표3의 요청 파라미터에 필수값을 적어줍니다.
        const queryParams = new URLSearchParams({
            origin: origin,
            destination: destination
        });

        const requestUrl = `${url}?${queryParams}`; // 파라미터까지 포함된 전체 URL

        try {
            const response = await fetch(requestUrl, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();


            const linePath = [];
            data.routes[0].sections[0].roads.forEach(router => {
              router.vertexes.forEach((vertex, index) => {
                 // x,y 좌표가 우르르 들어옵니다. 그래서 인덱스가 짝수일 때만 linePath에 넣어봅시다.
                 // 저도 실수한 것인데 lat이 y이고 lng이 x입니다.
                if (index % 2 === 0) {
                  linePath.push(new kakao.maps.LatLng(router.vertexes[index + 1], router.vertexes[index]));
                }
              });
            });
            var polyline = new kakao.maps.Polyline({
              path: linePath,
              strokeWeight: 5,
              strokeColor: '#000000',
              strokeOpacity: 0.7,
              strokeStyle: 'solid'
            }); 
            polyline.setMap(map);

            console.log("쿡쿡"+data)
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <>
            <div id="map" style={{ width: '100%', height: '100%', float: 'right' }}></div>
            {/* <div id="clickLatlng"></div> */}
            <button onClick={() => setPoint({ lat: 33.452613, lng: 126.570888 }, 'startPoint')}>
                출발지1 지정
            </button>
            <button onClick={() => setPoint({ lat: 33.45058, lng: 126.574942 }, 'endPoint')}>
                목적지1 설정
            </button>
            <button onClick={()=>getCarDirection()}>
                경로구하기
            </button>
        </>
    );
};

export default KakaoMap;
