import React, { useEffect, useState } from "react";
import { type user } from "@/types/user";
import { getUserId } from "@/data/get-user-by-id";
export const GetUserById = (id: string) => {
  const [data, setData] = useState<user | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserId({ id });
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]); // Dependency array includes id so the hook refetches data when id changes

  return { data };
};
