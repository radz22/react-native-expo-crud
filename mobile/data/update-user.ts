import { type user } from "@/types/user";
export async function UpdateUser(data: user) {
  const response = await fetch(`http://192.168.1.12:3000/user/${data._id}`, {
    method: "PUT",
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      age: data.age,
      work: data.work,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
