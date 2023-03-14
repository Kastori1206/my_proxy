import fetch from "node-fetch";
import { TOKEN, DATABASE_ID } from "../../config";

const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({
    sorts: [
      {
        property: "WorkPeriod",
        direction: "descending",
      },
    ],
  }),
};
export default async function getTodos(request, response) {
  const res = await fetch(
    `${BASE_URL}/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const data = await res.json();
  return response.status(200).json(data);
}
