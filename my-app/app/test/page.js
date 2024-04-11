import { connectDB } from "/util/database.js"

export default async function test() {
  let client = await connectDB;
  const db = client.db('forum2');
  let result = await db.collection('post2').find().toArray();
  console.log(result);

  return (
    <main>
      {result[0].title}
    </main>
  )
}