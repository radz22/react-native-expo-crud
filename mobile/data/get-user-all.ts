import { type user } from "@/types/user";
export async function getUserAll(): Promise<user[]> {
  const response = await fetch("http://192.168.1.12:3000/user");
  return await response.json();
}
