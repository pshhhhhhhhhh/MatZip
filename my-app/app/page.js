import LeftNav from "./components/LeftNav";
import FoldBtn from "./components/FoldBtn";
import KakaoMap from "./components/KaKaoMap";






export default function Home() {

  return (
    <>
      <LeftNav></LeftNav>

      <div className="main-content">
        <KakaoMap />
      </div>
    </>
  );
}


const regions = [ //임시 data
  {
    id: 1,
    regionname: '서촌',
  },
  {
    id: 2,
    regionname: '한남',
  },
  {
    id: 3,
    regionname: '이태원원원원',
  },
  {
    id: 4,
    regionname: '성수성수',
  },
  {
    id: 5,
    regionname: '북북촌',
  }
];

export const region = regions;


/////////////////


const courses = [ //임시 data
  {
    id: 1,
    regionname: '서촌',
  },
  {
    id: 2,
    regionname: '한남',
  },
  {
    id: 3,
    regionname: '이태원원원원',
  },
  {
    id: 4,
    regionname: '성수성수',
  },
  {
    id: 5,
    regionname: '북북촌',
  }
];

export const course = courses;