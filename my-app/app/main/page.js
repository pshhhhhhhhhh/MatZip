import { connectDB } from "/util/database.js"
import LeftNav from "../components/LeftNav";
import FoldBtn from "../components/FoldBtn";
import KakaoMap from "../components/KaKaoMap";

export default async function test() {
  let client = await connectDB; //DB입출력 코드는 서버컴포넌트에만 작성할것, 클라이언트 컴포넌트는 유저에게 전송되기 때문
  const db = client.db('forum2');
  let regions = await db.collection('regions').find().toArray();  //특정컬렉션에 있는 모든 데이터를 뽑아라
  let courses = await db.collection('courses').find().toArray();
  console.log(courses);

  return (
    <>
      <LeftNav 
      regions = {regions}
      courses = {courses}
      ></LeftNav>

      <div className="main-content">
        <KakaoMap />
      </div>
    </>
  )
}

// {result[0].title}