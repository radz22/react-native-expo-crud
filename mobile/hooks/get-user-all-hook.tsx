import React, { useEffect, useState } from "react";
import { type user } from "@/types/user";
import { getUserAll } from "@/data/get-user-all";
export const GetUserAll = () => {
  const [data, setData] = useState<user[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserAll();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); //

  return { data };
};
