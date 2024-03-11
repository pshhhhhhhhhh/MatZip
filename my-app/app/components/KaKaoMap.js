import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

const KakaoMap = () => {

  let latt = 33.450701; //이건 아마 redux로 관리할듯
  let lngg = 126.570667;
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '50%', height: '100%',float: 'right' }}>
      </Map>
    </>
  );
};

export default KakaoMap;