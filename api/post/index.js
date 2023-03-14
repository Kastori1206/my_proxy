// import fetch from "node-fetch";
// import { TOKEN, DATABASE_ID } from "../../config";

// // url/api/post 처럼 사용
// export default async function postTodo(request, response) {
//   if (request.method !== "POST") {
//     return response.status(400).json("method Error");
//   }

//   const res = await fetch(`${BASE_URL}/v1/databases/${DATABASE_ID}/query`, {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "Notion-Version": "2022-06-28",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     body: JSON.stringify({
//       sorts: [
//         {
//           property: "WorkPeriod",
//           direction: "descending",
//         },
//       ],
//     }),
//   });
//   const data = await res.json();
//   return response.status(200).json(data);
// }
import fetch from "node-fetch";
import { TOKEN, DATABASE_ID } from "../../config";

// url/api/post 처럼 사용
export default async function postTodo(request, response) {
  if (request.method !== "POST") {
    return response.status(400).json("method Error");
  }

  const { body } = request;
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();

  return response.status(200).json(data);
}
