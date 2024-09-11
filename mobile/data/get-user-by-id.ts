import { type user } from "@/types/user";
export type GetSampleDataArgs = {
  id: string;
};

export async function getUserId({ id }: GetSampleDataArgs): Promise<user> {
  const response = await fetch(`http://192.168.1.12:3000/user/${id}`);
  return await response.json();
}
