import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

const KakaoMap = () => {

  let latt = 33.450701; //이건 아마 redux로 관리할듯
  let lngg = 126.570667;
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '100%', height: '100%', float: 'right' }}>
      </Map>
    </>
  );
};

export default KakaoMap;

//https://velog.io/@hyunjoogo/%EC%B9%B4%EC%B9%B4%EC%98%A4-Maps-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B2%BD%EB%A1%9C-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0