import { TOKEN } from "./config";

export const getTodos = async () => {
  const response = await fetch("/api/get");
  const result = response.json();
  return result;
};

export const getTodo = async (id) => {
  const response = await fetch(`/api/get/${id}`);
  const result = response.json();
  return result;
};

export const postTodo = async () => {
  const response = await fetch("/api/post", {
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
  });
  const result = response.json();
  return result;
};

export const updateTodo = async (id) => {
  const response = await fetch(`/api/put/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      id,
      title: "change Todo",
      completed: true,
    }),
  });
  const result = response.json();
  return result;
};
