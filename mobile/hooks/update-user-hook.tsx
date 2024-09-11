import { router } from "expo-router";
import { UpdateUser } from "@/data/update-user";
import { type user } from "@/types/user";
export const UpdateUserHook = () => {
  const handleUpdate = async (data: user) => {
    try {
      await UpdateUser(data);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { handleUpdate };
};
