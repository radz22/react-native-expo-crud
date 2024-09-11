import { createUserData } from "@/data/create-user";
import { router } from "expo-router";
import { DeleteUser } from "@/data/delete-user-data";
export const DeleteUserHook = () => {
  const handleDelete = async (id: string) => {
    try {
      await DeleteUser(id);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { handleDelete };
};
