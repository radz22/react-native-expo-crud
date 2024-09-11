import { type createuser } from "@/types/create-usert";

export async function createUserData(args: createuser) {
  const response = await fetch("http://192.168.1.12:3000/user/create", {
    method: "POST",
    body: JSON.stringify(args),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
