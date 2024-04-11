import LeftNav from "./components/LeftNav";
import FoldBtn from "./components/FoldBtn";
import KakaoMap from "./components/KaKaoMap";

// import { connectDB } from "/util/database";

export default async function Home() {


  // const client = await connectDB; //DB입출력 코드는 서버컴포넌트에만 작성할것, 클라이언트 컴포넌트는 유저에게 전송되기 때문
  // const db = client.db("forum2")
  // let result = await db.collection('post2').find().toArray() //특정컬렉션에 있는 모든 데이터를 뽑아라
  // console.log(result);


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
    store1 : '올라이트',
    store1address : '서울특별시 종로구 체부동 102',
    store2 : '레종데트르',
    store2address : '서울특별시 종로구 누하동 21-1',
    store3 : '산펠리체',
    store3address : '서울 특별시 종로구 옥인1길 1',
  },
  {
    id: 2,
    regionname: '한남',
    store1 : '공기',
    store1address : '서울 용산구 이태원로45길 4 1,2층',
    store2 : '우니쿠',
    store2address : '서울 용산구 대사관로5길 34',
    store3 : '카라멜리에오',
    store3address : '서울 용산구 이태원로54길 74 2층',
  },
  {
    id: 3,
    regionname: '한남',
    store1 : '초초',
    store1address : '서울 용산구 이태원로45길 4 1,2층',
    store2 : '초쿠',
    store2address : '서울 용산구 대사관로5길 34',
    store3 : '킁킁킁',
    store3address : '서울 용산구 이태원로54길 74 2층',
  },
  {
    id: 4,
    regionname: '이태원원원',
    store1 : '알까르본',
    store1address : '서울 용산구 이태원로45길 4 1,2층',
    store2 : '초쿠',
    store2address : '서울 용산구 대사관로5길 34',
    store3 : '킁킁킁',
    store3address : '서울 용산구 이태원로54길 74 2층',
  },
];

export const course = courses;